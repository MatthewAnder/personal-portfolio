"use client";
import { Box } from "@chakra-ui/react";
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
        scaleX: 0.3,
        duration: 1.1,
        ease: "power2.out",
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
    <Box
      ref={ref}
      w="100%"
      maxW="2xl"
      mx="auto"
      px={{ base: 8, md: 0 }}
      py={{ base: 12, md: 16 }}
    >
      <Box h="1px" w="100%" bg="background.300" />
    </Box>
  );
};

export default SectionDivider;
