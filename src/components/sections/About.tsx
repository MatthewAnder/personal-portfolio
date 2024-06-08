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

const About = () => {
  const { ref } = useSectionInView("About", 0.5);
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
    >
      <SectionHeading label="Learn More!" />
      <Stack
        position={"relative"}
        h={"fit-content"}
        mt={5}
        spacing={10}
        direction={{ base: "column", md: "row" }}
        alignItems={"center"}
      >
        <Stickman />
        <Content />
        <Balls src="images/football.svg" topValue={"0"} leftValue={"2em"} />
        <Balls
          src="images/basketball.svg"
          topValue={"2em"}
          leftValue={"0.5em"}
        />
      </Stack>
      <Box
        position={"relative"}
        w={"100%"}
        h={"500vh"}
        ref={horizontalContainer}
      >
        <Flex
          position={"sticky"}
          w={"100%"}
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
    </Flex>
  );
};

const Stickman = () => {
  return (
    <Image
      src="images/person.svg"
      boxSize={{ base: "20em", md: "sm" }}
      objectFit={"cover"}
      background={"primary.50"}
      rounded={"full"}
      boxShadow={
        " rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(239, 245, 242, 0.5) -3px -3px 6px 1px inset"
      }
    />
  );
};

const Content = () => {
  return (
    <VStack alignItems={"start"} w={{ base: "20em", md: "25em" }}>
      <Reveal>
        <Heading fontSize={{ base: "4xl", md: "6xl" }}>I'M MATTHEW</Heading>
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

const Balls = ({ src, topValue, leftValue }: Balls) => {
  return (
    <Box position={"absolute"} top={topValue} left={leftValue}>
      <Image src={src} boxSize={"4em"} alt={src} />
    </Box>
  );
};

const HashTags = () => {
  return (
    <Flex alignItems={"start"} gap={4}>
      {["#ambitious", "#idrewthestickman", "#chocolateicecream4lyfe"].map(
        (tag: string) => {
          return (
            <Text key={tag} color={"primary.main"}>
              {tag}
            </Text>
          );
        },
      )}
    </Flex>
  );
};
export default About;
