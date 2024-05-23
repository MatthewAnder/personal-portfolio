import { Box, Heading } from "@chakra-ui/react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface SectiongHeading {
  label: string;
}

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const SectionHeading = ({ label }: SectiongHeading) => {
  const headingRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["0 1", "1 .7"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const x = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

  const slider = useAnimation();

  useEffect(() => {
    const unsubscribe = opacity.on("change", (value) => {
      if (value === 1) {
        slider.start("visible");
      } else {
        slider.start("hidden");
      }
    });

    // Clean up the subscription on component unmount
    return () => unsubscribe();
  });

  return (
    <Box
      position={"relative"}
      width={"fit-content"}
      mt={24}
      mb={{ base: 2, md: 4 }}
      zIndex={1}
    >
      <MotionHeading
        ref={headingRef}
        style={{ opacity, x, scale }}
        as={"h1"}
        fontSize={"4xl"}
        color={"text.main"}
      >
        {label}
      </MotionHeading>
      <MotionBox
        variants={{
          visible: { x: 0, opacity: 1 },
          hidden: { x: "100%", opacity: 0 },
        }}
        initial={"hidden"}
        animate={slider}
        transition={{ ease: "easeOut" }}
        bg={"primary.main"}
        zIndex={-1}
        bottom={0}
        right={-2}
        position={"absolute"}
        width={"100%"}
        h={"20px"}
      />
    </Box>
  );
};

export default SectionHeading;
