"use client";

import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  VStack,
  keyframes,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactChild } from "react";

// Import Sections
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

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
    <Box>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 75 },
        }}
      >
        <HomeRaw />
      </motion.div>
    </Box>
  );
};

const HomeRaw = () => {
  return (
    <Center>
      <Flex alignItems={"center"} mx={4} height={"100vh"}>
        <Title />
        <Picture />
      </Flex>
    </Center>
  );
};

const semicolon = "black";
const Title = () => {
  return (
    <VStack align={"end"} mx={6}>
      <Heading as="h1" fontSize={"2xl"} lineHeight="tall" color={"primary.500"}>
        MATTHEW HARYANTO
      </Heading>
      <AnimatedText />
      <Heading as="h2" fontSize={"2xl"} lineHeight="tall" color={"primary.600"}>
        {"<!--- Developer --->"}
      </Heading>
    </VStack>
  );
};

const Character = ({ color, char }: { color: any; char: String }) => {
  return (
    <Box as="span" color={color}>
      {char}
    </Box>
  );
};

const gap: number = 1.2;
const keys = keyframes`
  25% {
    transform: translateY(-${gap}em);
  }
  50% {
    transform: translateY(-${gap * 2}em)
  }
  75% {
    transform: translateY(-${gap * 3}em)
  }
  100% {
    transform: translateY(-${gap * 4}em)
  }
`;
const animation = `${keys} infinite 10s`;
const AnimatedText = () => {
  return (
    <Flex direction="column" align={"end"} height="4.5em" overflow={"hidden"}>
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
      animate=""
      variants={{
        visible: { opacity: 1 },
        hiddent: { opacity: 0 },
      }}
    >
      <Heading
        lineHeight="1.2em"
        fontSize="4em"
        color={color}
        letterSpacing={0}
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
      transition={{ duration: 1, delay: 0.6, type: "spring", damping: 10 }}
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
