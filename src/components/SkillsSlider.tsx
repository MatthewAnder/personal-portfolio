import { Box, Center, Flex } from "@chakra-ui/react";
import {
  animate,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import useMeasure from "react-use-measure";

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
const DURATION: number = 30;
const ROWS: number = 3;
const TAGS_PER_ROW: number = 10;

interface InfiniteLoop {
  children: ReactNode;
  duration: number;
  reverse: boolean;
}

interface TagType {
  text: string;
}

const InfiniteLoopSlider = ({
  children,
  duration,
  reverse = false,
}: InfiniteLoop) => {
  let [container, { width }] = useMeasure();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const { scrollYProgress } = useScroll();

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  useEffect(() => {
    let controls;
    width = reverse ? -width : width;
    let finalPos = width / 2 - 10;

    controls = animate(x, [0, finalPos], {
      ease: "linear",
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [x, width]);

  return (
    <motion.div
      style={{
        x,
        opacity: opacityProgress,
        width: "max-content",
      }}
      ref={ref}
    >
      <Flex
        width={"fit-content"}
        float={reverse ? "left" : "right"}
        ref={container}
      >
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
  const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min;
  const shuffle = (arr: string[]) => [...arr].sort(() => 0.5 - Math.random());

  return (
    <Center w={"100%"}>
      <Flex
        shrink={0}
        p={"1.5rem 0"}
        flexDir={"column"}
        position={"relative"}
        gap={"1rem 0"}
        maxWidth={"90vw"}
        w={"70rem"}
        overflow={"hidden"}
      >
        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider
            key={i}
            duration={random(DURATION - 5, DURATION + 5)}
            reverse={i % 2 == 0}
          >
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
          height={"100vh"}
          inset={0}
          background={
            "linear-gradient(90deg, #282c34, transparent 30%, transparent 70%, #282c34)"
          }
        />
      </Flex>
    </Center>
  );
};

export default SkillsSlider;
