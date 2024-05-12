"use client";

import { Box, Flex, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa6";

interface SocialItems {
  label: string;
  icon: any;
  link: string;
  bgColor: string;
}

const Items: SocialItems[] = [
  {
    label: "Github",
    icon: <FaGithub />,
    link: "https://github.com/MatthewAnder",
    bgColor: "background.800",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/matthewanh/",
    bgColor: "#0077b5",
  },
  {
    label: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.linkedin.com/in/matthewanh/",
    bgColor: "#dd2a7b",
  },
];

const Socials = () => {
  return (
    <Flex
      direction={"column"}
      position={"fixed"}
      bottom={4}
      left={"-9em"}
      alignItems={"end"}
      width={"200px"}
    >
      {Items.map((item: SocialItems, index: number) => (
        <motion.div
          key={item.label}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={{ hidden: { x: -56 }, visible: { x: 0 } }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 1.4 + 0.2 * index,
          }}
        >
          <NavLink key={item.label} navItem={item} />
        </motion.div>
      ))}
    </Flex>
  );
};

const duration: string = "all .6s";
const NavLink = ({ navItem }: { navItem: SocialItems }) => {
  return (
    <Link
      href={navItem.link}
      target="_blank"
      _hover={{
        textDecoration: "none",
      }}
    >
      <Flex
        p={2}
        my={1}
        rounded={"full"}
        alignItems={"center"}
        background={"background.600"}
        opacity={0.7}
        transition={`${duration} ease-out`}
        pl={20}
        _hover={{
          transform: "translateX(6em)",
          bg: "background.700",
          opacity: "1",
        }}
        data-group
      >
        <Box
          as="span"
          fontSize={"md"}
          mr={2}
          fontWeight={"700"}
          transition={`${duration} ease-out`}
          _groupHover={{
            color: "white",
            underline: "none",
          }}
        >
          {navItem.label}
        </Box>
        <Box
          as="span"
          fontSize={"2xl"}
          rounded={"full"}
          p={2}
          bg={"white"}
          transition={`${duration} ease-in-out`}
          _groupHover={{
            color: "white",
            bg: navItem.bgColor,
            transform: "rotate(360deg)",
          }}
        >
          {navItem.icon}
        </Box>
      </Flex>
    </Link>
  );
};

export default Socials;
