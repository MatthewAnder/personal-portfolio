"use client";
import { ProjectData } from "@/lib/types";
import {
  Box,
  Button,
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

const ICON_MAP: Record<string, { icon: IconType; label: string }> = {
  react: { icon: SiReact, label: "React" },
  next: { icon: SiNextdotjs, label: "Next.js" },
  typescript: { icon: SiTypescript, label: "TypeScript" },
  javascript: { icon: SiJavascript, label: "JavaScript" },
  tailwind: { icon: SiTailwindcss, label: "Tailwind CSS" },
  svelte: { icon: SiSvelte, label: "SvelteKit" },
  supabase: { icon: SiSupabase, label: "Supabase" },
  chakra: { icon: SiChakraui, label: "Chakra UI" },
  java: { icon: DiJava, label: "Java" },
  csharp: { icon: TbBrandCSharp, label: "C#" },
  unity: { icon: SiUnity, label: "Unity" },
  blender: { icon: SiBlender, label: "Blender" },
  cpp: { icon: SiCplusplus, label: "C++" },
  opengl: { icon: SiOpengl, label: "OpenGL" },
  go: { icon: SiGo, label: "Go" },
  solidity: { icon: SiSolidity, label: "Solidity" },
  dotnet: { icon: SiDotnet, label: ".NET" },
  postgresql: { icon: SiPostgresql, label: "PostgreSQL" },
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
      role="group"
      cursor="pointer"
      onClick={() => onOpen()}
      position="relative"
      zIndex={1}
      w="full"
      transition="transform 0.35s ease, border-color 0.35s ease"
      willChange="transform"
      _hover={{
        transform: "translateY(-4px)",
      }}
    >
      <Box
        color="text.main"
        bg="accent.main"
        overflow="hidden"
        border="1px solid"
        borderColor="background.300"
        transition="border-color 0.35s ease"
        _groupHover={{ borderColor: "primary.main" }}
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
        bg="rgba(28, 26, 23, 0.5)"
        backdropFilter="auto"
        backdropBlur="2px"
      />
      <ModalContent bg="accent.main" borderRadius="0" overflow="hidden">
        <ModalHeader p={0}>
          <Box>
            <Image
              h={{ base: 52, md: 60 }}
              w="100%"
              src={project.image}
              alt={project.title}
              color="white"
              objectFit="cover"
            />
          </Box>
          <Heading fontWeight="500" fontSize={{ base: "xl", md: "2xl" }} px={6} pt={5}>
            {project.title}
          </Heading>
        </ModalHeader>
        <ModalCloseButton
          color="accent.main"
          bg="text.main"
          borderRadius="0"
          _hover={{ bg: "primary.main" }}
        />
        <ModalBody
          px={6}
          pb={8}
          sx={{
            "::-webkit-scrollbar-thumb": {
              background: "var(--chakra-colors-background-300)",
              borderRadius: "10px",
            },
          }}
        >
          <Flex mb={4} gap={1}>
            {project.tools.map((path: string) => {
              return <CustomIcon key={path} src={"icons/" + path} />;
            })}
          </Flex>

          <Text color="text.main" opacity={0.8} lineHeight={1.7}>
            {project.description}
          </Text>

          <ModalSection label="Key Features" text={project.feature} />
          <ModalSection label="Lessons" text={project.lessons} />

          <Flex gap={3} mt={6}>
            {project.github !== "" && (
              <Button
                as="a"
                href={project.github}
                target="_blank"
                variant="outline"
                borderRadius="0"
                border="1px solid"
                borderColor="text.main"
                color="text.main"
                bg="transparent"
                letterSpacing="0.12em"
                fontSize="xs"
                textTransform="uppercase"
                size="sm"
                _hover={{ bg: "text.main", color: "background.main" }}
                transition="background 0.3s ease, color 0.3s ease"
              >
                Github
              </Button>
            )}
            {project.demo !== "" && (
              <Button
                as="a"
                href={project.demo}
                target="_blank"
                variant="outline"
                borderRadius="0"
                border="1px solid"
                borderColor="primary.main"
                color="primary.main"
                bg="transparent"
                letterSpacing="0.12em"
                fontSize="xs"
                textTransform="uppercase"
                size="sm"
                _hover={{ bg: "primary.main", color: "background.main" }}
                transition="background 0.3s ease, color 0.3s ease"
              >
                Live Demo
              </Button>
            )}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

interface ModalSectionProps {
  label: string;
  text: string;
}

const ModalSection = ({ label, text }: ModalSectionProps) => {
  return (
    <Box mt={5} pt={5} borderTop="1px solid" borderColor="background.300">
      <Text
        fontSize="xs"
        letterSpacing="0.16em"
        textTransform="uppercase"
        color="primary.main"
        mb={2}
      >
        {label}
      </Text>
      <Text color="text.main" opacity={0.8} lineHeight={1.7}>
        {text}
      </Text>
    </Box>
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

  const { icon: Icon, label } = entry;
  return (
    <Tooltip hasArrow label={label} fontSize="sm">
      <Box
        as="span"
        fontSize="18px"
        color="text.main"
        opacity={0.55}
        mr={3}
        lineHeight={1}
        display="inline-flex"
        alignItems="center"
        transition="opacity 0.25s ease, color 0.25s ease"
        _hover={{ opacity: 1, color: "primary.main" }}
      >
        <Icon />
      </Box>
    </Tooltip>
  );
};

export default ProjectCard;
