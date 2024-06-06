import SectionHeading from "@/components/SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { Box, Center, Flex } from "@chakra-ui/react";
import Milestones from "../Timeline";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const { ref } = useSectionInView("About");
  const horizontalContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: horizontalContainer,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-95%"]);
  return (
    <Flex
      id="about"
      ref={horizontalContainer}
      alignItems={"center"}
      justifyContent={"center"}
      direction={"column"}
      w={"100%"}
    >
      <SectionHeading label="Learn More!" />
      <Box w={"100em"}></Box>
      <Box position={"relative"} w={"100%"} h={"400vh"}>
        <Flex
          position={"sticky"}
          w={"100%"}
          top={0}
          h={"100vh"}
          overflow={"hidden"}
          alignItems={"center"}
        >
          <motion.div style={{ x }}>
            <Milestones />
          </motion.div>
        </Flex>
      </Box>
    </Flex>
  );
};

export default About;
