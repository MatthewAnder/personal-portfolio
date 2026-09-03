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
      <SectionHeading eyebrow="Get In Touch" label="Contact" />
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
        <Heading fontWeight="500" fontSize={{ base: "2xl", md: "3xl" }}>
          Reach me directly at <br />
          <Link color="primary.main" href="mailto:matthewanh@hotmail.com">
            matthewanh@hotmail.com
          </Link>
          , or send a message.
        </Heading>
      </Reveal>
      <Reveal width="fit-content" delay={0.3}>
        <Text fontSize="md" mt={3} opacity={0.65}>
          Open to conversations about new opportunities and collaborations.
        </Text>
      </Reveal>
    </Box>
  );
};

export default Contact;
