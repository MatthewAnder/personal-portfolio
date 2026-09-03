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
    id: 6,
    title: "NwHacks: API Shield",
    description:
      "🏆 Best Security Hack: Decentralized API key sharing service built on Ethereum to prevent credential leaks.",
    feature:
      "Developed a decentralized API key sharing service to address security threats, leveraging blockchain to prevent over-exposure of annual API key secrets. Integrated MetaMask for secure API key storage and user authentication.",
    lessons:
      "Overcame challenges in Solidity to implement smart contracts on the Ethereum blockchain. Learned how to integrate Web3 tooling with a modern Next.js frontend and Go backend communicating via RabbitMQ.",
    image: "/images/placeholder.svg",
    tag: "Web",
    tools: ["next.svg", "go.svg", "solidity.svg"],
    github: "",
    demo: "",
  },
  {
    id: 7,
    title: "Food Marketplace",
    description:
      "Full-stack mobile marketplace for peer-to-peer homemade food trading with AI kitchen validation.",
    feature:
      "Developed a full-stack mobile marketplace using React Native and ASP.NET Core. Implemented user authentication, product listings with image uploads, search/filter functionality, and secure AI kitchen validation to ensure food safety compliance.",
    lessons:
      "Gained experience building cross-platform mobile apps with React Native and integrating a .NET Core REST API backed by PostgreSQL. Learned patterns for image upload pipelines and AI-assisted content moderation.",
    image: "/images/placeholder.svg",
    tag: "Web",
    tools: ["react.svg", "dotnet.svg", "postgresql.svg"],
    github: "",
    demo: "",
  },
  {
    id: 8,
    title: "OpenGL Desktop App",
    description:
      "Minimal OpenGL rendering engine in C++ that renders 3D objects using custom shaders and linear algebra.",
    feature:
      "Built a minimal OpenGL rendering application in C++ using shaders to render 3D objects. Implemented the full graphics pipeline using linear algebra, including model, view, and projection transformations.",
    lessons:
      "Used vector and matrix operations for camera control, coordinate transformations, and perspective projection, gaining a deep understanding of how real-time graphics engines work at a low level.",
    image: "/images/placeholder.svg",
    tag: "Other",
    tools: ["opengl.svg", "cpp.svg"],
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
    start: "2023-09",
    end: "2023-09",
    title: "Start of a New Journey",
    description: `Imagine Day at UBC, excited to kick off a new chapter in a new environment.`,
  },
  {
    id: 2,
    date: "October 2023 - October 2024",
    start: "2023-10",
    end: "2024-10",
    title: "Game Development Club",
    description: `Joined to build a 2D platformer where the player runs away from a dragon.`,
  },
  {
    id: 3,
    date: "November 2023",
    start: "2023-11",
    end: "2023-11",
    title: "Hackcamp: First Hackathon",
    description: `My first hackathon and first time with React, built a Budget Planner in 6 hours.`,
  },
  {
    id: 4,
    date: "January 2024",
    start: "2024-01",
    end: "2024-01",
    title: "NwHacks: 24 Hours of Coding",
    description: `Survived 24 hours in the cold to build Pickup Your Game, a sports court finder.`,
  },
  {
    id: 5,
    date: "August 2024 - October 2025",
    start: "2024-08",
    end: "2025-10",
    title: "UBC Orbit: Frontend Lead",
    description: `Led devs to build the ALEASAT satellite website with 3D components and end-to-end tests.`,
  },
  {
    id: 6,
    date: "July 2024 - April 2026",
    start: "2024-07",
    end: "2026-04",
    title: "Gado-gado UBC: Web Developer",
    description: `Built the full-stack site for UBC's Indonesian Student Association with Node.js and PostgreSQL.`,
  },
  {
    id: 7,
    date: "January 2025",
    start: "2025-01",
    end: "2025-01",
    title: "NwHacks 2025: Best Security Hack 🏆",
    description: `Won Best Security Hack building a decentralized API key service on Ethereum with Solidity.`,
  },
  {
    id: 8,
    date: "October 2025 - Present",
    start: "2025-10",
    end: "present",
    title: "UBC Trading Group: Quant Developer",
    description: `Built a live trading simulator with FastAPI WebSockets, REST APIs, and Docker CI/CD.`,
  },
  {
    id: 9,
    date: "January 2026 - Present",
    start: "2026-01",
    end: "present",
    title: "Teaching Assistant, CPSC 210 (UBC)",
    description: `Supporting students in UBC's second-year computer science course through labs, office hours, and grading.`,
  },
  {
    id: 10,
    date: "May 2026 - August 2026",
    start: "2026-05",
    end: "2026-08",
    title: "Software Developer Co-Op, Rockland Scientific",
    description: `Shipped full-stack features across ASP.NET Core and Next.js, and drove a database migration across 10+ API controllers.`,
  },
  {
    id: 11,
    date: "September 2026 - April 2027",
    start: "2026-09",
    end: "2027-04",
    title: "AI Software Developer Co-Op, Motorola Solutions (Avigilon)",
    description: `Incoming`,
  },
] as const;
