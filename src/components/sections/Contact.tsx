import { useSectionInView } from "@/lib/hooks";
import { Box, Flex, Text, Heading, Spacer, Link } from "@chakra-ui/react";
import ContactForm from "../ContactForm";
import SectionHeading from "../SectionHeading";

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
      <Flex
        pt={10}
        direction={{ base: "column", lg: "row" }}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        w={"100%"}
      >
        <SubTexts />
        <ContactForm />
      </Flex>
    </Flex>
  );
};

const SubTexts = () => {
  return (
    <Box w={{ base: "20em", lg: "30em" }} justifySelf={"center"}>
      <Heading>
        Please contact me directly at{" "}
        <Link color={"primary.main"} href={"mailto:matthewanh@hotmail.com"}>
          matthewanh@hotmail.com <br />
        </Link>
        or through this form.
      </Heading>
      <Text fontSize={"lg"}>
        Happy to chat about sports, technology, and ice cream!
      </Text>
    </Box>
  );
};

export default Contact;
