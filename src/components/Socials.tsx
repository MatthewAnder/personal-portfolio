"use client";

import { Box, Flex, Link } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ReactElement, useRef } from "react";

import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

gsap.registerPlugin(useGSAP);

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

const Socials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".social-item", {
        x: -25,
        opacity: 0,
        stagger: 0.1,
        delay: 0.8,
        duration: 0.5,
        ease: "expo.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <Flex
      ref={containerRef}
      direction="column"
      position="fixed"
      bottom={4}
      left="-9em"
      alignItems="end"
      width="200px"
      zIndex={20}
    >
      {Items.map((item: SocialItems) => (
        <div key={item.label} className="social-item">
          <NavLink navItem={item} />
        </div>
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
        rounded="full"
        alignItems="center"
        background="primary.main"
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
          fontSize="md"
          mr={4}
          fontWeight="700"
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
          fontSize="2xl"
          rounded="full"
          p={2}
          bg="white"
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
