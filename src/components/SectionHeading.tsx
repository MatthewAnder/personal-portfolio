import { Heading } from "@chakra-ui/react";

interface SectiongHeading {
  label: string;
}

const SectionHeading = ({ label }: SectiongHeading) => {
  return (
    <Heading
      as={"h1"}
      fontSize={"4xl"}
      fontWeight={"bold"}
      color={"text.main"}
      mt={24}
      mb={{ base: 2, md: 4 }}
    >
      {label}
    </Heading>
  );
};

export default SectionHeading;
