"use client";
import { Box, Flex } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SectionDivider = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        scaleX: 0.4,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          once: true,
        },
      });
    },
    { scope: ref },
  );

  return (
    <Flex
      ref={ref}
      alignItems="center"
      w="100%"
      maxW="3xl"
      mx="auto"
      px={{ base: 8, md: 0 }}
      py={10}
    >
      {/* Left line */}
      <Box
        flex={1}
        h="1px"
        bgGradient="linear(to-r, transparent, primary.200)"
      />

      {/* Diamond cluster */}
      <Flex alignItems="center" gap={2} mx={5}>
        <Box
          w="5px"
          h="5px"
          border="1.5px solid"
          borderColor="primary.200"
          transform="rotate(45deg)"
          opacity={0.5}
        />
        <Box
          w="9px"
          h="9px"
          border="1.5px solid"
          borderColor="primary.400"
          transform="rotate(45deg)"
        />
        <Box
          w="5px"
          h="5px"
          border="1.5px solid"
          borderColor="primary.200"
          transform="rotate(45deg)"
          opacity={0.5}
        />
      </Flex>

      {/* Right line */}
      <Box
        flex={1}
        h="1px"
        bgGradient="linear(to-l, transparent, primary.200)"
      />
    </Flex>
  );
};

export default SectionDivider;
