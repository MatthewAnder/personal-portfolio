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
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Import Sections
import Tilt from "@/components/Tilt";
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
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.from(titleRef.current, { opacity: 0, y: 30, duration: 0.7 })
      .from(pictureRef.current, { opacity: 0, scale: 0.92, duration: 0.7 }, 0.3);

    // Subtle parallax on scroll out of hero
    gsap.to(pictureRef.current, {
      y: -60,
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
      gap={{ base: 4, lg: 10 }}
      minH="100vh"
      h={{ base: "auto", lg: "100vh" }}
      w="100%"
      pt={{ base: 20, lg: 0 }}
      pb={{ base: 10, lg: 0 }}
      userSelect="none"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 15% 45%, rgba(150,187,167,0.6) 0%, transparent 65%)," +
          "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(94,138,121,0.45) 0%, transparent 60%)," +
          "radial-gradient(ellipse 130% 60% at 50% -5%, rgba(197,219,209,0.85) 0%, transparent 70%)",
      }}
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
    <VStack align={{ base: "center", lg: "start" }} mx={6}>
      <Heading
        cursor="default"
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        lineHeight="tall"
        color="secondary.600"
      >
        {"Matthew Haryanto"}
      </Heading>
      <HStack alignItems="center">
        <Heading fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}>is a</Heading>
        <Typewriter />
      </HStack>
      <Text
        fontSize={{ base: "md", sm: "lg", lg: "3xl" }}
        color="primary.400"
        fontWeight="bold"
      >
        {"Developer!"}
      </Text>
      <br />
      <DownloadBtn />
    </VStack>
  );
};

const Picture = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <Tilt>
      <Box
        position="relative"
        transformOrigin="bottom right"
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
          position="relative"
          boxSize={{ base: "36", sm: "52", lg: "xs" }}
          objectFit="cover"
          rounded="full"
          boxShadow="2xl"
          zIndex={3}
        />
      </Box>
    </Tilt>
  );
};

const DownloadBtn = () => {
  return (
    <Button
      as="a"
      href="/Matthew_Haryanto_resume.pdf"
      target="_blank"
      size="lg"
      position="relative"
      bg="text.main"
      border="solid transparent"
      borderRadius="full"
      borderWidth="0 0 4px"
      color="accent.main"
      cursor="pointer"
      letterSpacing="0.06em"
      fontSize="sm"
      px={8}
      transform="translateZ(0)"
      transition="filter 0.2s ease, transform 0.2s ease"
      userSelect="none"
      _after={{
        content: '""',
        bgClip: "padding-box",
        backgroundColor: "secondary.main",
        border: "solid transparent",
        borderRadius: "full",
        borderWidth: "0 0 4px",
        bottom: "-4px",
        left: "0",
        position: "absolute",
        right: "0",
        top: "0",
        zIndex: "-1",
      }}
      _hover={{
        filter: "brightness(1.15)",
        transform: "translateY(-1px) translateZ(0)",
      }}
      _active={{
        borderWidth: "4px 0 0",
        background: "none",
        transform: "translateY(0) translateZ(0)",
      }}
      rightIcon={<DownloadIcon />}
    >
      MY RESUME
    </Button>
  );
};

export default Page;
