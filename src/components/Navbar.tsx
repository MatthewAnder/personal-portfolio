"use client";

import { Box, Center, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";

const Links: NavLinkType[] = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Projects", link: "/projects" },
  { label: "Contact Me", link: "/contact" },
];

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link
    draggable="false"
    mx={5}
    my={6}
    px={3}
    as={NextLink}
    href={href}
    position="relative"
    zIndex={1}
    color="text.main"
    fontWeight="bold"
    fontSize="xl"
    _before={{
      content: '""',
      position: "absolute",
      bg: "accent.900",
      left: "0",
      width: "100%",
      height: "8px",
      zIndex: "-1",
      bottom: "3px",
      transition: "all .2s ease-in-out",
      rounded: "xl",
    }}
    _hover={{
      _before: {
        bottom: "0",
        height: "100%",
      },
    }}
    _active={{
      _before: {
        transform: "scale(1.1)",
        transition: "all 0.1s linear",
      },
    }}
  >
    {children}
  </Link>
);

const Navbar = () => {
  return (
    <Center>
      <Flex>
        <Center>
          {Links.map((item) => (
            <NavLink key={item.label} href={item.link}>
              {item.label}
            </NavLink>
          ))}
        </Center>
      </Flex>
    </Center>
  );
};

interface NavLinkType {
  label: string;
  link: string;
}

export default Navbar;
