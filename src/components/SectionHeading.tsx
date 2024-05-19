import { Box, Heading } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectiongHeading {
  label: string;
}

const MotionBox = motion(Box);

const SectionHeading = ({ label }: SectiongHeading) => {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "2 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  const underline = useTransform(scrollYProgress, [0.7, 1], ["75%", "0%"]);
  const underlineOpacity = useTransform(scrollYProgress, [0.7, 1], ["0", "1"]);

  return (
    <motion.span ref={ref} layout style={{ scale, opacity, x }}>
      <Heading
        position={"relative"}
        as={"h1"}
        fontSize={"4xl"}
        color={"text.main"}
        mt={24}
        mb={{ base: 2, md: 4 }}
      >
        {label}
        <MotionBox
          bg={"primary.main"}
          zIndex={-1}
          bottom={0}
          right={-2}
          position={"absolute"}
          width={"100%"}
          h={"20px"}
          style={{ x: underline, opacity: underlineOpacity }}
        />
      </Heading>
    </motion.span>
  );
};

export default SectionHeading;
