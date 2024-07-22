import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { SiPowerbi } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { GrGithub } from "react-icons/gr";


import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project5.jpeg";
import image3 from "../assets/project3.jpeg";
import image4 from "../assets/project4.jpeg";
import image6 from "../assets/project6.jpeg";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Award", href: "#award" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Anurag Rajeevan",
  info: "Full-stack developer with a flair for IIOT 4.O Automation.",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "Hello! I'm Anurag Rajeevan, a full-stack developer with a flair for React and python django. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
};

export const PROJECTS = [
  {
    title: "Personal Portfolio",
    subtitle:
      "A mordern developer portfolio  built with React and Framer Motion.",
    image: image1,
  },
  {
    title: "Barcode Reader Service",
    subtitle:
      "A service for fetching data from industrial scanners to do traceability , with 0% Data Loss.",
    image: image2,
  },
  {
    title: "CMMS Software",
    subtitle: "A project for monitoring industry machines and paramters , provided for HONDA",
    image: image3,
  },
  {
    title: "Data Tracker PowerBI",
    subtitle:
      "A dashboard for tracking historical data loss and trend.",
    image: image4,
  },
  {
    title: "Diagnostic Module",
    subtitle:
      "A full stack django application for diagnostics of system and network",
    image: image6,
  },

];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <FaPython className="text-4xl lg:text-6xl text-yellow-300" />,
    name: "Python",
    experience: "2+ year",
  },
  {
    icon: <SiDjango className="text-4xl lg:text-6xl text-white-100 " />,
    name: "Django Framework",
    experience: "2+ years",
  },
  {
    icon: <SiJavascript className="text-4xl lg:text-6xl text-yellow-300 " />,
    name: "JavaScript",
    experience: "2+ years",
  },
  {
    icon: <DiJqueryLogo className="text-4xl lg:text-6xl text-blue-300" />,
    name: "JQuery ",
    experience: "2+ years",
  },
  {
    icon: <SiPowerbi className="text-4xl lg:text-6xl text-yellow-300" />,
    name: "Power Bi ",
    experience: "2+ years",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "2+ years",
  },
  {
    icon: <SiMicrosoftsqlserver className="text-4xl lg:text-6xl text-blue-400 " />,
    name: "SQL Server",
    experience: "1.5+ years",
  },
  {
    icon: <GrGithub className="text-4xl lg:text-6xl text-white-400 " />,
    name: "Git Hub",
    experience: "2+ years",
  },



];

export const ACHIEVEMENT = {
  title: "Product development - Indxo.ai",
  award: "Best Performer of the year - 2024",
  description:
    "Awarded Best Performer of the Year 2024 for exceptional contributions to product development at Indxo.ai. This accolade highlights a commitment to innovation, teamwork, and excellence in developing cutting-edge solutions. The achievement reflects outstanding dedication to advancing the company's technological capabilities and delivering high-impact results.",
};


export const TESTIMONIALS = [
  {
    name: "Kumaran Gurumurthy",
    title: "Software Architect Freelancer",
    quote:
      "Working with Anurag has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
    image: user1,
  },
  {
    name: "Kalyan Ram",
    title: "CEO,Indxo.ai Pvt Ltd",
    quote:
      "Anurag consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
    image: user2,
  },
  {
    name: "Vimala G",
    title: "Senior Engineer, HoneyBee Technologies",
    quote:
      "Anurag's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
    image: user3,
  },
  {
    name: "Ganesh RC",
    title: "CEO, Skytechno Solutions",
    quote:
      "Anurag's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
    image: user4,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/anurag9847/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
