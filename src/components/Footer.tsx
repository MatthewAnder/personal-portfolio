import { Center, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center borderTop="1px solid" borderColor="background.300" h="7em">
      <VStack gap={1} lineHeight={1.4}>
        <Text
          color="text.main"
          fontSize="xs"
          letterSpacing="0.14em"
          textTransform="uppercase"
          opacity={0.5}
        >
          &copy; 2026 Matthew Haryanto
        </Text>
      </VStack>
    </Center>
  );
};

export default Footer;
