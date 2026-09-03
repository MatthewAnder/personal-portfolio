"use client";
import { Heading } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

const Typewriter = () => {
  const texts = ["Frontend", "Backend", "Systems"];
  const [displayText, setDisplayText] = useState("");
  const containerRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const counter = { value: 0 };
    let textIndex = 0;

    function animate() {
      const text = texts[textIndex];
      gsap.to(counter, {
        value: 60,
        duration: 3,
        ease: "power1.in",
        onUpdate() {
          setDisplayText(text.slice(0, Math.round(counter.value)));
        },
        onComplete() {
          gsap.to(counter, {
            value: 0,
            delay: 0.5,
            duration: 1.5,
            ease: "power1.out",
            onUpdate() {
              setDisplayText(text.slice(0, Math.round(counter.value)));
            },
            onComplete() {
              textIndex = (textIndex + 1) % texts.length;
              counter.value = 0;
              animate();
            },
          });
        },
      });
    }

    animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Heading
      ref={containerRef}
      color="primary.main"
      fontWeight="500"
      fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
      textAlign={{ base: "center", lg: "end" }}
    >
      {displayText}
    </Heading>
  );
};

export default Typewriter;
