"use client";

import Typewriter from "@/components/Typewriter";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Import Sections
import Tilt from "@/components/Tilt";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);

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
    <MotionFlex
      ref={ref}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      flexDir={{ base: "column", lg: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      gap={10}
      height={"100vh"}
      w={"100%"}
      pt={{ base: 28, lg: 0 }}
      bgGradient={
        "linear(164deg, background.200 0%, primary.main, background.main 50%)"
      }
      userSelect={"none"}
    >
      <Title />
      <Picture />
    </MotionFlex>
  );
};

const Title = () => {
  return (
    <MotionVStack
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      align={{ base: "center", lg: "start" }}
      mx={6}
    >
      <Heading
        cursor={"default"}
        fontSize={{ base: "4xl", sm: "6xl" }}
        lineHeight="tall"
        color={"secondary.600"}
      >
        {"Matthew Haryanto"}
      </Heading>
      <HStack alignItems={"center"}>
        <Heading fontSize={{ base: "3xl", lg: "5xl" }}>is a</Heading>
        <Typewriter />
      </HStack>
      <Text
        fontSize={{ base: "xl", lg: "3xl" }}
        color={"primary.400"}
        fontWeight={"bold"}
      >
        {"Developer!"}
      </Text>
      <br />
      <DownloadBtn />
    </MotionVStack>
  );
};

const Picture = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <Tilt>
      <MotionBox
        position="relative"
        transformOrigin={"bottom right"}
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

const DownloadBtn = () => {
  return (
    <Button
      as="a"
      href="/resume.pdf"
      target="_blank"
      size={"lg"}
      position={"relative"}
      bg="text.main"
      border="solid transparent"
      borderRadius="16px"
      borderWidth={"0 0 4px"}
      color="accent.main"
      cursor="pointer"
      transform="translateZ(0)"
      transition="filter .2s"
      userSelect="none"
      _after={{
        content: '""',
        bgClip: "padding-box",
        backgroundColor: "secondary.main",
        border: "solid transparent",
        borderRadius: "16px",
        borderWidth: "0 0 4px",
        bottom: "-4px",
        left: "0",
        position: "absolute",
        right: "0",
        top: "0",
        zIndex: "-1",
      }}
      _hover={{
        filter: "brightness(1.2)",
      }}
      _active={{
        borderWidth: "4px 0 0",
        background: "none",
      }}
      rightIcon={<DownloadIcon />}
    >
      My Resume
    </Button>
  );
};

export default Page;
