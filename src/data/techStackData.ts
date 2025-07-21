type TechStackSection = {
  title: string;
  description: string;
  icons: {
    iconName: TechIconName;
    alt: string;
    background: boolean;
  }[];
};

export const techStack: TechStackSection[] = [
  {
    title: "FRONTEND",
    description: "I mostly use ReactJS and Tailwind CSS — React for building interactive UIs, and Tailwind for fast, flexible styling without writing custom CSS.",
    icons: [
      { iconName: "JavaScript", alt: "javascript-icon", background: false },
      { iconName: "TypeScript", alt: "typecript-icon", background: false },
      { iconName: "HTML5", alt: "html5-icon", background: false },
      { iconName: "CSS3", alt: "css3-icon", background: false },
      { iconName: "React", alt: "react-icon", background: false },
      { iconName: "Tailwind", alt: "tailwind-icon", background: false },
    ],
  },
  {
    title: "BACKEND",
    description: "I mainly work with Node.js, Express, and SQL databases, but I also dabble in Python and MongoDB from time to time.",
    icons: [
      { iconName: "NodeJS", alt: "nodejs-icon", background: false },
      { iconName: "Express", alt: "express-icon", background: true },
      { iconName: "PostgreSQL", alt: "postgresql-icon", background: false },
      { iconName: "Prisma", alt: "prisma-icon", background: true },
    ],
  },
  {
    title: "SOFTWARE TOOLS",
    description:
      "Skilled in Git, NPM, Figma, Docker, and Postman, with experience deploying apps on AWS and Vercel.",
    icons: [
      { iconName: "Git", alt: "git-icon", background: false },
      { iconName: "NPM", alt: "npm-icon", background: false },
      { iconName: "Figma", alt: "figma-icon", background: false },
      { iconName: "Docker", alt: "docker-icon", background: false },
      { iconName: "Postman", alt: "postman-icon", background: false },
      { iconName: "AWS", alt: "aws-icon", background: true },
    ],
  },
];

export type TechIconName =
  | "HTML5"
  | "CSS3"
  | "JavaScript"
  | "React"
  | "Tailwind"
  | "NodeJS"
  | "Express"
  | "PostgreSQL"
  | "Prisma"
  | "Git"
  | "NPM"
  | "Figma"
  | "Docker"
  | "Postman"
  | "AWS"
  | "TypeScript";

export const techIcons: Record<TechIconName, string> = {
  HTML5: "/assets/icons/html-5.svg",
  CSS3: "/assets/icons/css-3.svg",
  JavaScript: "/assets/icons/javascript.svg",
  React: "/assets/icons/react.svg",
  Tailwind: "/assets/icons/tailwind.svg",
  NodeJS: "/assets/icons/nodejs.svg",
  Express: "/assets/icons/express.svg",
  PostgreSQL: "/assets/icons/postgresql.svg",
  Prisma: "/assets/icons/prisma.svg",
  Git: "/assets/icons/git.svg",
  NPM: "/assets/icons/npm.svg",
  Figma: "/assets/icons/figma.svg",
  Docker: "/assets/icons/docker.svg",
  Postman: "/assets/icons/postman.svg",
  AWS: "/assets/icons/aws.svg",
  TypeScript: "/assets/icons/typescript.svg"
};