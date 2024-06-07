"use client";

import Typewriter from "@/components/Typewriter";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Import Sections
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";
import Tilt from "@/components/Tilt";

const MotionBox = motion(Box);

const Page = () => {
  return (
    <Box position="relative" w={"100%"}>
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
      userSelect={"none"}
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
          cursor={"default"}
          fontSize={{ base: "3xl", sm: "4xl" }}
          lineHeight="tall"
          color={"secondary.600"}
          letterSpacing={"3px"}
        >
          {"MATTHEW HARYANTO"}
        </Heading>
        <Typewriter />

        <Text
          fontSize={{ base: "xl", lg: "3xl" }}
          lineHeight="tall"
          color={"primary.400"}
        >
          {"<!--- Developer --->"}
        </Text>
      </VStack>
    </motion.div>
  );
};

const Picture = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <Tilt>
      <MotionBox
        position="relative"
        transformOrigin={"bottom right"}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(75px)",
        }}
        _before={{
          content: "''",
          position: "absolute",
          top: isMobile ? "0px" : "1em",
          left: isMobile ? "0px" : "1em",
          transformOrigin: "center",
          height: "100%",
          width: "100%",
          background: "text.main",
          borderRadius: "full",
          transformStyle: "preserve-3d",
          transform: "translateZ(-50px) ",
        }}
      >
        <Image
          src="/images/profile.jpg"
          alt="img"
          position={"relative"}
          boxSize={{ base: "sm", lg: "md" }}
          objectFit="cover"
          rounded={"full"}
          boxShadow={"2xl"}
          zIndex={3}
        />
      </MotionBox>
    </Tilt>
  );
};

export default Page;
