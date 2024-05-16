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
        roundedTop={"xl"}
        h={{ md: 72, base: 40 }}
        w={"100%"}
        bgPos={"center"}
        pos={"relative"}
        overflow={"hidden"}
        src={imgUrl}
        alt={title}
        objectFit={"cover"}
        width={350}
        maxWidth={350}
      ></Image>

      <Box
        py={6}
        px={4}
        color={"background.200"}
        bg={"background.900"}
        roundedBottom={"xl"}
      >
        <Heading fontSize={"lg"} fontWeight={"semibold"}>
          {title}
        </Heading>
        <Text fontSize={"md"} color={"background.400"}>
          {description}
        </Text>
      </Box>
    </GridItem>
  );
};

export default ProjectCard;
