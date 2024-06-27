"use client";

import { Heading } from "@chakra-ui/react";
import {
  animate,
  motion,
  useMotionValue,
  useTransform
} from "framer-motion";
import { useEffect } from "react";

interface HomePage {
  label: string;
}

const MotionHeading = motion(Heading);

const Typewriter = () => {
  const textIndex = useMotionValue(0);
  const texts = ["Frontend", "Backend", "Game", "Cybersecurity"];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest),
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 3,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0.5,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MotionHeading
      color={"text.main"}
      fontSize={{ base: "3xl", lg: "5xl" }}
      textAlign={{ base: "center", lg: "end" }}
    >
      {displayText}
    </MotionHeading>
  );
};

export default Typewriter;
