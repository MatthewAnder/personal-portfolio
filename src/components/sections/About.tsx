import SectionHeading from "@/components/SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "../Reveal";
import Milestones from "../Timeline";

interface Balls {
  src: string;
  topValue: number | string;
  leftValue: number | string;
}

const MotionBox = motion(Box);

const About = () => {
  const { ref } = useSectionInView("About", 0.1);
  const horizontalContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: horizontalContainer,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-100%"]);
  return (
    <Flex
      id="about"
      ref={ref}
      alignItems={"center"}
      justifyContent={"center"}
      direction={"column"}
      w={"100%"}
      h={"fit-content"}
      mb={36}
    >
      <SectionHeading label="Learn More!" />
      {/* About description section */}
      <Stack
        position={"relative"}
        h={"fit-content"}
        my={10}
        spacing={10}
        direction={{ base: "column", md: "row" }}
        alignItems={"center"}
      >
        <Stickman />
        <Content />
      </Stack>

      {/* Horizontal Scroll */}
      <Box w={"100%"} h={"500vh"} ref={horizontalContainer}>
        <Flex
          position={"sticky"}
          top={0}
          h={"100vh"}
          alignItems={"center"}
          overflowX={"hidden"}
        >
          <motion.div style={{ x }}>
            <Milestones />
          </motion.div>
        </Flex>
      </Box>

      {/* Food Section */}
      <FoodSection />
    </Flex>
  );
};

const Stickman = () => {
  return (
    <Image
      src="/images/person.svg"
      alt="stickman"
      boxSize={{ base: "20em", md: "sm" }}
      objectFit={"cover"}
      background={"accent.main"}
      rounded={"full"}
      boxShadow={
        " rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(239, 245, 242, 0.5) -3px -3px 6px 1px inset"
      }
    />
  );
};

const Content = () => {
  return (
    <VStack alignItems={"start"} w={{ base: "20em", sm: "23em", md: "25em" }}>
      <Reveal>
        <Heading fontSize={{ base: "4xl", md: "6xl" }}>
          {"I'M MATTHEW!"}
        </Heading>
      </Reveal>
      <Text as="b">Based in Vancouver, Canada</Text>
      <Text as="i">
        I am a web developer and a game developer on the side. I love learning
        new things and I am currently interested in learning C and
        cybersecurity! To stay active, I enjoy playing basketball and football,
        hitting the gym, and (hopefully) occasionally going for a run.
      </Text>
      <HashTags />
      <br />
      <VStack alignItems={"start"} lineHeight={0.7}>
        <Text fontWeight={"bold"}>EDUCATION</Text>
        <Text>University of British Columbia</Text>
        <Text>Bachelor of Science</Text>
      </VStack>
    </VStack>
  );
};

const HashTags = () => {
  return (
    <Flex
      alignItems={"start"}
      gap={{ base: 4, md: 6 }}
      flexWrap={{ base: "wrap", md: "nowrap" }}
    >
      {["#ambitious", "#idrewthestickman", "#chocolateicecream4lyfe"].map(
        (tag: string) => {
          return (
            <Text
              key={tag}
              color={"primary.main"}
              lineHeight={{ base: 0.6, md: 1 }}
            >
              {tag}
            </Text>
          );
        },
      )}
    </Flex>
  );
};

const FoodSection = () => {
  return (
    <Box w={"100%"} h={"fit-content"} overflow={"visible"}>
      <Flex
        direction={{ base: "column", md: "row" }}
        w={"100%"}
        alignItems={{ base: "center", md: "unset" }}
        justifyContent={{ base: "center", md: "space-evenly" }}
      >
        <Heading
          fontSize={{ base: "5xl", lg: "6xl" }}
          h={"fit-content"}
          color={"text.main"}
          position={"sticky"}
          top={120}
        >
          I LOVE COOKING TOO!
        </Heading>
        <Flex direction={"column"} h={"fit-content"}>
          <FoodCard path="/images/oyakodon.svg" rotate="0deg" />
          <FoodCard path="/images/fried-rice.svg" rotate="16deg" />
          <FoodCard path="/images/noodle.svg" rotate="-16deg" />
        </Flex>
      </Flex>
    </Box>
  );
};

interface FoodCard {
  path: string;
  rotate: string;
}

const FoodCard = ({ path, rotate }: FoodCard) => {
  const { scrollYProgress } = useScroll();
  const rotateTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["0deg", rotate],
  );
  return (
    <MotionBox
      width="fit-content"
      borderRadius="16px"
      overflow="hidden"
      position={"sticky"}
      top={{ base: 240, md: 120 }}
      style={{ rotate: rotateTransform }}
    >
      <Image
        src={path}
        alt="food"
        boxSize={{ base: "xs", sm: "sm", lg: "lg" }}
        objectFit="cover"
        rotate={rotate}
      />
    </MotionBox>
  );
};
export default About;
