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
    <Flex mx={10} id="projects" direction={"column"} alignItems={"center"}>
      <Heading
        fontSize={"4xl"}
        fontWeight={"bold"}
        color={"white"}
        mt={28}
        mb={{ base: 8, md: 12 }}
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
        color={"white"}
      >
        <ProjectTag name="All" onClick={handleTagChange} tag={tag} />
        <ProjectTag name="Web" onClick={handleTagChange} tag={tag} />
        <ProjectTag name="Game" onClick={handleTagChange} tag={tag} />
        <ProjectTag name="None" onClick={handleTagChange} tag={tag} />
      </Flex>

      <motion.ul>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            isSelected={project.tag.includes(tag)}
          />
        ))}
      </motion.ul>
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
      zIndex={10}
    >
      <AnimatePresence>
        <motion.div
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
              as={motion.div}
              layoutId="underline"
              rounded={"full"}
              h="100%"
              bg={"primary.300"}
              position={"absolute"}
              inset={0}
              zIndex={-1}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default Projects;
