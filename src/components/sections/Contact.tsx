import { useSectionInView } from "@/lib/hooks";
import { Box, Flex, Text, Heading, Spacer, Link } from "@chakra-ui/react";
import ContactForm from "../ContactForm";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import {
  MotionValue,
  easeOut,
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { ReactChild, useEffect, useRef } from "react";

const MotionBox = motion(Box);

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
    <Box w={{ base: "20em", lg: "fit-content" }} justifySelf={"center"}>
      <Reveal width="fit-content">
        <Heading>
          Please contact me directly at <br />
          <Link color={"primary.main"} href={"mailto:matthewanh@hotmail.com"}>
            matthewanh@hotmail.com <br />
          </Link>
          or through this form.
        </Heading>
      </Reveal>
      <Reveal width="fit-content" delay={0.3}>
        <Text fontSize={"lg"} mt={2}>
          Happy to chat about sports, technology, and ice cream!
        </Text>
      </Reveal>
    </Box>
  );
};

export default Contact;
