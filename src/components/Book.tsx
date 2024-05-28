import { CloseIcon } from "@chakra-ui/icons";
import {
  AbsoluteCenter,
  Box,
  Center,
  Divider,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

interface Page {
  handlePageClick: () => void;
}

const customEase: number[] = [0.645, 0.045, 0.355, 1];

const Book = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handlePageClick = () => {
    setIsFlipped(!isFlipped);
  };
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [0.7, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <Center
      display={{ base: "none", md: "flex" }}
      height="100vh"
      bg="gray.100"
      p={4}
      mb={20}
    >
      <MotionBox
        ref={ref}
        position="relative"
        width={{ sm: "40rem", lg: "60rem" }}
        height={{ sm: "35rem", lg: "42.6rem" }}
        boxShadow="0 0 100px rgba(0, 0, 0, .3)"
        bg="white"
        style={{ scale, opacity }}
      >
        <Page1 />
        <MotionBox
          position="absolute"
          top="0"
          left="0"
          zIndex={5}
          width="100%"
          height="100%"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 1, ease: customEase }}
        >
          <Page2 handlePageClick={handlePageClick} />
          <Page3 handlePageClick={handlePageClick} />
        </MotionBox>

        <Page4 />
      </MotionBox>
    </Center>
  );
};

const Page1 = () => {
  const constraint = useRef(null);
  return (
    <MotionBox
      key="page1"
      ref={constraint}
      position="relative"
      width="50%"
      height={"100%"}
      bgGradient="linear-gradient(-90deg, rgba(227,227,227,1) 0%, rgba(247,247,247,0) 18%)"
      cursor="pointer"
      zIndex={1}
    >
      <Image src="/images/drawing.svg" alt="Book Cover" height={"100%"} />
      <MotionImage
        src="images/basketball.svg"
        boxSize={"5em"}
        zIndex={7}
        position={"absolute"}
        drag
        dragConstraints={constraint}
        style={{ x: 175, y: -250 }}
      />
      <MotionImage
        src="images/football.svg"
        boxSize={"5em"}
        zIndex={7}
        position={"absolute"}
        drag
        dragConstraints={constraint}
        style={{ x: 100, y: -550 }}
      />
    </MotionBox>
  );
};

const Page2 = ({ handlePageClick }: Page) => {
  return (
    <Box
      zIndex={5}
      key="page2"
      position="absolute"
      width="50%"
      height="100%"
      bgGradient="linear-gradient(90deg, rgba(227,227,227,1) 0%, rgba(247,247,247,1) 18%)"
      cursor="pointer"
      padding="3rem"
      display="flex"
      flexDirection="column"
      style={{
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
      }}
      onClick={handlePageClick}
    >
      <Stack spacing={4}>
        <Heading as="h1" size="lg">
          About Me
        </Heading>
        <Text fontSize="md">
          <Box as="span" color={"primary.main"}>
            Name
          </Box>{" "}
          Matthew Haryanto
        </Text>
        <Text fontSize="md">
          <Box as="span" color={"primary.main"}>
            Nationality
          </Box>{" "}
          Indonesia
        </Text>
        <Text fontSize="md">
          <Box as="span" color={"primary.main"}>
            Location
          </Box>{" "}
          Vancouver, Canada
        </Text>
        <Text>
          <Box as="span" color={"primary.main"}>
            Languages
          </Box>{" "}
          English, Indonesian, Mandarin
        </Text>
        <Text>Eats ice cream on a daily basis.</Text>
        <SectionDivider />
        <Text>
          I find programming to be a truly fascinating piece of art. The power
          of simple 0s and 1s to construct sophisticated machines beyond this
          world is nothing short of magical. Each line of code is like a
          brushstroke on a digital canvas, creating intricate systems and
          innovations that shape our future. My passion lies where creativity
          and logic intertwine to transform abstract ideas into tangible
          realities. Whether it&#39;s developing cutting-edge software or
          solving complex problems&#44; I am constantly inspired by the endless
          possibilities that programming offers.
        </Text>
      </Stack>
      <Text fontSize="sm" alignSelf="flex-end" mt="auto">
        2
      </Text>
    </Box>
  );
};

const Page3 = ({ handlePageClick }: Page) => {
  return (
    <Box
      zIndex={2}
      key="page3"
      position="absolute"
      width="50%"
      height="100%"
      bgGradient="linear-gradient(-90deg, rgba(227,227,227,1) 0%, rgba(247,247,247,1) 18%)"
      cursor="pointer"
      padding="3rem"
      display="flex"
      flexDirection={"column"}
      style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
      onClick={handlePageClick}
    >
      <Stack spacing={4}>
        <Heading as="h1" size="xl">
          Education
        </Heading>
        <Text fontSize="md">a</Text>
      </Stack>
      <Text fontSize="sm" alignSelf="flex-end" mt="auto">
        3
      </Text>
    </Box>
  );
};

const Page4 = () => {
  return (
    <Box
      key="page4"
      position="absolute"
      top="0"
      right="0"
      width="50%"
      height="100%"
      backgroundImage="linear-gradient(90deg, rgba(227,227,227,1) 0%, rgba(247,247,247,0) 18%)"
      cursor="pointer"
      padding="3rem"
      display="flex"
      flexDirection="column"
    >
      <Stack spacing={4}>
        <Heading as="h1" size="xl">
          Experiences
        </Heading>
        <Text fontSize="md">a </Text>
      </Stack>
      <Text fontSize="sm" alignSelf="flex-end" mt="auto">
        4
      </Text>
    </Box>
  );
};

const SectionDivider = () => (
  <Box
    position="relative"
    py={4}
    px={1}
    initial={"hidden"}
    whileInView={"visible"}
    variants={{ visible: { scaleX: 1 }, hidden: { scaleX: 0 } }}
    transition={{ duration: 2 }}
  >
    <Divider borderWidth={"2px"} borderColor={"primary.main"} />
    <AbsoluteCenter bg="rgba(247,247,247,1)" px={2}>
      <CloseIcon boxSize={4} color={"secondary.main"} />
    </AbsoluteCenter>
  </Box>
);

export default Book;
