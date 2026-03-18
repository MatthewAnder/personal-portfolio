"use client";
import { ProjectData } from "@/lib/types";
import {
  Box,
  Flex,
  GridItem,
  Heading,
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
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { DiJava } from "react-icons/di";
import {
  SiBlender,
  SiChakraui,
  SiCplusplus,
  SiDotnet,
  SiGo,
  SiJavascript,
  SiNextdotjs,
  SiOpengl,
  SiPostgresql,
  SiReact,
  SiSolidity,
  SiSupabase,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { IconType } from "react-icons";

const ICON_MAP: Record<
  string,
  { icon: IconType; color: string; label: string }
> = {
  react: { icon: SiReact, color: "#61DAFB", label: "React" },
  next: { icon: SiNextdotjs, color: "#2a1e28", label: "Next.js" },
  typescript: { icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  javascript: { icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
  tailwind: { icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" },
  svelte: { icon: SiSvelte, color: "#FF3E00", label: "SvelteKit" },
  supabase: { icon: SiSupabase, color: "#3ECF8E", label: "Supabase" },
  chakra: { icon: SiChakraui, color: "#319795", label: "Chakra UI" },
  java: { icon: DiJava, color: "#F8981D", label: "Java" },
  csharp: { icon: TbBrandCSharp, color: "#9B4F96", label: "C#" },
  unity: { icon: SiUnity, color: "#2a1e28", label: "Unity" },
  blender: { icon: SiBlender, color: "#F5792A", label: "Blender" },
  cpp: { icon: SiCplusplus, color: "#00599C", label: "C++" },
  opengl: { icon: SiOpengl, color: "#5586A4", label: "OpenGL" },
  go: { icon: SiGo, color: "#00ACD7", label: "Go" },
  solidity: { icon: SiSolidity, color: "#555", label: "Solidity" },
  dotnet: { icon: SiDotnet, color: "#512BD4", label: ".NET" },
  postgresql: { icon: SiPostgresql, color: "#336791", label: "PostgreSQL" },
};

gsap.registerPlugin(ScrollTrigger, useGSAP);

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

const ProjectCard = ({ project }: ProjectCard) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(cardRef.current, {
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: "expo.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 92%",
          once: true,
        },
      });
    },
    { scope: cardRef }
  );

  return (
    <GridItem
      ref={cardRef}
      cursor="pointer"
      onClick={() => onOpen()}
      position="relative"
      zIndex={1}
      w="full"
      transition="transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease"
      willChange="transform"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "0 24px 48px rgba(42,30,40,0.14)",
      }}
    >
      <Box
        color="text.main"
        bg="accent.main"
        rounded="2xl"
        overflow="hidden"
        border="1px solid"
        borderColor="primary.100"
        boxShadow="0 2px 16px rgba(42,30,40,0.07)"
      >
        <Box position="relative" overflow="hidden">
          <Image
            h={{ base: 52, md: 60 }}
            w="100%"
            src={project.image}
            alt={project.title}
            color="white"
            objectFit="cover"
            display="block"
            transition="transform 0.5s ease"
            _groupHover={{ transform: "scale(1.04)" }}
          />
        </Box>
        <Box px={6} py={4}>
          <Heading fontSize="xl" letterSpacing="0.01em">
            {project.title}
          </Heading>
          <Flex my={2} gap={1}>
            {project.tools.map((path: string) => {
              return <CustomIcon key={path} src={"icons/" + path} />;
            })}
          </Flex>
          <Text fontSize="sm" color="text.main" opacity={0.8} noOfLines={2}>
            {project.description}
          </Text>
        </Box>
      </Box>
      <SelectedModal project={project} isOpen={isOpen} onClose={onClose} />
    </GridItem>
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
        <ModalHeader fontFamily="Khand-Bold" p={0}>
          <Box>
            <Image
              roundedTop="md"
              h={{ base: 52, md: 60 }}
              w="100%"
              src={project.image}
              alt={project.title}
              color="white"
              objectFit="cover"
            />
          </Box>
          <Heading px={5}>{project.title}</Heading>
        </ModalHeader>
        <ModalCloseButton color="accent.main" bg="text.main" />
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
          <Text fontWeight="bold" mt={3}>
            🌳 Key Features
          </Text>
          {project.feature}
          <Text fontWeight="bold" mt={3}>
            🎮 Lessons
          </Text>
          {project.lessons}
          <br />
          <br />
          <Flex gap={6} color="secondary.main">
            {project.github !== "" && (
              <Link href={project.github} target="_blank">
                Github
              </Link>
            )}
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
  const name = src.split("/").pop()?.replace(".svg", "") ?? "";
  const entry = ICON_MAP[name];

  if (!entry) {
    return (
      <Tooltip hasArrow label={name} fontSize="sm">
        <Image src={src} boxSize={6} mr={2} alt={name} />
      </Tooltip>
    );
  }

  const { icon: Icon, color, label } = entry;
  return (
    <Tooltip hasArrow label={label} fontSize="sm">
      <Box
        as="span"
        fontSize="22px"
        color={color}
        mr={2}
        lineHeight={1}
        display="inline-flex"
        alignItems="center"
      >
        <Icon />
      </Box>
    </Tooltip>
  );
};

export default ProjectCard;
