import { Box, Center, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center h={"3em"} position={"relative"}>
      <VStack position={"absolute"} bottom={0} gap={0} lineHeight={1.3}>
        <Text color={"text.main"}> Copyright &copy; 2024 </Text>
        <Text color={"text.main"}>Made by the GOAT Matthew!</Text>
      </VStack>
    </Center>
  );
};

export default Footer;
