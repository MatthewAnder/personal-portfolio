"use client";

import { Box, Center, Flex } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import NextLink from "next/link";
import { useCallback, useEffect, useRef } from "react";

import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const linkRefs = useRef<(HTMLElement | null)[]>([]);

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "expo.out",
      });
    },
    { scope: navRef },
  );

  useEffect(() => {
    const activeIndex = links.findIndex((l) => l.name === activeSection);
    const activeLink = linkRefs.current[activeIndex];
    if (!activeLink || !indicatorRef.current) return;

    gsap.to(indicatorRef.current, {
      x: activeLink.offsetLeft,
      width: activeLink.offsetWidth,
      height: activeLink.offsetHeight,
      duration: 0.4,
      ease: "expo.out",
    });
  }, [activeSection]);

  const setLinkRef = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      linkRefs.current[index] = el;
    },
    [],
  );

  return (
    <Center userSelect="none">
      <Flex
        ref={navRef}
        top={4}
        mx={3}
        px={{ base: 1, md: 4 }}
        rounded="full"
        zIndex={10}
        position="fixed"
        alignItems="center"
        overflow="hidden"
        style={{
          background: "rgba(42, 30, 40, 0.72)",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          border: "1px solid rgba(150, 187, 167, 0.18)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.18), 0 1px 0 rgba(150,187,167,0.12) inset",
        }}
      >
        <Box
          as="span"
          ref={indicatorRef}
          position="absolute"
          left={0}
          zIndex={0}
          bgGradient="linear(to-t, rgba(94, 138, 121, 0.9) 0%, rgba(94, 138, 121, 0) 70%)"
          _before={{
            content: "''",
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "2px",
            bg: "primary.300",
            borderRadius: "full",
          }}
          style={{ width: 0, height: 0 }}
        />
        {links.map((link, i) => (
          <Box
            key={link.hash}
            as={NextLink}
            href={link.hash}
            ref={setLinkRef(i)}
            onClick={() => {
              setActiveSection(link.name);
              setTimeOfLastClick(Date.now());
            }}
            draggable="false"
            py={{ base: 2, md: 3 }}
            px={{ base: 3, sm: 4, md: 5 }}
            height="100%"
            position="relative"
            zIndex={1}
            fontSize={{ base: "xs", sm: "sm", md: "md" }}
            fontWeight="600"
            letterSpacing={{ base: "0.02em", md: "0.06em" }}
            color="accent.main"
            transition="color 0.3s ease"
            _hover={{ color: "primary.200" }}
          >
            {link.name}
          </Box>
        ))}
      </Flex>
    </Center>
  );
};

export default Navbar;
