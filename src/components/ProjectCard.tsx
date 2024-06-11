import { ProjectData } from "@/lib/types";
import {
  Box,
  Flex,
  GridItem,
  Heading,
  Icon,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ProjectCard {
  project: ProjectData;
}

interface CustomIcon {
  src: string;
}

interface SelectedModal {
  project: ProjectData;
  isOpen: boolean;
  onClose: () => void;
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <MotionGridItem
      layout
      layoutId={project}
      cursor={"pointer"}
      onClick={() => onOpen()}
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
      <SelectedModal project={project} isOpen={isOpen} onClose={onClose} />
    </MotionGridItem>
  );
};

const SelectedModal = ({ project, isOpen, onClose }: SelectedModal) => {
  return (
    <Modal
      isCentered
      preserveScrollBarGap
      blockScrollOnMount
      size={{ base: "xs", sm: "xl" }}
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="inside"
    >
      <ModalOverlay
        bg="none"
        backdropFilter="auto"
        backdropInvert="20%"
        backdropBlur="2px"
      />
      <ModalContent>
        <ModalHeader fontFamily={"Khand-Bold"} p={0}>
          <Box>
            <Image
              roundedTop={"md"}
              h={{ base: 52, md: 60 }}
              w={"100%"}
              src={project.image}
              alt={project.title}
              color={"white"}
              objectFit={"cover"}
            />
          </Box>
          <Heading px={5}>{project.title}</Heading>
        </ModalHeader>
        <ModalCloseButton color={"accent.main"} bg={"text.main"} />
        <ModalBody
          sx={{
            "::-webkit-scrollbar-thumb": {
              background: "#babac0",
              borderRadius: "16px",
              border: "4px solid #fff",
            },
          }}
        >
          <Flex mb={2}>
            {project.tools.map((path: string) => {
              return <CustomIcon key={path} src={"icons/" + path} />;
            })}
          </Flex>
          {project.description}
          <Text fontWeight={"bold"} mt={3}>
            🌳 Key Features
          </Text>
          {project.feature}
          <Text fontWeight={"bold"} mt={3}>
            🎮 Lessons
          </Text>
          {project.lessons}
          <br />
          <br />
          <Flex gap={6} color={"secondary.main"}>
            {/*GITHUB LINK*/}
            {project.github !== "" && (
              <Link href={project.github} target="_blank">
                Github
              </Link>
            )}
            {/*LIVE DEMO LINK*/}
            {project.demo !== "" && (
              <Link href={project.demo} target="_blank">
                Live Demo
              </Link>
            )}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
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
