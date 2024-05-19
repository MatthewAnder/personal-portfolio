import { Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface SectiongHeading {
  label: string;
}

const SectionHeading = ({ label }: SectiongHeading) => {
  return (
    <motion.div>
      <Heading
        as={"h1"}
        fontSize={"4xl"}
        color={"text.main"}
        mt={24}
        mb={{ base: 2, md: 4 }}
      >
        {label}
      </Heading>
    </motion.div>
  );
};

export default SectionHeading;
