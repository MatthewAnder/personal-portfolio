"use client";

import { Box, Center, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactChild } from "react";
import Typewriter from "@/components/Typewriter";

// Import Sections
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";
import SkillsSlider from "@/components/SkillsSlider";

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
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        alignItems={"center"}
        gap={5}
        height={"100vh"}
      >
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
      <VStack align={{ base: "center", lg: "end" }} mx={6}>
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
          fontSize={{ base: "xl", lg: "2xl" }}
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
  return <Typewriter />;
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
        boxSize={{ base: "sm", lg: "md" }}
        objectFit="cover"
        rounded={"full"}
        boxShadow={"2xl"}
      />
    </motion.div>
  );
};

export default Page;
