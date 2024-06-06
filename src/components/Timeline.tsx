import {
  Box,
  ChakraProps,
  Flex,
  HStack,
  Text,
  VStack,
  chakra,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

const milestones = [
  {
    id: 1,
    date: "March 30, 2023",
    title: "First ever hackathon",
    description: `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
  },
  {
    id: 2,
    date: "July 30, 2023",
    title: "Title",
    description: `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
  },
  {
    id: 3,
    date: "July 30, 2024",
    title: "Title",
    description: `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
  },
  {
    id: 4,
    date: "July 30, 2024",
    title: "Title",
    description: `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
  },
  {
    id: 5,
    date: "July 30, 2024",
    title: "Title",
    description: `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
  },
];

const cardSize: ChakraProps = { p: { base: 3, sm: 6 }, my: 5, h: "13em" };

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Flex maxWidth="7xl" p={{ base: 2, sm: 10 }}>
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mt="10px" mx={5} flexDir={"column"}>
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
  const isEvenId = id % 2 === 0;
  let borderWidthValue = isEvenId ? "0 15px 15px 15px" : "15px 15px 0 15px";
  let topValue = isEvenId ? "-15px" : "unset";
  let botValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    topValue = "-15px";
    botValue = "unset";
    borderWidthValue = "0 15px 15px 15px";
  }

  return (
    <HStack
      {...cardSize}
      pos="relative"
      bg={"accent.main"}
      spacing={5}
      rounded="lg"
      alignItems="center"
      width={"25em"}
      _before={{
        content: `""`,
        position: "absolute",
        borderColor: `#f5fff7 transparent #f5fff7`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        top: topValue,
        bottom: botValue,
        left: "35px",
        display: "block",
      }}
    >
      <Box>
        <Text
          fontSize="lg"
          color={isEvenId ? "secondary.main" : "primary.main"}
        >
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1
            fontSize="2xl"
            lineHeight={1.2}
            w="100%"
            fontFamily={"Khand-Bold"}
          >
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
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return <Box {...cardSize} bg="transparent"></Box>;
};

export default Milestones;
