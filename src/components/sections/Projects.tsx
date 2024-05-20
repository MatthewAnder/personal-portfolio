"use client";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { useRef, useState } from "react";

import { Box, Flex, Grid } from "@chakra-ui/react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

interface ProjectTag {
  id: any;
  name: string;
  onClick: (arg: string) => void;
  tag: string;
}

const MotionBox = motion(Box);

const Projects = () => {
  const { ref } = useSectionInView("Projects");
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  return (
    <Flex
      ref={ref}
      id="projects"
      direction={"column"}
      alignItems={"center"}
      w={"100%"}
    >
      <SectionHeading label="Behold My Creations!" />
      <Flex
        direction={"row"}
        justify={"center"}
        alignItems={"center"}
        gap={2}
        my={6}
      >
        {["All", "Web", "Game", "None"].map((item, index) => (
          <ProjectTag
            id={index}
            name={item}
            onClick={handleTagChange}
            tag={tag}
          />
        ))}
      </Flex>

      <AnimatePresence>
        <Grid
          as={motion.div}
          layout
          layoutRoot
          templateColumns={{ md: "repeat(2,1fr)", lg: "repeat(3, 1fr)" }}
          gap={6}
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              isSelected={project.tag.includes(tag)}
            />
          ))}
        </Grid>
      </AnimatePresence>
    </Flex>
  );
};

const ProjectTag = ({ id, name, onClick, tag }: ProjectTag) => {
  return (
    <AnimatePresence>
      <MotionBox
        layout
        key={name}
        onClick={() => onClick(name)}
        rounded={"full"}
        px={5}
        py={2}
        fontSize={"xl"}
        cursor={"pointer"}
        position={"relative"}
        zIndex={1}
        fontWeight={"bold"}
        color={"text.main"}
        initial={"hidden"}
        whileInView={"visible"}
        animate={"hidden"}
        transition={{ delay: 0.1 * id }}
        variants={{ visible: { scale: 1 }, hidden: { scale: 0 } }}
      >
        {name === "None" ? "Cyber" : name}
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
