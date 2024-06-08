import { ProjectData } from "@/lib/types";

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Carture",
    description: "Car adventure game with dynamic handcrafted environments.",
    image: "/images/placeholder.svg",
    tag: "Game",
    tools: ["unity.svg", "csharp.svg", "blender.svg"],
  },
  {
    id: 2,
    title: "Budget Planner",
    description:
      "Budget planner to help you plan your way into university life.",
    image: "/images/placeholder.svg",
    tag: "Web",
    tools: ["react.svg", "javascript.svg", "chakra.svg", "java.svg"],
  },
  {
    id: 3,
    title: "To-do List Application",
    description:
      "To-do list application with authentication that ensures data privacy.",
    image: "/images/placeholder.svg",
    tag: "Web",
    tools: ["svelte.svg", "typescript.svg", "tailwind.svg", "supabase.svg"],
  },
  {
    id: 4,
    title: "PickUp Your Game",
    description: "Your way to find a pickup game to play your favorite sports.",
    image: "/images/placeholder.svg",
    tag: "Web",
    tools: ["react.svg", "javascript.svg", "chakra.svg"],
  },
  {
    id: 5,
    title: "Box War",
    description:
      "Fight endless rounds of evil boxes with spears and watch them explode!",
    image: "/images/placeholder.svg",
    tag: "Game",
    tools: ["unity.svg", "csharp.svg", "blender.svg"],
  },
  {
    id: 5,
    title: "Coming Soon",
    description: "Progress ...",
    image: "/images/placeholder.svg",
    tag: "Other",
    tools: [],
  },
] as const;

interface NavLinks {
  name: string;
  hash: string;
}
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const milestones = [
  {
    id: 1,
    date: "September 1, 2023",
    title: "Start of a New Journey",
    description: `It is Imagine's day in UBC and I was excited to start off my new chapter in a new envirnoment.`,
  },
  {
    id: 2,
    date: "October 1, 2023",
    title: "Game Development Club",
    description: `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
  },
  {
    id: 3,
    date: "October 23, 2023",
    title: "Hackcamp: Beginner's Day",
    description: `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
  },
  {
    id: 4,
    date: "January 24, 2024",
    title: "NWHacks: 24 Hours of Sitting Down",
    description: `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
  },
  {
    id: 5,
    date: "June 6, 2024",
    title: "UBC Orbit: Frontend Developer",
    description: `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
  },
] as const;
