import {
  Box,
  ChakraProps,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";

import { milestones } from "@/lib/data";
import { motion } from "framer-motion";

const cardSize: ChakraProps = {
  px: { base: 3, sm: 6 },
  my: 5,
  h: { base: "11em", md: "13em" },
};

const Milestones = () => {
  return (
    <Flex maxWidth={"7xl"} p={{ base: 7, sm: 10 }}>
      <CustomArrow />
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
      boxShadow={"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"}
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
          <Heading
            fontSize={isMobile ? "xl" : "2xl"}
            lineHeight={{ md: 1.2 }}
            w="100%"
          >
            {title}
          </Heading>
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

const CustomArrow = () => {
  return (
    <HStack
      position={"absolute"}
      top={0}
      left={0}
      zIndex={5}
      userSelect={"none"}
    >
      <Image
        src="/images/arrow.svg"
        alt="arrow"
        boxSize={"4.5em"}
        color={"text.main"}
      />
      <Text
        position={"absolute"}
        top={"-20%"}
        right={"-190%"}
        fontSize={"md"}
        fontWeight={"bold"}
        width={"8.5em"}
      >
        Once upon a time...
      </Text>
    </HStack>
  );
};

export default Milestones;
