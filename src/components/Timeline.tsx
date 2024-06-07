import {
  Box,
  ChakraProps,
  Flex,
  HStack,
  Text,
  VStack,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";

import { milestones } from "@/lib/data";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cardSize: ChakraProps = {
  px: { base: 3, sm: 6 },
  my: 5,
  h: { base: "11em", md: "13em" },
};

const Milestones = () => {
  return (
    <Flex maxWidth={"7xl"} p={{ base: 7, sm: 10 }}>
      {milestones.map((milestone) => (
        <Flex key={milestone.id} flexDir={"column"}>
          {/* Desktop view(bottom card) */}
          {milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(top card) */}
          {milestone.id % 2 !== 0 && (
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
  // For even id show card on bottom side
  // For odd id show card on top side
  const isEvenId = id % 2 === 0;
  let borderWidthValue = isEvenId ? "0 15px 15px 15px" : "15px 15px 0 15px";
  let topValue = isEvenId ? "-15px" : "unset";
  let botValue = isEvenId ? "unset" : "-15px";

  const MotionStack = motion(HStack);

  const target = useRef<HTMLDivElement>(null);

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <MotionStack
      sx={cardSize}
      pos="relative"
      bg={"accent.main"}
      spacing={isMobile ? 3 : 5}
      rounded="lg"
      alignItems="center"
      width={isMobile ? "20em" : "25em"}
      _before={{
        content: `""`,
        position: "absolute",
        borderColor: `#f5fff7 transparent #f5fff7`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        top: topValue,
        bottom: botValue,
        left: "35px",
      }}
    >
      <Box>
        <Text
          fontSize={isMobile ? "md" : "lg"}
          color={isEvenId ? "secondary.main" : "primary.main"}
        >
          {date}
        </Text>

        <VStack spacing={2} mb={isMobile ? 0 : 3} textAlign="left">
          <chakra.h1
            fontSize={isMobile ? "xl" : "2xl"}
            lineHeight={{ md: 1.2 }}
            w="100%"
            fontFamily={"Khand-Bold"}
          >
            {title}
          </chakra.h1>
          <Text fontSize={isMobile ? "sm" : "md"}> {description}</Text>
        </VStack>
      </Box>
    </MotionStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex pos="relative" alignItems="center" mx={"40px"}>
      <chakra.span
        position="absolute"
        left={0}
        width="150%"
        border="1px solid"
        borderColor={"primary.100"}
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
          bg={"text.main"}
          borderRadius="full"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return <Box sx={cardSize} bg="transparent"></Box>;
};

export default Milestones;
