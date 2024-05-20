import { Box, Flex } from "@chakra-ui/react";
import Book from "@/components/Book";
import SectionHeading from "../SectionHeading";
import { useSectionInView } from "@/lib/hooks";
const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.5);
  return (
    <Flex
      ref={ref}
      id="contact"
      h={"100vh"}
      direction={"column"}
      alignItems={"center"}
      w={"100%"}
    >
      <SectionHeading label="Contact Me!" />
    </Flex>
  );
};

export default Contact;
