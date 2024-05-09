import {
  Box,
  Center,
  Image,
  Heading,
  Highlight,
  Text,
  Flex,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Center>
      <Flex>
        <Title />
        <Picture />
      </Flex>
    </Center>
  );
};

const Title = () => {
  return (
    <Box>
      <Heading as="h1" lineHeight="tall">
        Matthew Haryanto
      </Heading>
      <Heading as="h1" lineHeight="tall">
        <Highlight
          query={["Frontend", ""]}
          styles={{ px: "2", py: "1", rounded: "full", bg: "secondary.main" }}
        >
          I&#39;m a Frontend Developer&#33;
        </Highlight>
      </Heading>
    </Box>
  );
};

const Picture = () => {
  return (
    <Box>
      <Image src="" alt="img" />
    </Box>
  );
};

export default Home;
