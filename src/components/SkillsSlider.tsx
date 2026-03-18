"use client";
import { Box, Center, Flex } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ReactNode, useRef } from "react";

gsap.registerPlugin(useGSAP);

const TAGS: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "TailwindCSS",
  "SvelteKit",
  "Next.js",
  "Unity",
  "C",
  "C#",
  "Blender",
  "Java",
  "Racket",
  "Lua",
  "Git",
  "ChakraUI",
  "R",
];
const ROWS: number = 3;
const TAGS_PER_ROW: number = 4;

interface InfiniteLoop {
  children: ReactNode;
  reverse: boolean;
}

interface TagType {
  text: string;
}

function wrapValue(min: number, max: number, v: number): number {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

const InfiniteLoopSlider = ({ children, reverse = false }: InfiniteLoop) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);

  useGSAP(() => {
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    let scrollDelta = 0;
    let smoothVelocity = 0;
    let directionFactor = 1;

    const onScroll = () => {
      const current = window.scrollY;
      scrollDelta = current - lastScrollY;
      lastScrollY = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const ticker = (_: number, deltaTime: number) => {
      smoothVelocity += (scrollDelta * 4 - smoothVelocity) * 0.1;
      scrollDelta = 0;

      const velocityFactor = Math.max(-4, Math.min(4, smoothVelocity * 0.004));

      if (velocityFactor < 0) directionFactor = -1;
      else if (velocityFactor > 0) directionFactor = 1;

      const baseVelocity = reverse ? -2 : 2;
      let moveBy = directionFactor * baseVelocity * (deltaTime / 1000);
      moveBy += directionFactor * moveBy * Math.abs(velocityFactor);

      xRef.current += moveBy;

      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(${wrapValue(-48, -23, xRef.current)}%)`;
      }
    };

    gsap.ticker.add(ticker);

    return () => {
      gsap.ticker.remove(ticker);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      style={{
        width: "max-content",
        transform: "translateX(-23%)",
        willChange: "transform",
      }}
    >
      <Flex>
        {children}
        {children}
        {children}
        {children}
      </Flex>
    </div>
  );
};

const Tag = ({ text }: TagType) => (
  <Center
    fontSize="1.1rem"
    borderRadius="0.4rem"
    mr="1rem"
    bg="background.900"
    color="background.200"
    p="0.7rem 1rem"
    boxShadow={[
      "0 0.1rem 0.2rem rgba(0, 0, 0, 0.2)",
      "0 0.1rem 0.5rem rgba(0, 0, 0, 0.3)",
      "0 0.2rem 1.5rem rgba(0, 0, 0, 0.4)",
    ]}
    suppressHydrationWarning
  >
    <Box as="span" color="background.500" fontSize="1.4rem">
      #
    </Box>
    {text}
  </Center>
);

const SkillsSlider = () => {
  const shuffle = (arr: string[]) => [...arr].sort(() => 0.5 - Math.random());

  return (
    <Center>
      <Flex
        shrink={0}
        p="1.5rem 0"
        flexDir="column"
        position="relative"
        gap="1rem 0"
        maxWidth="100%"
        w={{ base: "100vw", md: "40rem" }}
        overflow="hidden"
      >
        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider key={i} reverse={i % 2 == 0}>
            {shuffle(TAGS)
              .slice(0, TAGS_PER_ROW)
              .map((tag: string) => {
                return <Tag text={tag} key={tag} />;
              })}
          </InfiniteLoopSlider>
        ))}
        <Box
          pointerEvents="none"
          position="absolute"
          height="16rem"
          inset={0}
          background="linear-gradient(90deg, #edf4f0, transparent 25%, transparent 75%, #edf4f0)"
        />
      </Flex>
    </Center>
  );
};

export default SkillsSlider;
