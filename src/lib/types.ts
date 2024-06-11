import { IconType } from "react-icons/lib";
import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  feature: string;
  lessons: string;
  image: string;
  tag: string;
  tools: string[];
  github: string;
  demo: string;
}
