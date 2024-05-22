import { useSectionInView } from "@/lib/hooks";
import { Box, Flex, Text, Heading, Spacer, Link } from "@chakra-ui/react";
import ContactForm from "../ContactForm";
import SectionHeading from "../SectionHeading";
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

interface RevealProps {
  children: ReactChild;
  width?: "fit-content" | "100%";
  delay?: number;
}

const Reveal = ({ children, width, delay = 0.25 }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const controls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <Box ref={ref} width={width} position={"relative"} overflow={"hidden"}>
      <MotionBox
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: 75, opacity: 0 },
        }}
        initial={"hidden"}
        animate={controls}
        transition={{ duration: delay * 2, delay }}
      >
        {children}
      </MotionBox>
      <MotionBox
        variants={{
          visible: { left: "100%" },
          hidden: { left: 0 },
        }}
        initial={"hidden"}
        animate={slideControls}
        transition={{ duration: delay * 2, ease: "easeIn" }}
        top={4}
        bottom={4}
        left={0}
        right={0}
        position={"absolute"}
        bg={"primary.main"}
        height={"100%"}
      />
    </Box>
  );
};

export default Contact;
