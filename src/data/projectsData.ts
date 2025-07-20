import { TechIconName } from "@/data/techStackData";

type ProjectsSection = {
  id: number,
  title: string,
  image: string,
  date: string,
  description: string;
  url: string,
  git: string,
  tech: {
    iconName: TechIconName;
    background: boolean;
  }[];
};

export const projectsData: ProjectsSection[] = [
  {
    id: 1,
    title: "Quickit",
    image: "/assets/images/quickit.png",
    date: "Jun 2025",
    description: "My first fullstack app project — still in development, but designed to be an all-in-one productivity tool for managing to-dos, notes, reminders and more in a clean, fast interface.",
    url: "https://quickit-eight.vercel.app/",
    git: "https://github.com/aerelish/quickit",
    tech: [
      { iconName: "React", background: false },
      { iconName: "NodeJS", background: false },
      { iconName: "Express", background: true },
      { iconName: "PostgreSQL", background: false },
      { iconName: "Tailwind", background: false },
    ],
  },
];