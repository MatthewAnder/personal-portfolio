"use client";

import { Box, Flex, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactElement } from "react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa6";

interface SocialItems {
  label: string;
  icon: ReactElement;
  link: string;
  bgColor: string;
}

const Items: SocialItems[] = [
  {
    label: "Github",
    icon: <FaGithub />,
    link: "https://github.com/MatthewAnder",
    bgColor: "text.main",
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

const MotionFlex = motion(Flex);

const Socials = () => {
  return (
    <MotionFlex
      direction={"column"}
      position={"fixed"}
      bottom={4}
      left={"-9em"}
      alignItems={"end"}
      width={"200px"}
      zIndex={20}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2, delayChildren: 1.4 }}
    >
      {Items.map((item: SocialItems) => (
        <motion.div
          key={item.label}
          variants={{ hidden: { x: -55 }, visible: { x: 0 } }}
        >
          <NavLink navItem={item} />
        </motion.div>
      ))}
    </MotionFlex>
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
        background={"primary.main"}
        opacity={0.7}
        transition={`${duration} ease-out`}
        pl={20}
        _hover={{
          transform: "translateX(6em)",
          bg: "secondary.main",
          opacity: "1",
        }}
        data-group
      >
        <Box
          as="span"
          fontSize={"md"}
          mr={4}
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
