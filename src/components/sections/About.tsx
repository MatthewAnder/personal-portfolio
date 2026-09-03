"use client";
import SectionHeading from "@/components/SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Reveal from "../Reveal";
import Milestones from "../Timeline";

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
      <SectionHeading eyebrow="About" label="Background" />
      <Content />

      <Box w="100%" mt={{ base: 8, md: 14 }}>
        <Milestones />
      </Box>
    </Flex>
  );
};

const Content = () => {
  return (
    <VStack
      alignItems="center"
      textAlign="center"
      w={{ base: "90%", sm: "28em", md: "34em" }}
      maxW="34em"
      my={{ base: 6, md: 10 }}
      spacing={4}
    >
      <Reveal width="fit-content">
        <Heading fontWeight="500" fontSize={{ base: "2xl", sm: "3xl" }}>
          Matthew Haryanto
        </Heading>
      </Reveal>
      <Text fontSize="sm" letterSpacing="0.14em" textTransform="uppercase" opacity={0.55}>
        Based in Vancouver, Canada
      </Text>
      <Text opacity={0.8} lineHeight={1.8}>
        I am a software developer increasingly drawn to systems and
        low-level work, incoming AI Software Developer Co-Op at Motorola
        Solutions (Avigilon) after a Software Developer Co-Op at Rockland
        Scientific. Outside of building software, I spend my time playing
        basketball and football, staying active at the gym, and cooking.
      </Text>
      <VStack alignItems="center" spacing={0} pt={4}>
        <Text fontSize="xs" letterSpacing="0.16em" textTransform="uppercase" opacity={0.55}>
          Education
        </Text>
        <Text fontWeight="500">University of British Columbia</Text>
        <Text opacity={0.7}>B.Sc. Combined Major, Computer Science &amp; Statistics</Text>
      </VStack>
    </VStack>
  );
};

export default About;
