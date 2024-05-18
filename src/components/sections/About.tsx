import { Center, Flex, Heading } from "@chakra-ui/react";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  return (
    <Center>
      <Flex
        alignItems={"center"}
        height={"100vh"}
        id="about"
        direction={"column"}
      >
        <SectionHeading label="Learn More!" />
      </Flex>
    </Center>
  );
};

export default About;
