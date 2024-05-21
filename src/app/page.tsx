"use client";

import Typewriter from "@/components/Typewriter";
import { Box, Center, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

// Import Sections
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";

const Page = () => {
  return (
    <Box>
      <Navbar />
      <Socials />
      <Home />
      <About />
      <Projects />
      <Contact />
    </Box>
  );
};

const Home = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <Center
      ref={ref}
      pt={{ base: 28, lg: 0 }}
      bgGradient={
        "linear(164deg, background.200 0%, primary.main, background.main 50%)"
      }
    >
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
          as={"h1"}
          fontSize={{ base: "3xl", sm: "4xl" }}
          lineHeight="tall"
          color={"secondary.600"}
          letterSpacing={"3px"}
        >
          MATTHEW HARYANTO
        </Heading>
        <Typewriter />

        <Heading
          as="h2"
          fontSize={{ base: "xl", lg: "4xl" }}
          lineHeight="tall"
          color={"primary.400"}
        >
          {"<!- - - Developer - - ->"}
        </Heading>
      </VStack>
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
        boxSize={{ base: "sm", lg: "md" }}
        objectFit="cover"
        rounded={"full"}
        boxShadow={"2xl"}
      />
    </motion.div>
  );
};

export default Page;
