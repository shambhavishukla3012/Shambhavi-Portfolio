import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const experiencesData = [
  {
    title: "Bachelor of Science in Computer Science",
    location: "University of Mumbai",
    description: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Management",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2020",
  },
  {
    title: "Software Engineer",
    location: "CNC Web Technologies Pvt Ltd",
    description: "Developed e-commerce applications and web platforms.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2020 - Aug 2021",
  },
  {
    title: "Software Engineer",
    location: "Tech Mahindra",
    description: "Developed and maintained enterprise software applications.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2021 - Jul 2022",
  },
  {
    title: "Master of Science, Computer Science",
    location: "Indiana University",
    description: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Management",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Graduate Associate Instructor",
    location: "Indiana University Bloomington",
    description: "Instructed students in software engineering principles.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2023 - May 2024",
  },
  {
    title: "Senior Software Consultant",
    location: "Hoosier Community Network",
    description: "Led development of innovative software solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Netflix Database Application",
    description: "Engineered data-driven app to explore 10,000+ Netflix entries, incorporating data cleaning and leveraging PostgreSQL.",
    tags: ["PostgreSQL", "HTML5", "CSS3", "Bootstrap", "Flask", "Git"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Wellness Tracking System",
    description: "Developed a wellness app with personalized plans integrating search functionality, Google Auth 2FA, and chat feature.",
    tags: ["PostgreSQL", "HTML5", "CSS3", "Bootstrap", "Django", "Git", "Docker", "JIRA"],
    imageUrl: rmtdevImg,
  },
  {
    title: "H&M Fashion Recommendation",
    description: "Conducted EDA on 31M records, uncovering key product trends, and optimizing product recommendations.",
    tags: ["Python", "Data Mining", "Data Visualization", "Data Analysis"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "C", "C++", "Python", "JavaScript", "Java", "Bash", "SQL", "PL/SQL",
  "HTML5", "CSS3", "Bootstrap", "ReactJS",
  "NodeJS", "ExpressJS", "Django", "Flask", "Spring Boot",
  "Oracle 19c", "PostgreSQL", "MySQL", "MongoDB",
  "Informatica PowerCenter", "SAS Visual Analytics", "Power BI",
  "Docker", "AWS", "Git", "JIRA", "Postman"
] as const;
