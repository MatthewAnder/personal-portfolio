"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

import { AnimatePresence, motion } from "framer-motion";
import {
  Heading,
  Flex,
  Box,
  Grid,
  GridItem,
  Link,
  Center,
  UnorderedList,
} from "@chakra-ui/react";

import { projectsData } from "@/lib/data";

interface ProjectTag {
  name: string;
  onClick: (arg: string) => void;
  tag: string;
}

const Projects = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  return (
    <Flex id="projects" direction={"column"} alignItems={"center"} w={"100%"}>
      <Heading
        fontSize={"4xl"}
        fontWeight={"bold"}
        color={"tect.main"}
        mt={24}
        mb={{ base: 2, md: 4 }}
        textAlign={"center"}
      >
        My Projects
      </Heading>
      <Flex
        direction={"row"}
        justify={"center"}
        alignItems={"center"}
        gap={2}
        my={6}
        color={"text.main"}
        fontWeight={"bold"}
      >
        <ProjectTag name="All" onClick={handleTagChange} tag={tag} />
        <ProjectTag name="Web" onClick={handleTagChange} tag={tag} />
        <ProjectTag name="Game" onClick={handleTagChange} tag={tag} />
        <ProjectTag name="None" onClick={handleTagChange} tag={tag} />
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

const ProjectTag = ({ name, onClick, tag }: ProjectTag) => {
  return (
    <Box
      onClick={() => onClick(name)}
      rounded={"full"}
      px={5}
      py={2}
      fontSize={"xl"}
      cursor={"pointer"}
      position={"relative"}
      zIndex={1}
    >
      <AnimatePresence>
        <Box
          as={motion.div}
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
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
        </Box>
      </AnimatePresence>
    </Box>
  );
};

export default Projects;
