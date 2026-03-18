"use client";
import { Box } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ReactElement, useRef } from "react";

gsap.registerPlugin(useGSAP);

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const Tilt = ({ children }: { children: ReactElement }) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
        const rX = (mouseY / rect.height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / rect.width - HALF_ROTATION_RANGE;

        gsap.to(el, {
          rotateX: rX,
          rotateY: rY,
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(el, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: ref },
  );

  return (
    <Box
      ref={ref}
      position="relative"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </Box>
  );
};

export default Tilt;
