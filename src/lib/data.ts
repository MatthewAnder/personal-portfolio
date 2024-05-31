import { ProjectData } from "./types";

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
    name: "Experience",
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
