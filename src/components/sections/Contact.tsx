import { useSectionInView } from "@/lib/hooks";
import { Box, Flex, Text, Heading, Link } from "@chakra-ui/react";
import ContactForm from "../ContactForm";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.5);
  return (
    <Flex
      ref={ref}
      id="contact"
      direction="column"
      alignItems="center"
      h={{ base: "fit-content", lg: "100vh" }}
      w="100%"
      mb={10}
    >
      <SectionHeading label="Contact Me!" />
      <Flex
        pt={10}
        direction={{ base: "column", lg: "row" }}
        alignItems="center"
        justifyContent="space-evenly"
        w="100%"
      >
        <SubTexts />
        <ContactForm />
      </Flex>
    </Flex>
  );
};

const SubTexts = () => {
  return (
    <Box w={{ base: "90%", sm: "26em", lg: "fit-content" }} maxW="30em" justifySelf="center">
      <Reveal width="fit-content">
        <Heading>
          Please contact me directly at <br />
          <Link color="primary.main" href="mailto:matthewanh@hotmail.com">
            matthewanh@hotmail.com <br />
          </Link>
          or through this form.
        </Heading>
      </Reveal>
      <Reveal width="fit-content" delay={0.3}>
        <Text fontSize="lg" mt={2}>
          Happy to chat about sports, technology, and ice cream!
        </Text>
      </Reveal>
    </Box>
  );
};

export default Contact;
