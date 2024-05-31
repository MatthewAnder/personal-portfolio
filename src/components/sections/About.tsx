import SectionHeading from "@/components/SectionHeading";
import { Center, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <Center ref={ref}>
      <Flex
        id="about"
        alignItems={"center"}
        height={"100vh"}
        direction={"column"}
      >
        <SectionHeading label="Learn More!" />
        afa
      </Flex>
    </Center>
  );
};

export default About;
