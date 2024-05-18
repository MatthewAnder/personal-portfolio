import { Box, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ProjectCard {
  imgUrl: string;
  title: string;
  description: string;
  isSelected: boolean;
}

const cardVariants = {
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const ProjectCard = ({
  imgUrl,
  title,
  description,
  isSelected,
}: ProjectCard) => {
  return (
    <>
      {isSelected && (
        <GridItem
          as={motion.div}
          layout
          w={{ base: "100%", lg: "23em" }}
          key={title}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: true }}
        >
          <Image
            roundedTop={"xl"}
            h={{ md: 60, base: 40 }}
            w={"100%"}
            bgPos={"center"}
            pos={"relative"}
            overflow={"hidden"}
            src={imgUrl}
            alt={title}
            color={"white"}
            objectFit={"cover"}
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
      )}
    </>
  );
};

export default ProjectCard;
