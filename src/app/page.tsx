"use client";

import { Box, Center, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactChild } from "react";

// Import Sections
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";

const Page = () => {
  return (
    <Box>
      <Home />
      <About />
      <Projects />
      <Contact />
    </Box>
  );
};

const Home = () => {
  return (
    <Center id="home">
      <Flex alignItems={"center"} mx={4} height={"100vh"}>
        <Title />
        <Picture />
      </Flex>
    </Center>
  );
};

const Title = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
    >
      <VStack align={"end"} mx={6}>
        <Heading
          as="h1"
          fontSize={"3xl"}
          lineHeight="tall"
          color={"primary.500"}
          letterSpacing={"3px"}
        >
          MATTHEW HARYANTO
        </Heading>
        <AnimatedText />
        <Heading
          as="h2"
          fontSize={"2xl"}
          lineHeight="tall"
          color={"primary.600"}
        >
          {"<!--- Developer --->"}
        </Heading>
      </VStack>
    </motion.div>
  );
};

const AnimatedText = () => {
  return (
    <Flex
      direction="column"
      align={"end"}
      height="4.5em"
      overflow={"hidden"}
      zIndex={1}
    >
      <HighlightText color={"primary.100"}>Frontend</HighlightText>
      <HighlightText color={"primary.200"}>Backend</HighlightText>
      <HighlightText color={"primary.300"}>Game</HighlightText>
      <HighlightText color={"primary.400"}>Cybersecurity?</HighlightText>
      <HighlightText color={"primary.100"}>Frontend</HighlightText>
    </Flex>
  );
};

const HighlightText = ({
  children,
  color,
}: {
  children: ReactChild;
  color: any;
}) => {
  return (
    <motion.div
      animate={{ y: ["0%", "-100%", "-200%", "-300%", "-400%"] }}
      transition={{
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          delay: 1,
          ease: "backInOut",
        },
      }}
    >
      <Heading
        lineHeight="1.2em"
        fontSize="4em"
        color={color}
        letterSpacing={-4}
      >
        {children.toString()}
      </Heading>
    </motion.div>
  );
};

const Picture = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <Image
        src="/images/profile.jpg"
        alt="img"
        boxSize={"md"}
        objectFit="cover"
        rounded={"full"}
        boxShadow={"2xl"}
      />
    </motion.div>
  );
};

export default Page;
