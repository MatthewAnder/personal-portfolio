"use client";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { useCallback, useEffect, useRef, useState } from "react";

import { Box, Flex, Grid } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ProjectTag {
  name: string;
  onClick: (arg: string) => void;
  tag: string;
  tagRef: (el: HTMLElement | null) => void;
}

const tagNames = ["All", "Web", "Game", "Other"];

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  const [tag, setTag] = useState("All");

  const tagsContainerRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<(HTMLElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.from(".project-tag", {
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        scrollTrigger: {
          trigger: tagsContainerRef.current,
          start: "top 90%",
          once: true,
        },
      });
    },
    { scope: tagsContainerRef },
  );

  useEffect(() => {
    const activeIndex = tagNames.indexOf(tag);
    const activeTag = tagRefs.current[activeIndex];
    if (!activeTag || !indicatorRef.current) return;

    gsap.to(indicatorRef.current, {
      x: activeTag.offsetLeft,
      width: activeTag.offsetWidth,
      duration: 0.3,
      ease: "power1.inOut",
    });
  }, [tag]);

  const setTagRef = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      tagRefs.current[index] = el;
    },
    [],
  );

  return (
    <Flex
      ref={ref}
      id="projects"
      position="relative"
      flexDirection="column"
      alignItems="center"
      w="100%"
      py={{ base: 10, lg: 16 }}
      my={0}
    >
      <SectionHeading eyebrow="Selected Work" label="Projects" />
      <Flex
        ref={tagsContainerRef}
        direction="row"
        justify="center"
        alignItems="center"
        gap={2}
        my={6}
        position="relative"
      >
        <Box
          ref={indicatorRef}
          bg="primary.main"
          h="1px"
          position="absolute"
          bottom={0}
          left={0}
          zIndex={0}
          style={{ width: 0 }}
        />
        {tagNames.map((name, i) => (
          <ProjectTag
            key={name}
            name={name}
            onClick={setTag}
            tag={tag}
            tagRef={setTagRef(i)}
          />
        ))}
      </Flex>

      <Grid
        templateColumns={{ base: "1fr", sm: "repeat(2,1fr)", lg: "repeat(3, 1fr)" }}
        position="relative"
        w="100%"
        maxW="5xl"
        px={{ base: 4, sm: 6, md: 8, lg: 4 }}
        gridRowGap={{ base: 5, md: 8 }}
        gridColumnGap={{ base: 4, md: 6 }}
      >
        {projectsData.map(
          (project) =>
            (project.tag === tag || tag === "All") && (
              <ProjectCard key={project.title} project={project} />
            ),
        )}
      </Grid>
    </Flex>
  );
};

const ProjectTag = ({ name, onClick, tag, tagRef }: ProjectTag) => {
  return (
    <Box
      className="project-tag"
      ref={tagRef}
      onClick={() => onClick(name)}
      px={4}
      py={2}
      fontSize="sm"
      letterSpacing="0.12em"
      textTransform="uppercase"
      cursor="pointer"
      position="relative"
      zIndex={1}
      fontWeight="500"
      color="text.main"
      opacity={tag === name ? 1 : 0.5}
      transition="opacity 0.3s ease"
      _hover={{ opacity: 1 }}
    >
      {name}
    </Box>
  );
};

export default Projects;
