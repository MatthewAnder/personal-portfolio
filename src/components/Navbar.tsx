"use client";

import { Box, Center, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";

const Links: NavLinkType[] = [
  { label: "Home", link: "/", color: "primary.500" },
  { label: "About", link: "/about", color: "primary.200" },
  { label: "Projects", link: "/projects", color: "primary.300" },
  { label: "Contact", link: "/contact", color: "text.main" },
];

const NavLink = ({ navItem }: { navItem: NavLinkType }) => (
  <Link
    draggable="false"
    py={3}
    px={4}
    as={NextLink}
    href={navItem.link}
    position="relative"
    zIndex={1}
    color={"background.700"}
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
      height: "6px",
      transition: "all .3s ease-out",
    }}
    _hover={{
      color: "background.50",
    }}
    _focus={{
      _before: {
        height: "100%",
      },
      color: "background.50",
    }}
  >
    {navItem.label}
  </Link>
);

const Navbar = () => {
  return (
    <Center>
      <Flex
        bg={"background.main"}
        top={5}
        rounded={"full"}
        boxShadow={"dark-lg"}
        position={"fixed"}
      >
        <Center mx={10}>
          {Links.map((item) => (
            <NavLink key={item.label} navItem={item} />
          ))}
        </Center>
      </Flex>
    </Center>
  );
};

interface NavLinkType {
  label: string;
  link: string;
  color: string;
}

export default Navbar;
