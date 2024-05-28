import { ProjectData } from "./types";

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Carture",
    description: "Car adventure game with dynamic handcrafted environments.",
    image: "/images/placeholder.svg",
    tag: "Game",
  },
  {
    id: 2,
    title: "Budget Planner",
    description: "Budget planner to help you plan your way into university.",
    image: "/images/placeholder.svg",
    tag: "Web",
  },
  {
    id: 3,
    title: "To-do List Application",
    description: "To-do list application using with authentication.",
    image: "/images/placeholder.svg",
    tag: "Web",
  },
  {
    id: 4,
    title: "PickUp Your Game",
    description: "Your way to find a pickup game to play your favorite sports.",
    image: "/images/placeholder.svg",
    tag: "Web",
  },
  {
    id: 5,
    title: "Box War",
    description: "Fight endless round of evil boxes with spears.",
    image: "/images/placeholder.svg",
    tag: "Game",
  },
  {
    id: 5,
    title: "Coming Soon",
    description: "Progress ...",
    image: "/images/placeholder.svg",
    tag: "Other",
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
