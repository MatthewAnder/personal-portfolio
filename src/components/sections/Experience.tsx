import { Box, Flex } from "@chakra-ui/react";
import SectionHeading from "../SectionHeading";
import Timeline from "../Timeline";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <Box id="experience" ref={ref} position={"relative"} h={"300vh"}>
      <SectionHeading label="Experience" />
      <Flex
        position={"sticky"}
        top={0}
        h={"100vh"}
        alignItems={"center"}
        overflow={"hidden"}
        mt={10}
      >
        <motion.div style={{ x }}>
          <Timeline />
        </motion.div>
      </Flex>
    </Box>
  );
};

export default Experience;
