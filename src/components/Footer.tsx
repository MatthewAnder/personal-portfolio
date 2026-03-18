import { Box, Center, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box borderTop="1px solid" borderColor="primary.100" mt={8}>
      <Center h="5em">
        <VStack gap={0} lineHeight={1.4}>
          <Text color="text.main" fontSize="sm" opacity={0.6}>
            &copy; 2025 Matthew Haryanto
          </Text>
          <Text color="primary.400" fontSize="xs" letterSpacing="0.08em">
            Built with Next.js &amp; GSAP
          </Text>
        </VStack>
      </Center>
    </Box>
  );
};

export default Footer;
