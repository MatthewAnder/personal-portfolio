import { Box, Flex } from "@chakra-ui/react";
import Book from "@/components/Book";
import SectionHeading from "../SectionHeading";
const Contact = () => {
  return (
    <Flex
      height={"100vh"}
      id="contact"
      direction={"column"}
      alignItems={"center"}
      w={"100%"}
    >
      <SectionHeading label="Contact Me!" />
    </Flex>
  );
};

export default Contact;
