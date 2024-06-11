import { ProjectData } from "@/lib/types";

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Carture",
    description: "Car adventure game with dynamic handcrafted environments.",
    feature:
      "Experience the thrill of navigating a beautifully handcrafted terrain in our game, where you drive a car using the intuitive WASD keys. The landscape is enriched with meticulously designed trees, rocks, huts, and cliffs, all created with Blender to provide an engaging and realistic environment.",
    lessons:
      "I learned various tools from Blender and the process of designing, developing, and finishing a full project.",
    image: "/images/carture.svg",
    tag: "Game",
    tools: ["unity.svg", "csharp.svg", "blender.svg"],
    github: "https://github.com/MatthewAnder/Carture",
    demo: "https://play.unity.com/mg/other/carture-r",
  },
  {
    id: 2,
    title: "Budget Planner",
    description:
      "Budget planner to help you plan your way into university life.",
    feature:
      "With frontend made from React and Chakra-UI, and backend with Java, this web application allows user to calculate their monthly budget throughout their university life. The website goes through the process of collecting user's data and calculating their budge.",
    lessons:
      "As a first hackathon project, it taught me how to collaborate with peers on a development project and effectively use Git for version control. Additionally, I gained hands-on experience with the various tools and features provided by React and Chakra-UI.",
    image: "/images/budget.svg",
    tag: "Web",
    tools: ["react.svg", "javascript.svg", "chakra.svg", "java.svg"],
    github: "https://github.com/rpss30/BudgetPlanner-HackCamp",
    demo: "",
  },
  {
    id: 3,
    title: "To-do List Application",
    description:
      "To-do list application with authentication that ensures data privacy.",
    feature:
      "This to-do list application has authentication using Supabase authentication with Row Level Security. The frontend is built using a new javascript framework SvelteKit and Skeleton-UI that supports Svelte.",
    lessons:
      "I've gained valuable knowledge on how to create secure websites that ensure data privacy. Additionally, I've explored various tools and resources available for building high-quality websites.",
    image: "/images/todo.svg",
    tag: "Web",
    tools: ["svelte.svg", "typescript.svg", "tailwind.svg", "supabase.svg"],
    github: "https://github.com/MatthewAnder/auth-demo",
    demo: "",
  },
  {
    id: 4,
    title: "PickUp Your Game",
    description: "Your way to find a pickup game to play your favorite sports.",
    feature:
      "This website lets you enjoy your favorite sports and connect with others to play together. It provides information on the locations of each court and details about ongoing games, making it easy to find and join in on the action.",
    lessons:
      "During a 24-hour hackathon, I collaborated with three new peers I met at the event. This experience taught me the importance of teamwork and rapid problem-solving. By integrating the Google Maps API with React, I learned how to effectively create functional applications under tight deadlines.",
    image: "/images/pickup.svg",
    tag: "Web",
    tools: ["react.svg", "javascript.svg", "chakra.svg"],
    github: "https://github.com/MatthewAnder/nwhacks-project",
    demo: "https://pickupyourgame.tech/",
  },
  {
    id: 5,
    title: "Box Invasion",
    description:
      "Fight endless rounds of evil boxes with spears and watch them explode!",
    feature:
      "In this game, the player must fight off endless waves of evil boxes using a gun to save their life. Surrounded by obstacles that add to the challenge, the player must navigate and strategize to survive the relentless onslaught.",
    lessons:
      "I learned how to make use of visual effects and programmed a player that is able to continuously shoot a gun.",
    image: "/images/box.svg",
    tag: "Game",
    tools: ["unity.svg", "csharp.svg", "blender.svg"],
    github: "https://github.com/MatthewAnder/CubeSlayer",
    demo: "https://play.unity.com/mg/other/cube-slayer",
  },
  {
    id: 5,
    title: "Coming Soon",
    description: "Progress ...",
    feature: "Nothing to see here yet!",
    lessons: "Coming Soon!!!",
    image: "/images/placeholder.svg",
    tag: "Other",
    tools: ["/next.svg"],
    github: "",
    demo: "",
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
    date: "October 4, 2023 - Present",
    title: "Game Development Club",
    description: `I joined this club to have a fun and educational experience, allowing me to work on a 2D platformer where the player must run away from a dragon.`,
  },
  {
    id: 3,
    date: "November 23, 2023",
    title: "Hackcamp: Beginner's Day",
    description: `This was my first hackathon and my first with React. It was a fun 6 hours long experience, working with my peers on a Budget Planner`,
  },
  {
    id: 4,
    date: "January 24, 2024",
    title: "NWHacks: 24 Hours of Sitting Down",
    description: `My second hackathon has arrived and it was winter. The coldness from outside made me sit down for 24 hours inside and made a web application called Pickup Your Game.`,
  },
  {
    id: 5,
    date: "June 6, 2024 - Present",
    title: "UBC Orbit: Frontend Developer",
    description: `Just like the title, I got in as a developer! I am truly excited for this position and to write beautiful lines of codes.`,
  },
] as const;
