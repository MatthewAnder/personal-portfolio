import { ProjectData } from "@/lib/types";
import {
  Box,
  ChakraProps,
  Flex,
  GridItem,
  Heading,
  Icon,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ProjectCard {
  project: ProjectData;
  main: ProjectData | null;
  setMain: (args: ProjectData | null) => void;
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

const baseStyles: ChakraProps = {
  position: "relative",
  top: 0,
  left: 0,
  zIndex: 1,
  h: { base: "22em", sm: "28em", md: "22em" },
  w: { base: "22em", sm: "28em", md: "23em" },
};

const selectedStyles: ChakraProps = {
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 20,
  h: { base: "22em", sm: "28em", md: "30em" },
  w: { base: "22em", sm: "28em", md: "30em" },
};

const ProjectCard = ({ project, main, setMain }: ProjectCard) => {
  const isSelected: boolean = main === project;
  const selectedStyle: ChakraProps = isSelected ? selectedStyles : baseStyles;

  return (
    <MotionGridItem
      layout
      layoutId={project}
      onClick={isSelected ? () => setMain(null) : () => setMain(project)}
      cursor={"pointer"}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...selectedStyle}
    >
      <MotionBox color={"text.main"} bg={"accent.main"} rounded={"md"}>
        <Image
          roundedTop={"md"}
          h={{ base: 52, md: 60 }}
          w={"100%"}
          pos={"relative"}
          overflow={"hidden"}
          src={project.image}
          alt={project.title}
          color={"white"}
          objectFit={"cover"}
        ></Image>

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

const CustomIcon = ({ src }: CustomIcon) => {
  const label = src.split("/")[1]?.split(".")[0];

  return (
    <Tooltip hasArrow label={label} fontSize="sm">
      <Image src={src} boxSize={6} mr={2} alt="icon" />
    </Tooltip>
  );
};

export default ProjectCard;
