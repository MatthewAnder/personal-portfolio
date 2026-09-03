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
} from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Import Sections
import SectionDivider from "@/components/SectionDivider";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";

const Page = () => {
  return (
    <Box position="relative" w="100%">
      <Home />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Contact />
    </Box>
  );
};

const Home = () => {
  const { ref: inViewRef } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const titleRef = useRef<HTMLDivElement>(null);
  const pictureRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.from(titleRef.current, { opacity: 0, y: 20, duration: 0.9 }).from(
      pictureRef.current,
      { opacity: 0, duration: 0.9 },
      0.25,
    );

    gsap.to(pictureRef.current, {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  });

  return (
    <Flex
      ref={inViewRef}
      flexDir={{ base: "column", lg: "row" }}
      alignItems="center"
      justifyContent="center"
      gap={{ base: 10, lg: 16 }}
      minH="100vh"
      h={{ base: "auto", lg: "100vh" }}
      w="100%"
      pt={{ base: 24, lg: 0 }}
      pb={{ base: 12, lg: 0 }}
      userSelect="none"
      bg="background.main"
    >
      <Box ref={titleRef}>
        <Title />
      </Box>
      <Box ref={pictureRef}>
        <Picture />
      </Box>
    </Flex>
  );
};

const Title = () => {
  return (
    <VStack align={{ base: "center", lg: "start" }} mx={6} spacing={4}>
      <Text
        fontSize="xs"
        letterSpacing="0.28em"
        textTransform="uppercase"
        color="primary.main"
      >
        Portfolio
      </Text>
      <Heading
        cursor="default"
        fontWeight="500"
        fontSize={{ base: "4xl", sm: "5xl", lg: "7xl" }}
        lineHeight="1.05"
        color="text.main"
      >
        Matthew Haryanto
      </Heading>
      <HStack alignItems="baseline">
        <Heading
          fontWeight="400"
          fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
          color="text.main"
          opacity={0.7}
        >
          is a
        </Heading>
        <Typewriter />
      </HStack>
      <Text
        fontSize={{ base: "md", lg: "lg" }}
        color="text.main"
        opacity={0.65}
        maxW="26em"
        textAlign={{ base: "center", lg: "left" }}
      >
        Developer building considered, well-crafted web and systems software.
      </Text>
      <Box pt={4}>
        <DownloadBtn />
      </Box>
    </VStack>
  );
};

const Picture = () => {
  return (
    <Box
      position="relative"
      border="1px solid"
      borderColor="background.300"
      p={2}
    >
      <Image
        src="https://ccddxtqblestojwqksue.supabase.co/storage/v1/object/public/static/Matthew_Haryanto_headshot.png"
        alt="Matthew Haryanto"
        boxSize={{ base: "48", sm: "60", lg: "sm" }}
        objectFit="cover"
      />
    </Box>
  );
};

const DownloadBtn = () => {
  return (
    <Button
      as="a"
      href="https://ccddxtqblestojwqksue.supabase.co/storage/v1/object/public/static/Matthew_Haryanto_resume.pdf"
      target="_blank"
      size="lg"
      variant="outline"
      borderRadius="0"
      border="1px solid"
      borderColor="text.main"
      color="text.main"
      bg="transparent"
      cursor="pointer"
      letterSpacing="0.16em"
      fontSize="xs"
      textTransform="uppercase"
      px={10}
      transition="background 0.3s ease, color 0.3s ease"
      userSelect="none"
      _hover={{
        bg: "text.main",
        color: "background.main",
      }}
      rightIcon={<DownloadIcon />}
    >
      Resume
    </Button>
  );
};

export default Page;
