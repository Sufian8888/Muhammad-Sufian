import { FiHome, FiLayers, FiBriefcase, FiMail, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

export const SITE_CONFIG = {
  name: "Muhammad Sufian",
  title: "Software Engineer",
  description: "Full Stack Developer specializing in modern web technologies",
  social: {
    github: "https://github.com/Sufian8888",
    linkedin: "https://linkedin.com/in/muhammad-sufian-9309b8296/",
    instagram: "https://www.instagram.com/sufian8888/",
  },
  email: "msufianasad@gmail.com",
};

export const NAVIGATION = {
  main: [
    { href: "/", label: "Home", icon: FiHome },
    { href: "/#tech-stack", label: "Tech Stack", icon: FiLayers },
    { href: "/#projects", label: "Projects", icon: FiBriefcase },
    { href: "/contact", label: "Contact", icon: FiMail },
  ],
  social: [
    { href: SITE_CONFIG.social.github, label: "GitHub", icon: FiGithub },
    { href: SITE_CONFIG.social.linkedin, label: "LinkedIn", icon: FiLinkedin },
    { href: SITE_CONFIG.social.instagram, label: "Instagram", icon: FiInstagram },
  ],
};

export const TECHNOLOGIES = [
  {
    name: "Html",
    category: "Front End",
    icon: "/html.webp",
  },
  {
    name: "Css",
    category: "Front End",
    icon: "/css.webp",
  },
  {
    name: "Javascript",
    category: "Language",
    icon: "/js.webp",
  },
  {
    name: "Next JS",
    category: "Frontend Framework",
    icon: "/nextjs.png",
  },
  {
    name: "React JS",
    category: "Frontend Library",
    icon: "/react.webp",
  },
  {
    name: "Tailwind CSS",
    category: "CSS Framework",
    icon: "/tailwind.webp",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "/mongodb.webp",
  },
  {
    name: "Node JS",
    category: "Backend Development",
    icon: "/nodejs.webp",
  },
];

export const PROJECTS = [
  {
    id: "amazon-clone",
    title: "Amazon Clone",
    category: "E-commerce",
    image: "/images/Amazon-Ecommerce.jpg",
    github: "https://github.com/Sufian8888/Amazon-Clone",
  },
  {
    id: "password-generator",
    title: "Password Generator",
    category: "Utility",
    image: "/images/Password.png",
    github: "https://github.com/Sufian8888/PasswordGenerator",
  },
  {
    id: "weather-app",
    title: "Weather App",
    category: "Weather",
    image: "/images/Weather App.jpg",
    github: "https://github.com/Sufian8888/WeatherApp",
  },
  {
    id: "todo-list",
    title: "Todo List",
    category: "Productivity",
    image: "/images/TO DO .png",
    github: "https://github.com/Sufian8888/Todolist",
  },
  {
    id: "blog-website",
    title: "General Blogging Website",
    category: "Business",
    image: "/images/project-placeholder.svg",
  },
  {
    id: "clothing-website",
    title: "Clothing Website",
    category: "E-commerce",
    image: "/images/Clothing.jpg",
    github: "https://github.com/JokKing17/NextJsEcommerceProject",
  },
];

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  slideIn: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
  scale: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 },
  },
};
