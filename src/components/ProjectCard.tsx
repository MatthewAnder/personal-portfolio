import React from "react";
import { Image, Heading, Text, Box, GridItem } from "@chakra-ui/react";

interface ProjectCard {
  imgUrl: string;
  title: string;
  description: string;
}

const ProjectCard = ({ imgUrl, title, description }: ProjectCard) => {
  return (
    <GridItem>
      <Image
        roundedTop={"sm"}
        h={{ md: 72, base: 40 }}
        bgPos={"center"}
        pos={"relative"}
        overflow={"hidden"}
        src={imgUrl}
        alt={title}
        style={{ background: `url(${imgUrl})`, backgroundSize: "contain" }}
      ></Image>
      <Box py={6} px={4} color={"white"} bg={"black"} roundedBottom={"xl"}>
        <Heading fontSize={"lg"} fontWeight={"semibold"}>
          {title}
        </Heading>
        <Text fontSize={"md"} color={"beige"}>
          {description}
        </Text>
      </Box>
    </GridItem>
  );
};

export default ProjectCard;
