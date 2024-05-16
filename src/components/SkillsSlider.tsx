import { Box, Center, Flex } from "@chakra-ui/react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import { ReactNode, useRef } from "react";

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
const TAGS_PER_ROW: number = 5;

interface InfiniteLoop {
  children: ReactNode;
  reverse: boolean;
}

interface TagType {
  text: string;
}

const InfiniteLoopSlider = ({ children, reverse = false }: InfiniteLoop) => {
  const baseX = useMotionValue(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  });

  const x = useTransform(baseX, (v: number) => `${wrap(-23, -48, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t: number, delta: number) => {
    const baseVelocity = reverse ? -2 : 2;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div style={{ x, width: "max-content" }}>
      <Flex>
        {children}
        {children}
        {children}
        {children}
      </Flex>
    </motion.div>
  );
};

const Tag = ({ text }: TagType) => (
  <Center
    fontSize={"0.9rem"}
    borderRadius={"0.4rem"}
    mr={"1rem"}
    bg={"#334155"}
    color={"#e2e8f0"}
    p={"0.7rem 1rem"}
    boxShadow={[
      "0 0.1rem 0.2rem rgba(0, 0, 0, 0.2)",
      "0 0.1rem 0.5rem rgba(0, 0, 0, 0.3)",
      "0 0.2rem 1.5rem rgba(0, 0, 0, 0.4)",
    ]}
    suppressHydrationWarning // its inevitable
  >
    <Box as="span" color={"#64748b"} fontSize={"1.2rem"}>
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
        p={"1.5rem 0"}
        flexDir={"column"}
        position={"relative"}
        gap={"1rem 0"}
        maxWidth={"90vw"}
        w={"60rem"}
        overflow={"hidden"}
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
          pointerEvents={"none"}
          position={"absolute"}
          height={"15rem"}
          inset={0}
          background={
            "linear-gradient(90deg, #282c34, transparent 30%, transparent 70%, #282c34)"
          }
        />{" "}
      </Flex>
    </Center>
  );
};

export default SkillsSlider;
