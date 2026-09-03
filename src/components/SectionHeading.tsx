"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface SectionHeadingProps {
  eyebrow?: string;
  label: string;
}

const SectionHeading = ({ eyebrow, label }: SectionHeadingProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 16,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 88%",
          once: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <Box
      ref={containerRef}
      width="fit-content"
      mt={{ base: 16, md: 24 }}
      mb={{ base: 3, md: 5 }}
      textAlign="center"
    >
      {eyebrow && (
        <Text
          fontSize="xs"
          letterSpacing="0.24em"
          textTransform="uppercase"
          color="primary.main"
          mb={2}
        >
          {eyebrow}
        </Text>
      )}
      <Heading
        as="h1"
        fontWeight="500"
        fontSize={{ base: "3xl", md: "4xl" }}
        color="text.main"
      >
        {label}
      </Heading>
      <Box mt={3} mx="auto" w="40px" h="1px" bg="primary.main" />
    </Box>
  );
};

export default SectionHeading;
