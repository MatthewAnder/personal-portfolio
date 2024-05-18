import { Box, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

interface ProjectCard {
  imgUrl: string;
  title: string;
  description: string;
  isSelected: boolean;
}

const cardVariants = {
  visible: {
    scale: 1,
    opacity: 1,
  },
  hidden: {
    scale: 0.6,
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
          w={{ base: "22em", sm: "28em", md: "23em" }}
          key={title}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          boxShadow={"xl"}
          rounded={"full"}
        >
          <Image
            roundedTop={"xl"}
            h={{ base: 52, md: 60 }}
            w={"100%"}
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
            boxShadow={"2xl"}
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
