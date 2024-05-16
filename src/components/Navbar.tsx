"use client";

import { Center, Flex, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { ReactPropTypes, useState } from "react";

interface NavLinkItem {
  label: string;
  link: string;
  color: string;
}

interface NavLinks {
  navItem: NavLinkItem;
  section: string;
  onClick: () => void;
}

const Links: NavLinkItem[] = [
  { label: "Home", link: "#home", color: "primary.500" },
  { label: "About", link: "#about", color: "primary.200" },
  { label: "Projects", link: "#projects", color: "primary.300" },
  { label: "Contact", link: "#contact", color: "text.main" },
];

const NavLink = ({ navItem, section, onClick }: NavLinks) => {
  return (
    <Link
      draggable="false"
      py={3}
      px={4}
      as={NextLink}
      href={navItem.link}
      position="relative"
      color={section === navItem.label ? "background.50" : "background.700"}
      shadow={"inner"}
      fontWeight="bold"
      fontSize="xl"
      _before={{
        content: "''",
        position: "absolute",
        bottom: "0",
        left: "0",
        bg: `${navItem.color}`,
        zIndex: "-1",
        width: "100%",
        height: section == navItem.label ? "100%" : "6px",
        transition: "all .3s ease-out",
      }}
      _hover={{
        color: "background.50",
      }}
      onClick={onClick}
    >
      {navItem.label}
    </Link>
  );
};

const Navbar = () => {
  const [section, setSection] = useState("Home");

  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      animate="visible"
      variants={{ hidden: { y: -100 }, visible: { y: 0 } }}
    >
      <Center zIndex={20}>
        <Flex
          bg={"background.main"}
          top={5}
          rounded={"full"}
          boxShadow={"dark-lg"}
          my={{ base: "10", lg: "0" }}
          zIndex={10}
          position={{ base: "sticky", lg: "fixed" }}
        >
          <Center mx={10}>
            {Links.map((item) => (
              <NavLink
                key={item.label}
                navItem={item}
                section={section}
                onClick={() => setSection(item.label)}
              />
            ))}
          </Center>
        </Flex>
      </Center>
    </motion.div>
  );
};

export default Navbar;
