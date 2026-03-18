"use client";
import { milestones } from "@/lib/data";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Milestones = () => {
  return (
    <Box position="relative" w="100%" maxW="4xl" mx="auto" px={{ base: 6, md: 10 }} py={4}>
      {/* Vertical line — desktop center */}
      <Box
        position="absolute"
        left="50%"
        top={0}
        bottom={0}
        w="1px"
        bgGradient="linear(to-b, transparent, primary.200 8%, primary.200 92%, transparent)"
        transform="translateX(-50%)"
        display={{ base: "none", md: "block" }}
      />
      {/* Vertical line — mobile left */}
      <Box
        position="absolute"
        left="28px"
        top={0}
        bottom={0}
        w="1px"
        bgGradient="linear(to-b, transparent, primary.200 8%, primary.200 92%, transparent)"
        display={{ base: "block", md: "none" }}
      />

      <VStack spacing={0} align="stretch">
        {milestones.map((milestone, i) => (
          <MilestoneItem key={milestone.id} milestone={milestone} isRight={i % 2 === 0} />
        ))}
      </VStack>
    </Box>
  );
};

interface MilestoneProps {
  milestone: { id: number; date: string; title: string; description: string };
  isRight: boolean;
}

const MilestoneItem = ({ milestone, isRight }: MilestoneProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(itemRef.current, {
        opacity: 0,
        x: isRight ? 36 : -36,
        duration: 0.65,
        ease: "expo.out",
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 88%",
          once: true,
        },
      });
    },
    { scope: itemRef },
  );

  return (
    <Flex
      ref={itemRef}
      position="relative"
      justify={{ base: "flex-start", md: isRight ? "flex-end" : "flex-start" }}
      mb={8}
      pl={{ base: "52px", md: 0 }}
    >
      {/* Dot */}
      <Box
        position="absolute"
        left={{ base: "22px", md: "calc(50% - 5px)" }}
        top="20px"
        w="10px"
        h="10px"
        borderRadius="full"
        bg={isRight ? "secondary.main" : "primary.300"}
        border="2px solid"
        borderColor="background.main"
        zIndex={1}
      />

      {/* Card */}
      <Box
        w={{ base: "100%", md: "46%" }}
        bg="accent.main"
        border="1px solid"
        borderColor="primary.100"
        borderRadius="xl"
        px={{ base: 3, md: 5 }}
        py={{ base: 3, md: 4 }}
        boxShadow="0 2px 12px rgba(42,30,40,0.05)"
      >
        <Text
          fontSize="xs"
          fontWeight="700"
          color="secondary.400"
          letterSpacing="0.1em"
          mb={1}
        >
          {milestone.date.toUpperCase()}
        </Text>
        <Heading fontSize={{ base: "md", md: "xl" }} mb={1}>
          {milestone.title}
        </Heading>
        <Text fontSize={{ base: "xs", md: "sm" }} color="text.main" opacity={0.72} lineHeight={1.6}>
          {milestone.description}
        </Text>
      </Box>
    </Flex>
  );
};

export default Milestones;
