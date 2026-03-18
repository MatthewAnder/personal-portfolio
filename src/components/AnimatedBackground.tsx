"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

// Branch nodes: y on main line, x2 is the far end of the branch
interface BranchNode {
  y: number;
  x2: number;
}

const LEFT_NODES: BranchNode[] = [
  { y: 140, x2: 8  },
  { y: 260, x2: 62 },
  { y: 390, x2: 8  },
];

const RIGHT_NODES: BranchNode[] = [
  { y: 170, x2: 62 },
  { y: 300, x2: 8  },
  { y: 430, x2: 62 },
];

// Main line runs from cy=18 to cy=502
const LINE_TOP = 18;
const LINE_BOT = 502;
const BALL_X   = 35;

function buildBallTimeline(
  coreEl: SVGCircleElement,
  glowEl: SVGCircleElement,
  nodes: BranchNode[],
) {
  const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power1.inOut" } });

  const travel = (cy: number, dur = 1.4) =>
    tl.to([coreEl, glowEl], { attr: { cy }, duration: dur }, "<");

  const branch = (node: BranchNode) => {
    tl.to([coreEl, glowEl], { attr: { cx: node.x2 }, duration: 0.5, ease: "power2.out" });
    tl.to([coreEl, glowEl], { attr: { cx: BALL_X  }, duration: 0.5, ease: "power2.in"  });
  };

  // ─── downward pass ───
  travel(LINE_TOP, 0.01); // snap to top
  for (const node of nodes) {
    travel(node.y);
    branch(node);
  }
  travel(LINE_BOT);

  // ─── upward pass ───
  for (const node of [...nodes].reverse()) {
    travel(node.y);
    branch(node);
  }
  travel(LINE_TOP);

  return tl;
}

interface SideProps {
  color: string;          // main rgba colour string
  nodes: BranchNode[];
  flip?: boolean;         // mirror ticks
}

const Side = ({ color, nodes, flip = false }: SideProps) => {
  const svgRef   = useRef<SVGSVGElement>(null);
  const coreRef  = useRef<SVGCircleElement>(null);
  const glowRef  = useRef<SVGCircleElement>(null);

  const dim = (a: number) => `rgba(${color},${a})`;

  useGSAP(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // ── 1. Draw-in: static paths first, then branches ──────────────────
    const allPaths  = svg.querySelectorAll<SVGPathElement>("path");
    const staticPaths = svg.querySelectorAll<SVGPathElement>("[data-static]");
    const branchPaths = svg.querySelectorAll<SVGPathElement>("[data-branch]");

    allPaths.forEach((p) => {
      const len = p.getTotalLength();
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
    });

    // statics draw in quickly
    staticPaths.forEach((p, i) => {
      gsap.to(p, { strokeDashoffset: 0, duration: 1.6, delay: i * 0.15, ease: "power2.inOut" });
    });

    // branches draw in with slight stagger after statics
    branchPaths.forEach((p, i) => {
      gsap.to(p, { strokeDashoffset: 0, duration: 0.9, delay: 0.6 + i * 0.22, ease: "power2.inOut" });
    });

    // node dots pop in
    svg.querySelectorAll<SVGCircleElement>("[data-node]").forEach((c, i) => {
      gsap.set(c, { opacity: 0, scale: 0, transformOrigin: "center" });
      gsap.to(c,  { opacity: 1, scale: 1, duration: 0.35, delay: 0.9 + i * 0.22, ease: "back.out(2)" });
    });

    // ── 2. Branch pulse loop (extend / retract) ─────────────────────────
    branchPaths.forEach((p, i) => {
      const len = p.getTotalLength();
      gsap.to(p, {
        strokeDashoffset: len,
        duration: 1.2,
        delay: 2 + i * 0.7,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        repeatDelay: 0.8,
      });
    });

    // ── 3. Traveling ball ───────────────────────────────────────────────
    if (!coreRef.current || !glowRef.current) return;
    gsap.set([coreRef.current, glowRef.current], {
      attr: { cx: BALL_X, cy: LINE_TOP },
      opacity: 0,
    });
    gsap.to([coreRef.current, glowRef.current], {
      opacity: 1, duration: 0.4, delay: 1.8,
      onComplete() {
        buildBallTimeline(coreRef.current!, glowRef.current!, nodes);
      },
    });

    // ── 4. Gentle float of entire svg ──────────────────────────────────
    gsap.to(svg, {
      y: -12,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2.2,
    });
  });

  const tickX = flip ? [22, 48] : [48, 22]; // tick direction per side

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      fill="none"
      style={{ display: "block", overflow: "visible" }}
      width="70"
      height="520"
      viewBox="0 0 70 520"
    >
      {/* ── Static: top diamond ── */}
      <path
        data-static=""
        d="M 35 18 L 43 8 L 35 0 L 27 8 Z"
        stroke={`rgba(${color},0.55)`}
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* ── Static: main vertical line ── */}
      <path
        data-static=""
        d="M 35 18 L 35 502"
        stroke={`rgba(${color},0.28)`}
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* ── Static: bottom diamond ── */}
      <path
        data-static=""
        d="M 35 502 L 43 512 L 35 520 L 27 512 Z"
        stroke={`rgba(${color},0.55)`}
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* ── Branches (pulsing) ── */}
      {nodes.map((n) => (
        <path
          key={n.y}
          data-branch=""
          d={`M 35 ${n.y} L ${n.x2} ${n.y}`}
          stroke={`rgba(${color},0.45)`}
          strokeWidth="1"
          strokeLinecap="round"
        />
      ))}

      {/* ── Small ticks (pulsing, midpoints between branches) ── */}
      {nodes.slice(0, -1).map((n, i) => {
        const midY = Math.round((n.y + nodes[i + 1].y) / 2);
        return (
          <path
            key={midY}
            data-branch=""
            d={`M 35 ${midY} L ${tickX[i % 2]} ${midY}`}
            stroke={`rgba(${color},0.22)`}
            strokeWidth="1"
            strokeLinecap="round"
          />
        );
      })}

      {/* ── Junction dots ── */}
      {nodes.map((n, i) => (
        <circle
          key={n.y}
          data-node=""
          cx={35}
          cy={n.y}
          r={3.5}
          fill={`rgba(${color},${i % 2 === 0 ? 0.65 : 0.5})`}
        />
      ))}

      {/* ── Traveling ball: glow + core ── */}
      <circle
        ref={glowRef}
        cx={BALL_X}
        cy={LINE_TOP}
        r={7}
        fill={`rgba(${color},0.18)`}
      />
      <circle
        ref={coreRef}
        cx={BALL_X}
        cy={LINE_TOP}
        r={2.8}
        fill={`rgba(${color},0.9)`}
      />
    </svg>
  );
};

const AnimatedBackground = () => {
  const sharedStyle: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    zIndex: 0,
  };

  return (
    <>
      <div className="side-decoration" style={{ ...sharedStyle, left: 16 }}>
        <Side color="150,187,167" nodes={LEFT_NODES} />
      </div>
      <div className="side-decoration" style={{ ...sharedStyle, right: 16 }}>
        <Side color="94,138,121" nodes={RIGHT_NODES} flip />
      </div>
    </>
  );
};

export default AnimatedBackground;
