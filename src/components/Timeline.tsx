"use client";
import { milestones } from "@/lib/data";
import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMemo, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Milestone = (typeof milestones)[number];

const PX_PER_MONTH = 22;
const MIN_BAR_HEIGHT = 64;
const TOP_PAD = 24;
const BOTTOM_PAD = 24;
const AXIS_X = 20;
const LANES_OFFSET = 48;

const monthIndex = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
};

const now = new Date();
const presentIndex = now.getFullYear() * 12 + now.getMonth();

const endIndex = (m: Milestone) =>
  m.end === "present" ? presentIndex : monthIndex(m.end);

// For lane packing only: an ongoing commitment should never be treated as
// "finished" just because it's rendered up to today, so nothing else gets
// stacked directly beneath it in the same lane.
const laneEndIndex = (m: Milestone) =>
  m.end === "present" ? Infinity : monthIndex(m.end);

const Milestones = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { baseIndex, years, lanes, points, totalHeight } = useMemo(() => {
    const starts = milestones.map((m) => monthIndex(m.start));
    const ends = milestones.map((m) => endIndex(m));
    const baseIndex = Math.min(...starts);
    const maxIndex = Math.max(...ends);
    const totalHeight =
      (maxIndex - baseIndex) * PX_PER_MONTH + TOP_PAD + BOTTOM_PAD;

    const ranges = milestones.filter((m) => m.start !== m.end);
    const points = milestones.filter((m) => m.start === m.end);

    const sorted = [...ranges].sort(
      (a, b) => monthIndex(a.start) - monthIndex(b.start),
    );
    const laneEnds: number[] = [];
    const lanes: Milestone[][] = [];
    for (const m of sorted) {
      const s = monthIndex(m.start);
      let laneIdx = laneEnds.findIndex((end) => end <= s);
      if (laneIdx === -1) {
        laneIdx = laneEnds.length;
        laneEnds.push(laneEndIndex(m));
        lanes.push([]);
      } else {
        laneEnds[laneIdx] = laneEndIndex(m);
      }
      lanes[laneIdx].push(m);
    }

    const startYear = Math.floor(baseIndex / 12);
    const endYear = Math.floor(maxIndex / 12);
    const years = Array.from(
      { length: endYear - startYear + 1 },
      (_, i) => startYear + i,
    ).filter((yr) => yr * 12 >= baseIndex);

    return { baseIndex, years, lanes, points, totalHeight };
  }, []);

  const y = (idx: number) => (idx - baseIndex) * PX_PER_MONTH + TOP_PAD;

  useGSAP(
    () => {
      gsap.from(".lane-bar", {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 0.7,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });
      gsap.from(".point-marker", {
        opacity: 0,
        scale: 0,
        duration: 0.4,
        stagger: 0.06,
        delay: 0.3,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <Box
      ref={containerRef}
      w="100%"
      maxW="3xl"
      mx="auto"
      px={{ base: 6, md: 10 }}
      py={4}
    >
      <Box position="relative" h={`${totalHeight}px`}>
        {/* Year gridlines, spanning full width */}
        {years.map((yr) => (
          <Box
            key={yr}
            position="absolute"
            top={`${y(yr * 12)}px`}
            left={0}
            right={0}
          >
            <Box h="1px" bg="background.300" />
            <Text
              position="absolute"
              top="4px"
              left={0}
              fontSize="10px"
              letterSpacing="0.08em"
              color="text.main"
              opacity={0.5}
            >
              {yr}
            </Text>
          </Box>
        ))}

        {/* Axis line + one-off event dots */}
        <Box
          position="absolute"
          left={`${AXIS_X}px`}
          top={0}
          bottom={0}
          w="1px"
          bg="background.300"
        />
        {points.map((m) => (
          <PointMarker key={m.id} milestone={m} top={y(monthIndex(m.start))} />
        ))}

        {/* Lanes: overlapping roles/commitments as bars */}
        <Flex
          position="absolute"
          top={0}
          bottom={0}
          left={`${LANES_OFFSET}px`}
          right={0}
          gap={{ base: 2, md: 3 }}
        >
          {lanes.map((lane, i) => (
            <Box key={i} flex={1} position="relative">
              {lane.map((m) => (
                <LaneBar
                  key={m.id}
                  milestone={m}
                  top={y(monthIndex(m.start))}
                  height={Math.max(
                    y(endIndex(m)) - y(monthIndex(m.start)),
                    MIN_BAR_HEIGHT,
                  )}
                />
              ))}
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

interface LaneBarProps {
  milestone: Milestone;
  top: number;
  height: number;
}

const LaneBar = ({ milestone, top, height }: LaneBarProps) => {
  return (
    <Tooltip hasArrow label={milestone.description} fontSize="xs" maxW="18em">
      <Box
        className="lane-bar"
        position="absolute"
        top={`${top}px`}
        height={`${height}px`}
        w="100%"
        bg="background.200"
        borderTop="2px solid"
        borderColor="primary.main"
        px={2}
        py={2}
        cursor="default"
        overflow="hidden"
        transition="background 0.25s ease"
        _hover={{ bg: "background.300" }}
      >
        <Text
          fontSize="xs"
          fontWeight="500"
          color="text.main"
          noOfLines={2}
          lineHeight={1.35}
        >
          {milestone.title}
        </Text>
        <Text
          fontSize="10px"
          letterSpacing="0.06em"
          textTransform="uppercase"
          color="primary.main"
          opacity={0.8}
          mt={0.5}
        >
          {milestone.date}
        </Text>
      </Box>
    </Tooltip>
  );
};

interface PointMarkerProps {
  milestone: Milestone;
  top: number;
}

const PointMarker = ({ milestone, top }: PointMarkerProps) => {
  return (
    <Tooltip
      hasArrow
      label={`${milestone.title}: ${milestone.description}`}
      fontSize="xs"
      maxW="18em"
    >
      <Box
        className="point-marker"
        position="absolute"
        left={`${AXIS_X}px`}
        top={`${top}px`}
        transform="translate(-50%, -50%)"
        w="7px"
        h="7px"
        borderRadius="full"
        bg="primary.main"
        cursor="default"
      />
    </Tooltip>
  );
};

export default Milestones;
