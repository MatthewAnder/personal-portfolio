"use client";

import {
  Box,
  Center,
  Image,
  Heading,
  Highlight,
  HStack,
  Text,
  Flex,
  VStack,
  keyframes,
} from "@chakra-ui/react";
import type { ResponsiveValue, Colors } from "@chakra-ui/react";
import { ReactChild } from "react";

const Home = () => {
  return (
    <Center>
      <Flex>
        <Title />
        <Picture />
      </Flex>
    </Center>
  );
};

const Title = () => {
  return (
    <Box>
      
      <VStack align={"end"}>
        <Heading as="h1" lineHeight="tall">
          Matthew Haryanto
        </Heading>
        <AnimatedText />
        <Heading as="h1" lineHeight="tall">
          Developer&#33;
        </Heading>
      </VStack>
    </Box>
  );
};

const keys = keyframes`
  25% {
    transform: translateY(-1.2em);
  }
  50% {
    transform: translateY(-2.4em)
  }
  75% {
    transform: translateY(-3.6em)
  }
  100% {
    transform: translateY(-4.8em)
  }
`;
const animation = `${keys} infinite 6s ease-out forwards`;
const AnimatedText = () => {
  return (
    <Flex direction="column" align={"end"} height="2.2em" overflow={"hidden"}>
      <HighlightText color={"primary.100"}>Frontend</HighlightText>
      <HighlightText color={"primary.200"}>Backend</HighlightText>
      <HighlightText color={"primary.300"}>Game</HighlightText>
      <HighlightText color={"primary.400"}>Cybersecurity?</HighlightText>
      <HighlightText color={"primary.100"}>Frontend</HighlightText>{" "}
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
      fontSize="2em"
      animation={animation}
      color={color}
    >
      {children.toString()}
    </Heading>
  );
};

const Picture = () => {
  return (
    <Box>
      <Image src="" alt="img" />
    </Box>
  );
};

export default Home;
