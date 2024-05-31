"use client";

import { Box, Center, Flex } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import NextLink from "next/link";
import { useState } from "react";

import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import type { SectionName } from "@/lib/types";

interface NavLinkItem {
  label: string;
  link: string;
}

interface NavLinks {
  name: string;
  link: string;
  isSelected: boolean;
  onClick: () => void;
}

const Links: NavLinkItem[] = [
  { label: "Home", link: "#top" },
  { label: "About", link: "#about" },
  { label: "Projects", link: "#projects" },
  { label: "Contact", link: "#contact" },
];

const NavLink = ({ name, link, isSelected, onClick }: NavLinks) => {
  return (
    <AnimatePresence>
      <Box
        as={NextLink}
        key={name}
        href={link}
        onClick={onClick}
        draggable="false"
        py={3}
        px={4}
        height={"100%"}
        position="relative"
        fontSize={{ base: "md", sm: "xl" }}
        color={"accent.main"}
        transition={".5s ease-in"}
      >
        {name}

        {isSelected && (
          <Box
            as={motion.span}
            layoutId="section"
            position={"absolute"}
            height={"100%"}
            width={"100%"}
            zIndex={-1}
            inset={0}
            background={"text.main"}
            bgGradient={
              "linear(to-t, rgba(106, 144, 128, 1) 0%, rgba(106, 144, 128, 0) 60%)"
            }
            _before={{
              content: "''",
              position: "absolute",
              bottom: "-1px",
              width: "100%",
              height: "4px",
              bg: "secondary.300",
            }}
          />
        )}
      </Box>
      )
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [section, setSection] = useState("Home");

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <Center>
      <Flex
        as={motion.div}
        layout
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        animate="visible"
        variants={{ hidden: { y: -100 }, visible: { y: 0 } }}
        top={8}
        px={{ base: 2, md: 8 }}
        rounded={{ base: "md", md: "full" }}
        boxShadow={"xl"}
        zIndex={10}
        position={"fixed"}
        bg={"text.main"}
      >
        {links.map((link) => (
          <NavLink
            key={link.hash}
            name={link.name}
            link={link.hash}
            isSelected={activeSection === link.name}
            onClick={() => {
              setActiveSection(link.name);
              setTimeOfLastClick(Date.now());
            }}
          />
        ))}
      </Flex>
    </Center>
  );
};

export default Navbar;
