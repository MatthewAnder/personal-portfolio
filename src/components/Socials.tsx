"use client";

import { Flex, Link, Text } from "@chakra-ui/react";

interface SocialItem {
  label: string;
  link: string;
}

const items: SocialItem[] = [
  { label: "Github", link: "https://github.com/MatthewAnder" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/matthewanh/" },
];

const Socials = () => {
  return (
    <Flex
      direction="column"
      position="fixed"
      bottom={8}
      right={{ base: 5, md: 10 }}
      alignItems="end"
      gap={3}
      zIndex={20}
      display={{ base: "none", sm: "flex" }}
    >
      {items.map((item) => (
        <Link key={item.label} href={item.link} target="_blank">
          <Text
            fontSize="xs"
            letterSpacing="0.16em"
            textTransform="uppercase"
            color="text.main"
            opacity={0.55}
            transition="opacity 0.3s ease, color 0.3s ease"
            _hover={{ opacity: 1, color: "primary.main" }}
          >
            {item.label}
          </Text>
        </Link>
      ))}
    </Flex>
  );
};

export default Socials;
