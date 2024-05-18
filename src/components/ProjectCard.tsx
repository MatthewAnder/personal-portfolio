import React, { useRef } from "react";
import { Image, Heading, Text, Box, GridItem } from "@chakra-ui/react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

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
    display: "block",
  },
  hidden: { y: 40, opacity: 0, display: "none" },
};

const ProjectCard = ({
  imgUrl,
  title,
  description,
  isSelected,
}: ProjectCard) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  return (
    <AnimatePresence>
      {isSelected && (
        <motion.li
          key={title}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ width: "23em", display: "inline" }}
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
        </motion.li>
      )}
    </AnimatePresence>
  );
};

export default ProjectCard;
