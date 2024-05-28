import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string;
}
