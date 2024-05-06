"use client";

import { Center, Flex, Link, Spacer, useDisclosure } from "@chakra-ui/react";
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
    mx={5}
    my={6}
    px={2}
    as={NextLink}
    href={href}
    position="sticky"
    zIndex={1}
    color="text.main"
    fontWeight="bold"
    fontSize="xl"
    _before={{
      content: '""',
      position: "absolute",
      bg: "secondary.main",
      left: "0",
      width: "100%",
      height: "8px",
      zIndex: "-1",
      bottom: "3px",
      transition: "all .3s ease-in-out",
      rounded: "full",
    }}
    _hover={{
      _before: {
        bottom: "0",
        height: "100%",
      },
    }}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
