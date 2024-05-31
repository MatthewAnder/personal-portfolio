import { Box } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

const MotionBox = motion(Box);

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

const Reveal = ({ children, width, delay = 0.25 }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const controls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      controls.start("visible");
    }
  }, [isInView, controls, slideControls]);

  return (
    <Box ref={ref} width={width} position={"relative"} overflow={"hidden"}>
      <MotionBox
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: 75, opacity: 0 },
        }}
        initial={"hidden"}
        animate={controls}
        transition={{ duration: delay * 2, delay }}
      >
        {children}
      </MotionBox>
      <MotionBox
        variants={{
          visible: { left: "100%" },
          hidden: { left: 0 },
        }}
        initial={"hidden"}
        animate={slideControls}
        transition={{ duration: delay * 2, ease: "easeIn" }}
        top={4}
        bottom={4}
        left={0}
        right={0}
        position={"absolute"}
        bg={"primary.main"}
        height={"100%"}
      />
    </Box>
  );
};

export default Reveal;
