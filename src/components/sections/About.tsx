import { Center, Flex, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <Center>
      <Flex
        alignItems={"center"}
        height={"100vh"}
        id="about"
        direction={"column"}
      >
        <Heading color={"text.main"}>Learn More!</Heading>
      </Flex>
    </Center>
  );
};

export default About;
