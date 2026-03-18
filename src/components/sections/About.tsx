"use client";
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
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Reveal from "../Reveal";
import Milestones from "../Timeline";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {
  const { ref: inViewRef } = useSectionInView("About", 0.1);

  return (
    <Flex
      id="about"
      ref={inViewRef}
      alignItems="center"
      justifyContent="center"
      direction="column"
      w="100%"
      h="fit-content"
      mb={{ base: 10, md: 24 }}
    >
      <SectionHeading label="Learn More!" />
      <Stack
        position="relative"
        h="fit-content"
        my={{ base: 6, md: 10 }}
        spacing={{ base: 6, md: 10 }}
        direction={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <Stickman />
        <Content />
      </Stack>

      <Box w="100%" mt={6} mb={4}>
        <Milestones />
      </Box>

      <FoodSection />
    </Flex>
  );
};

const Stickman = () => {
  return (
    <Image
      src="/images/person.svg"
      alt="stickman"
      boxSize={{ base: "11em", sm: "15em", md: "sm" }}
      objectFit="cover"
      background="accent.main"
      rounded="full"
      boxShadow=" rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(239, 245, 242, 0.5) -3px -3px 6px 1px inset"
    />
  );
};

const Content = () => {
  return (
    <VStack alignItems="start" w={{ base: "90%", sm: "23em", md: "25em" }} maxW="25em">
      <Reveal>
        <Heading fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}>
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
      <VStack alignItems="start" lineHeight={0.7}>
        <Text fontWeight="bold">EDUCATION</Text>
        <Text>University of British Columbia</Text>
        <Text>Bachelor of Science</Text>
      </VStack>
    </VStack>
  );
};

const HashTags = () => {
  return (
    <Flex
      alignItems="start"
      gap={{ base: 4, md: 6 }}
      flexWrap={{ base: "wrap", md: "nowrap" }}
    >
      {["#ambitious", "#idrewthestickman", "#chocolateicecream4lyfe"].map(
        (tag: string) => {
          return (
            <Text
              key={tag}
              color="primary.main"
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
    <Box w="100%" h="fit-content" overflow="visible">
      <Flex
        direction={{ base: "column", md: "row" }}
        w="100%"
        alignItems={{ base: "center", md: "unset" }}
        justifyContent={{ base: "center", md: "space-evenly" }}
      >
        <Heading
          fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}
          h="fit-content"
          color="text.main"
          position="sticky"
          top={120}
        >
          I LOVE COOKING TOO!
        </Heading>
        <Flex direction="column" h="fit-content">
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
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        cardRef.current,
        { rotate: "0deg" },
        {
          rotate,
          ease: "none",
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        },
      );
    },
    { scope: cardRef },
  );

  return (
    <Box
      ref={cardRef}
      width="fit-content"
      borderRadius="16px"
      overflow="hidden"
      position="sticky"
      top={{ base: 240, md: 120 }}
    >
      <Image
        src={path}
        alt="food"
        boxSize={{ base: "2xs", sm: "xs", lg: "lg" }}
        objectFit="cover"
      />
    </Box>
  );
};

export default About;
