// components/Book.js
import {
  Box,
  Center,
  Image,
  Text,
  Heading,
  Table,
  Tbody,
  Tr,
  Td,
  Stack,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

interface Page {
  handlePageClick: () => void;
}

const Book = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handlePageClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Center
      display={{ base: "none", md: "flex" }}
      height="100vh"
      bg="gray.100"
      p={4}
      mb={10}
    >
      <Box
        position="relative"
        width={{ sm: "40rem", lg: "60rem" }}
        height={{ sm: "35rem", lg: "42.6rem" }}
        boxShadow="0 0 100px rgba(0, 0, 0, .3)"
        bg="white"
      >
        <Page1 />
        <MotionBox
          position="absolute"
          top="0"
          left="0"
          zIndex={2}
          width="100%"
          height="100%"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 1, ease: [0.645, 0.045, 0.355, 1] }}
        >
          <Page2 handlePageClick={handlePageClick} />
          <Page3 handlePageClick={handlePageClick} />
        </MotionBox>

        <Page4 />
      </Box>
    </Center>
  );
};

const Page1 = () => {
  return (
    <MotionBox
      key="page1"
      position="absolute"
      top="0"
      left="0"
      width="50%"
      height="100%"
      bg="var(--page-bg)"
      backgroundImage="linear-gradient(-90deg, rgba(227,227,227,1) 0%, rgba(247,247,247,0) 18%)"
      cursor="pointer"
      style={{ transformOrigin: "left" }}
    >
      <Image
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/193203/1111.jpg"
        alt="Book Cover"
        width="100%"
        height="100%"
        objectFit="cover"
      />
    </MotionBox>
  );
};

const Page2 = ({ handlePageClick }: Page) => {
  return (
    <MotionBox
      zIndex={2}
      key="page2"
      position="absolute"
      width="50%"
      height="100%"
      backgroundImage="linear-gradient(90deg, rgba(227,227,227,1) 0%, rgba(247,247,247,1) 18%)"
      cursor="pointer"
      padding="3rem"
      display="flex"
      flexDirection="column"
      transition={{ duration: 0.9, ease: [0.645, 0.045, 0.355, 1] }}
      style={{
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
      }}
      onClick={handlePageClick}
    >
      <Stack spacing={4}>
        <Heading as="h1" size="xl">
          II
        </Heading>
        <Text fontSize="md">
          HARI SELDON — . . . born in the 11,988th year of the Galactic Era;
          died 12,069...
        </Text>
        <Text fontSize="md">
          Undoubtedly his greatest contributions were in the field of
          psychohistory...
        </Text>
        <Text fontSize="md">
          The best existing authority we have for the details of his life...
        </Text>
        <Text fontSize="sm" alignSelf="flex-end">
          Encyclopedia Galactica*
        </Text>
        <Text fontSize="md">His name was Gaal Dornick...</Text>
        <Text fontSize="md">
          There were nearly twenty-five million inhabited planets...
        </Text>
        <Text fontSize="md">
          To Gaal, this trip was the undoubted climax of his young...
        </Text>
      </Stack>
      <Text fontSize="sm" alignSelf="flex-end" mt="auto">
        2
      </Text>
    </MotionBox>
  );
};

const Page3 = ({ handlePageClick }: Page) => {
  return (
    <MotionBox
      zIndex={2}
      key="page3"
      position="absolute"
      width="50%"
      height="100%"
      backgroundImage="linear-gradient(90deg, rgba(227,227,227,1) 0%, rgba(247,247,247,1) 18%)"
      cursor="pointer"
      padding="3rem"
      display="flex"
      flexDirection="column"
      transition={{ duration: 0.9, ease: [0.645, 0.045, 0.355, 1] }}
      style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
      onClick={handlePageClick}
    >
      <Stack spacing={4}>
        <Heading as="h1" size="xl">
          III
        </Heading>
        <Text fontSize="md">
          HARI SELDON — . . . born in the 11,988th year of the Galactic Era;
          died 12,069...
        </Text>
        <Text fontSize="md">
          Undoubtedly his greatest contributions were in the field of
          psychohistory...
        </Text>
        <Text fontSize="md">
          The best existing authority we have for the details of his life...
        </Text>
        <Text fontSize="sm" alignSelf="flex-end">
          Encyclopedia Galactica*
        </Text>
        <Text fontSize="md">His name was Gaal Dornick...</Text>
        <Text fontSize="md">
          There were nearly twenty-five million inhabited planets...
        </Text>
        <Text fontSize="md">
          To Gaal, this trip was the undoubted climax of his young...
        </Text>
      </Stack>
      <Text fontSize="sm" alignSelf="flex-end" mt="auto">
        3
      </Text>
    </MotionBox>
  );
};

const Page4 = () => {
  return (
    <MotionBox
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
      transformOrigin="left"
    >
      <Stack spacing={4}>
        <Heading as="h1" size="xl">
          IV
        </Heading>
        <Text fontSize="md">
          HARI LDON — . . . born in the 11,988th year of the Galactic Era; died
          12,069...
        </Text>
        <Text fontSize="md">
          Undoubtedly his greatest contributions were in the field of
          psychohistory...
        </Text>
        <Text fontSize="md">
          The best existing authority we have for the details of his life...
        </Text>
        <Text fontSize="sm" alignSelf="flex-end">
          Encyclopedia Galactica*
        </Text>
        <Text fontSize="md">His name was Gaal Dornick...</Text>
        <Text fontSize="md">
          There were nearly twenty-five million inhabited planets...
        </Text>
        <Text fontSize="md">
          To Gaal, this trip was the undoubted climax of his young...
        </Text>
      </Stack>
      <Text fontSize="sm" alignSelf="flex-end" mt="auto">
        4
      </Text>
    </MotionBox>
  );
};

export default Book;
