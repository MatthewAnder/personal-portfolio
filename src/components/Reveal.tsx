"use client";
import { Box } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

const Reveal = ({ children, width, delay = 0.25 }: RevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 88%",
          once: true,
        },
      });

      tl.fromTo(
        sliderRef.current,
        { left: "0%" },
        { left: "100%", duration: delay * 2, ease: "expo.inOut" },
        0,
      );

      tl.fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: delay * 2, ease: "expo.out" },
        delay * 0.6,
      );
    },
    { scope: containerRef },
  );

  return (
    <Box ref={containerRef} width={width} position="relative" overflow="hidden">
      <Box ref={contentRef}>{children}</Box>
      <Box
        ref={sliderRef}
        top={4}
        bottom={4}
        left={0}
        right={0}
        position="absolute"
        bg="primary.main"
        height="100%"
      />
    </Box>
  );
};

export default Reveal;
