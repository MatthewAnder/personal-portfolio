import { ProjectData } from "@/lib/types";
import { Box, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ProjectCard {
  project: ProjectData;
  main: ProjectData | null;
  setMain: (args: ProjectData | null) => void;
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

const MotionGridItem = motion(GridItem);
const MotionBox = motion(Box);

const styles = {
  base: {
    position: "relative",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  selected: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
    zIndex: 20,
  },
};

const ProjectCard = ({ project, main, setMain }: ProjectCard) => {
  const isSelected = main === project;
  const selectedStyle = isSelected ? styles.selected : styles.base;

  return (
    <MotionGridItem
      layout
      layoutId={project}
      onClick={isSelected ? () => setMain(null) : () => setMain(project)}
      key={project.title}
      cursor={"pointer"}
      w={{ base: "22em", sm: "28em", md: "23em" }}
      h={{ base: "22em", sm: "28em", md: "22em" }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      rounded={"full"}
      {...selectedStyle}
    >
      <Image
        roundedTop={"xl"}
        h={{ base: 52, md: 60 }}
        w={"100%"}
        pos={"relative"}
        overflow={"hidden"}
        src={project.image}
        alt={project.title}
        color={"white"}
        objectFit={"cover"}
      ></Image>

      <MotionBox
        py={6}
        px={4}
        color={"text.main"}
        bg={"accent.main"}
        roundedBottom={"xl"}
        layout="position"
      >
        <Heading fontSize={"xl"}>{project.title}</Heading>

        <Text fontSize={"md"} color={"text.main"}>
          {project.description}
        </Text>
      </MotionBox>
    </MotionGridItem>
  );
};

export default ProjectCard;
