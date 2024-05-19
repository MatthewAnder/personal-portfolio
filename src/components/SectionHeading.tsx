import { Heading } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectiongHeading {
  label: string;
}

const SectionHeading = ({ label }: SectiongHeading) => {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.9", "1.33 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

  return (
    <motion.span ref={ref} style={{ scale, opacity, x }}>
      <Heading
        as={"h1"}
        fontSize={"4xl"}
        color={"text.main"}
        mt={24}
        mb={{ base: 2, md: 4 }}
      >
        {label}
      </Heading>
    </motion.span>
  );
};

export default SectionHeading;
