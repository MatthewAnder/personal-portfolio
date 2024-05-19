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
          w={{ base: "22em", sm: "28em", md: "23em" }}
          key={title}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: true }}
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
            color={"text.main"}
            bg={"accent.main"}
            roundedBottom={"xl"}
          >
            <Heading fontSize={"xl"}>{title}</Heading>
            <Text fontSize={"md"} color={"primary.main"}>
              {description}
            </Text>
          </Box>
        </GridItem>
      )}
    </>
  );
};

export default ProjectCard;
