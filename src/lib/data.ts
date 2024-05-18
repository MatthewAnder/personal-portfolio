interface ProjectsData {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
}

export const projectsData: ProjectsData[] = [
  {
    id: 1,
    title: "Carture",
    description: "Project 1 description",
    image: "/images/profile.jpg",
    tag: ["All", "Game"],
  },
  {
    id: 2,
    title: "Budget Planner",
    description: "Project 2 description",
    image: "/images/profile.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "To-do List Application",
    description: "Project 3 description",
    image: "/images/profile.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "PickUp Your Game",
    description: "LALALLALA",
    image: "/images/profile.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Box War",
    description: "Authentication and CRUD operations",
    image: "/images/profile.jpg",
    tag: ["All", "Game"],
  },
  {
    id: 5,
    title: "Coming Soon",
    description: "Progress ...",
    image: "/images/profile.jpg",
    tag: ["None"],
  },
] as const;
