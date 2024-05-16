"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

import { motion } from "framer-motion";
import {
  Heading,
  Flex,
  Box,
  Grid,
  GridItem,
  Link,
  Center,
} from "@chakra-ui/react";

const projectsData = [
  {
    id: 1,
    title: "Carture",
    description: "Project 1 description",
    image: "/images/profile.jpg",
    tag: ["All", "Game"],
  },
  {
    id: 2,
    title: "Budget Planner",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "To-do List Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "PickUp Your Game",
    description: "LALALALLALALA",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Box War",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Game"],
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
  },
];
const Projects = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  return (
    <Flex mx={10} id="projects" direction={"column"} alignItems={"center"}>
      <Heading
        fontSize={"4xl"}
        fontWeight={"bold"}
        color={"white"}
        mt={4}
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
        <ProjectTag name="Cyber" onClick={handleTagChange} tag={tag} />
      </Flex>
      <Grid
        gap={{ md: 12, base: 8 }}
        gridColumn={3}
        templateColumns={{ lg: "repeat(3, 1fr)" }}
        justifyContent={"center"}
      >
        {filteredProjects.length != 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
            />
          ))
        ) : (
          <EmptyCard />
        )}
      </Grid>
    </Flex>
  );
};

const EmptyCard = () => (
  <Box>
    <Center fontSize={"xl"} color={"text.main"}>
      COMING SOON!
    </Center>
  </Box>
);

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
      <motion.div layout>
        {name}
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
    </Box>
  );
};

interface ProjectTag {
  name: string;
  onClick: (arg: string) => void;
  tag: string;
}

export default Projects;
