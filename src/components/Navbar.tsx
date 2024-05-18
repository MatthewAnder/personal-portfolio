"use client";

import { Box, Center, Flex } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import NextLink from "next/link";
import { useState } from "react";

interface NavLinkItem {
  label: string;
  link: string;
  color: string;
}

interface NavLinks {
  navItem: NavLinkItem;
  isSelected: boolean;
  onClick: () => void;
}

const Links: NavLinkItem[] = [
  { label: "Home", link: "#top", color: "primary.500" },
  { label: "About", link: "#about", color: "primary.500" },
  { label: "Projects", link: "#projects", color: "primary.500" },
  { label: "Contact", link: "#contact", color: "primary.500" },
];

const NavLink = ({ navItem, isSelected, onClick }: NavLinks) => {
  return (
    <AnimatePresence>
      <Box
        as={NextLink}
        key={navItem.label}
        href={navItem.link}
        onClick={onClick}
        draggable="false"
        py={3}
        px={4}
        height={"100%"}
        position="relative"
        fontWeight="bold"
        fontSize={{ base: "md", sm: "xl" }}
        color={"accent.main"}
        textShadow={isSelected ? "0 0 20px #f5fff7" : 0}
        transition={".5s ease-in"}
      >
        {navItem.label}

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
            color={"black"}
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
        {Links.map((item) => (
          <NavLink
            key={item.label}
            navItem={item}
            isSelected={section === item.label}
            onClick={() => setSection(item.label)}
          />
        ))}
      </Flex>
    </Center>
  );
};

export default Navbar;
