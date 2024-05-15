import { Box } from "@chakra-ui/react";
import SkillsSlider from "@/components/SkillsSlider";
import Typewriter from "@/components/Typewriter";
import { useScroll, useTransform } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const speedProgress = useTransform(scrollYProgress, [0, 1], [100, 200]);
  return (
    <Box height={"100vh"} id="about">
      <SkillsSlider />
    </Box>
  );
};

const Page = () => {
  return <></>;
};

export default About;
