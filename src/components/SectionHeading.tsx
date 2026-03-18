"use client";
import { Box, Heading } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface SectionHeadingProps {
  label: string;
}

const SectionHeading = ({ label }: SectionHeadingProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(sliderRef.current, { x: "100%", opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 88%",
          once: true,
        },
      });

      tl.fromTo(
        headingRef.current,
        { scale: 0.7, opacity: 0, x: "40%" },
        { scale: 1, opacity: 1, x: "0%", duration: 0.8, ease: "expo.out" },
      ).to(
        sliderRef.current,
        { x: 0, opacity: 1, duration: 0.6, ease: "expo.out" },
        "-=0.3",
      );
    },
    { scope: containerRef },
  );

  return (
    <Box
      ref={containerRef}
      position="relative"
      width="fit-content"
      mt={{ base: 12, md: 20 }}
      mb={{ base: 2, md: 4 }}
      zIndex={1}
    >
      <Heading
        ref={headingRef}
        as="h1"
        fontSize={{ base: "3xl", md: "4xl" }}
        color="text.main"
      >
        {label}
      </Heading>
      <Box
        ref={sliderRef}
        bg="primary.main"
        zIndex={-1}
        bottom={0}
        right={-2}
        position="absolute"
        width="100%"
        h="20px"
      />
    </Box>
  );
};

export default SectionHeading;
