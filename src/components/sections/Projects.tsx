"use client";
import MainProjectCard from "@/components/MainProjectCard";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { useState } from "react";

import { Box, Flex, Grid } from "@chakra-ui/react";

import { AnimatePresence, motion } from "framer-motion";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { ProjectData } from "@/lib/types";

interface ProjectTag {
  name: string;
  onClick: (arg: string) => void;
  tag: string;
}

interface Main {
  selectedId: string;
}

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  // tag refers to the category of the card
  const [tag, setTag] = useState("All");
  // main refers to the card that is big
  const [main, setMain] = useState<ProjectData | null>(null);

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
    setMain(null);
  };

  return (
    <Flex
      ref={ref}
      id="projects"
      flexDirection={"column"}
      alignItems={"center"}
      w={"100%"}
      h={"125vh"}
      position={"relative"}
    >
      <SectionHeading label="Behold My Creations!" />
      <MotionFlex
        direction={"row"}
        justify={"center"}
        alignItems={"center"}
        gap={2}
        my={6}
        initial={"hidden"}
        whileInView={"visible"}
        transition={{ staggerChildren: 0.3 }}
      >
        {["All", "Web", "Game", "Other"].map((item) => (
          <ProjectTag
            key={item}
            name={item}
            onClick={handleTagChange}
            tag={tag}
          />
        ))}
      </MotionFlex>

      <Grid
        as={motion.div}
        layout
        position={"relative"}
        templateColumns={{ md: "repeat(2,1fr)", lg: "repeat(3, 1fr)" }}
        gap={6}
        w={"80%"}
      >
        <AnimatePresence>
          {projectsData.map(
            (project, index) =>
              (project.tag === tag || tag === "All") && (
                <ProjectCard
                  key={project.title}
                  project={project}
                  main={main}
                  setMain={setMain}
                />
              ),
          )}
        </AnimatePresence>
      </Grid>
    </Flex>
  );
};

const ProjectTag = ({ name, onClick, tag }: ProjectTag) => {
  return (
    <AnimatePresence>
      <MotionBox
        layout
        key={name}
        onClick={() => onClick(name)}
        variants={{ visible: { scale: 1 }, hidden: { scale: 0 } }}
        rounded={"full"}
        px={5}
        py={2}
        fontSize={"xl"}
        cursor={"pointer"}
        position={"relative"}
        zIndex={1}
        fontWeight={"bold"}
        color={"text.main"}
      >
        {name}
        {name === tag && (
          <Box
            as={motion.span}
            layoutId="tag"
            rounded={"full"}
            h="100%"
            bg={"primary.main"}
            position={"absolute"}
            inset={0}
            zIndex={-1}
          />
        )}
      </MotionBox>
    </AnimatePresence>
  );
};

export default Projects;
