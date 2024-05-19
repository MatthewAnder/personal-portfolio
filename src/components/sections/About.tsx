import SectionHeading from "@/components/SectionHeading";
import Book from "@/components/Book";
import { Center, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Center mb={10}>
      <Flex
        alignItems={"center"}
        height={"100vh"}
        id="about"
        direction={"column"}
      >
        <SectionHeading label="Learn More!" />
        <Book />
      </Flex>
    </Center>
  );
};
const Picture = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <Image
        src="/images/profile.jpg"
        alt="img"
        boxSize={{ base: "sm", lg: "md" }}
        objectFit="cover"
        rounded={"full"}
        boxShadow={"2xl"}
      />
    </motion.div>
  );
};
export default About;
