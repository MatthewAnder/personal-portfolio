import { ProjectData } from "@/lib/types";
import {
  Box,
  Flex,
  GridItem,
  Heading,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ProjectCard {
  project: ProjectData;
}

interface CustomIcon {
  src: string;
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

const ProjectCard = ({ project }: ProjectCard) => {
  return (
    <MotionGridItem
      layout
      layoutId={project}
      cursor={"pointer"}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      position={"relative"}
      zIndex={1}
      h={{ base: "22em", sm: "28em", md: "22em" }}
      w={{ base: "22em", sm: "28em", md: "23em" }}
    >
      <MotionBox color={"text.main"} bg={"accent.main"} rounded={"md"}>
        <Image
          roundedTop={"md"}
          h={{ base: 52, md: 60 }}
          w={"100%"}
          src={project.image}
          alt={project.title}
          color={"white"}
          objectFit={"cover"}
          overflow={"hidden"}
        />

        <MotionBox px={6} py={3}>
          <Heading fontSize={"xl"}>{project.title}</Heading>
          <Flex my={2}>
            {project.tools.map((path: string) => {
              return <CustomIcon key={path} src={"icons/" + path} />;
            })}
          </Flex>
          <Text fontSize={"md"} color={"text.main"}>
            {project.description}
          </Text>
        </MotionBox>
      </MotionBox>
    </MotionGridItem>
  );
};

const SelectedModal = () => {
  return;
};

const CustomIcon = ({ src }: CustomIcon) => {
  const label = src.split("/")[1]?.split(".")[0];

  return (
    <Tooltip hasArrow label={label} fontSize="sm">
      <Image src={src} boxSize={6} mr={2} alt="icon" />
    </Tooltip>
  );
};

export default ProjectCard;
