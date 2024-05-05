"use client";

import { ReactNode } from "react";
import NextLink from "next/link";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Link,
  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,
  Text,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { SiLinkedin } from "react-icons/si";

const Links: NavLinkType[] = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Projects", link: "/projects" },
  { label: "Contact Me", link: "/contact" },
];

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link
    px={2}
    as={NextLink}
    href={href}
    _hover={{
      textDecoration: "none",
      bg: "gray.200",
    }}
  >
    <Text fontSize="xl" verticalAlign="center">
      {children}
    </Text>
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Center>
        <Flex py={4} px={6} align="center" position="static">
          {Links.map((item) => (
            <NavLink key={item.label} href={item.link}>
              {item.label}
            </NavLink>
          ))}
        </Flex>
      </Center>
    </Box>
  );
};

interface NavLinkType {
  label: string;
  link: string;
}

export default Navbar;
