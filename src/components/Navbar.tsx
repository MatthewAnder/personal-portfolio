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
        y: -12,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
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
      duration: 0.5,
      ease: "power2.out",
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
        top={0}
        px={{ base: 4, md: 10 }}
        w="100%"
        zIndex={10}
        position="fixed"
        alignItems="center"
        justifyContent="center"
        borderBottom="1px solid"
        borderColor="background.300"
        style={{
          background: "rgba(246, 243, 238, 0.88)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <Flex position="relative" alignItems="center">
          <Box
            as="span"
            ref={indicatorRef}
            position="absolute"
            bottom={0}
            left={0}
            h="1px"
            bg="primary.main"
            style={{ width: 0 }}
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
              py={5}
              px={{ base: 3, sm: 4, md: 6 }}
              position="relative"
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight="500"
              letterSpacing="0.16em"
              textTransform="uppercase"
              color="text.main"
              opacity={activeSection === link.name ? 1 : 0.55}
              transition="opacity 0.3s ease"
              _hover={{ opacity: 1 }}
            >
              {link.name}
            </Box>
          ))}
        </Flex>
      </Flex>
    </Center>
  );
};

export default Navbar;
