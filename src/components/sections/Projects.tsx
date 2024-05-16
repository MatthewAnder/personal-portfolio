"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Heading, Flex, Box, Grid, GridItem } from "@chakra-ui/react";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
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
    <Box mx={10} id="projects">
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
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag == "Mobile"}
        />
      </Flex>
      <Grid
        gap={{ md: 12, base: 8 }}
        gridColumn={3}
        templateColumns={{ lg: "repeat(3, 1fr)" }}
        justifyContent={"center"}
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </Grid>
    </Box>
  );
};

const ProjectTag = ({ name, onClick, isSelected }: ProjectTag) => {
  const buttonStyles = isSelected
    ? "text-white border-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      onClick={() => onClick(name)}
      className={`border-2 rounded-full px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}
    >
      {name}
    </button>
  );
};

interface ProjectTag {
  name: string;
  onClick: (arg: string) => void;
  isSelected: boolean;
}

export default Projects;
