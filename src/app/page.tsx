"use client";

import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  VStack,
  keyframes,
} from "@chakra-ui/react";
import { ReactChild } from "react";

const Home = () => {
  return (
    <Box>
      <Center>
        <Flex alignItems={"center"} mx={4} height={"100vh"}>
          <Title />
          <Picture />
        </Flex>
      </Center>
    </Box>
  );
};

const Title = () => {
  return (
    <VStack align={"end"} mx={6}>
      <Heading as="h1" fontSize={"2xl"} lineHeight="tall" color={"primary.200"}>
        Matthew Haryanto
      </Heading>
      <AnimatedText />
      <Heading as="h2" fontSize={"2xl"} lineHeight="tall" color={"primary.300"}>
        Developer&#33;
      </Heading>
    </VStack>
  );
};

const gap: number = 1.2;
const keys = keyframes`
  25% {
    transform: translateY(-${gap}em);
  }
  50% {
    transform: translateY(-${gap * 2}em)
  }
  75% {
    transform: translateY(-${gap * 3}em)
  }
  100% {
    transform: translateY(-${gap * 4}em)
  }
`;
const animation = `${keys} infinite 10s forwards`;
const AnimatedText = () => {
  return (
    <Flex direction="column" align={"end"} height="4.5em" overflow={"hidden"}>
      <HighlightText color={"primary.100"}>Frontend</HighlightText>
      <HighlightText color={"primary.200"}>Backend</HighlightText>
      <HighlightText color={"primary.300"}>Game</HighlightText>
      <HighlightText color={"primary.400"}>Designer</HighlightText>
      <HighlightText color={"primary.100"}>Frontend</HighlightText>
    </Flex>
  );
};

const HighlightText = ({
  children,
  color,
}: {
  children: ReactChild;
  color: any;
}) => {
  return (
    <Heading
      lineHeight="1.2em"
      fontSize="4em"
      animation={animation}
      color={color}
    >
      {children.toString()}
    </Heading>
  );
};

const Picture = () => {
  return (
    <Image
      src="/images/profile.jpg"
      alt="img"
      boxSize={"md"}
      objectFit="cover"
      rounded={"full"}
      _before={{
        content: '""',
        position: "absolute",
        rounded: "full",
        bg: "background.600",
        left: "0",
        bottom: "0",
        width: "100%",
        transition: "all .2s ease-in-out",
      }}
      _hover={{
        _before: {
          transform: "scale(2)",
        },
      }}
      boxShadow={"2xl"}
    />
  );
};

export default Home;
