import React from "react";
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

const milestones = [
  {
    id: 1,
    date: "MARCH 30, 2022",
    title: "Chakra Hackathon",
    description: `Winner of first ever ChakraUI Hackathon. On sait depuis longtemps que travailler avec du texte lisible et contenant du sens.`,
  },
  {
    id: 2,
    date: "July 30, 2021",
    title: "Open Source, first contribution",
    description: `Fixing a typo, to fix a bug, contributing to Open Source and collaborating to improve technology for everyone, Ahmad's world changed again!.`,
  },
  {
    id: 3,
    date: "July 30, 2018",
    title: "Freelancing, started working for myself",
    description:
      "Ahmad starts his own business consulting for companies as a fullstack developer. Clients include UK Government departments, UK banks, global fintechs and startups.",
  },
];

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Flex maxWidth="7xl" p={{ base: 2, sm: 10 }}>
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mt="10px" flexDir={"column"}>
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />
              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Flex>
  );
};

interface CardProps {
  id: number;
  title: string;
  description: string;
  date: string;
}

const Card = ({ id, title, description, date }: CardProps) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? "0 15px 15px 15px" : "15px 15px 0 15px";
  let topValue = isEvenId ? "-15px" : "unset";
  let botValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    topValue = "0";
    botValue = "unset";
    borderWidthValue = "0 15px 15px 15px";
  }

  return (
    <HStack
      p={{ base: 3, sm: 6 }}
      my={5}
      bg={useColorModeValue("accent.main", "gray.800")}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      width={"30em"}
      h={"13em"}
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `#f5fff7 transparent #f5fff7`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        top: topValue,
        bot: "0px",
        left: "35px",
        display: "block",
      }}
    >
      <Box>
        <Text fontSize="lg" color={isEvenId ? "teal.400" : "blue.400"}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text fontSize="md">{description}</Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "40px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
    >
      <chakra.span
        position="absolute"
        left={0}
        width="100vw"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        top={"50%"}
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue("gray.600", "gray.200")}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      h={"1000px"}
      bg="beige"
    >
      a
    </Box>
  );
};

export default Milestones;