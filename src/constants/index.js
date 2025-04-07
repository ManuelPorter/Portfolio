import project1 from "../assets/projects/1-todo-app.jpg";
import project2 from "../assets/projects/2-weather-dashboard.png";
import project3 from "../assets/projects/3-ecomerce-product-page.webp";
import project4 from "../assets/projects/4-blogging-platform.png";
import project5 from "../assets/projects/5-finance tracker-app.webp";

export const HERO_CONTENT = `I'm a passionate and dedicated software developer with a focus on creating dynamic and user-friendly web applications. My expertise lies in React, a powerful JavaScript library for building complex UI interfaces. I'm excited about leveraging my skills to build innovative solutions and contribute to cutting-edge projects.`;

export const ABOUT_TEXT = `I'm a tech enthusiast with a keen interest in crafting exceptional digital experiences. My journey as a React developer has ignited a passion for building responsive and interactive web applications. I'm always eager to learn and grow, and I'm excited to collaborate with talented teams to bring creative ideas to life`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "React developer",
    company: "TCS",
    description: `Specializing in TypeScript, focusing on building dynamic, user-friendly, and scalable web applications. Combined React’s component-driven architecture with TypeScript’s static typing to deliver robust, maintainable code. Collaborated with cross-functional teams to create visually appealing and highly functional user interfaces that adhered to design and performance requirements.`,
    technologies: ["Javascript", "React.js", "Next.js", "NestJS", "TypeScript", "PostgreSQL"],
  },
  {
    year: "2022 - 2023",
    role: "QA Automation tester",
    company: "TCS",
    description: `Specialized in automating the testing of Java applications using JUnit. Designed and implemented test cases to validate application functionality, integration points, and edge cases. Contributed to the software development lifecycle by ensuring robust and efficient testing processes, leveraging automation frameworks for faster and more reliable test execution.`,
    technologies: ["Java", "Spring", "JUnit", "DB2"],
  },
  {
    year: "2021 - 2022",
    role: "Test technician",
    company: "Jabil Guadalajara",
    description: `Unit test specializing in GoogleTest (GTest). Was responsible for ensuring the reliability and correctness of C++ codebases by writing, maintaining, and executing automated unit tests. Collaborated with developers to verify that individual components and modules adhered to functional requirements and worked as intended under various scenarios.`,
    technologies: ["C++", "MATLAB", "GTest", "Oracle Database"],
  },
];

export const PROJECTS = [
  {
    title: "TODO App",
    image: project1,
    description:
      "User-friendly application that helps users manage their tasks and stay organized by creating, tracking, and prioritizing tasks.",
    technologies: ["TypeScript", "NodeJS", "React", "ExpressJS", "PostgreSQL", "Tailwind"],
  },
  {
    title: "Weather dashboard App",
    image: project2,
    description:
      "An application designed to provide users with real-time weather information for various locations, offering both current conditions and forecasts.",
    technologies: ["TypeScript", "React", "Chart.js", "NodeJS", "Tailwind", "Weather API from https://www.weatherapi.com"],
  },
  {
    title: "E-Commerce product page",
    image: project3,
    description:
      "a key component of an online store, showcasing individual products with detailed information to encourage customer engagement and purchases.",
    technologies: ["TypeScript", "React", "NodeJS", "ExpressJS", "PostgreSQL", "Stripe API"],
  },
  {
    title: "Blogging platform",
    image: project4,
    description:
      "A web application where users can create, publish, and manage blog posts, fostering content sharing and community interaction.",
    technologies: ["TypeScript", "React", "NodeJS", "ExpressJS", "PostgreSQL", "OAuth", "Cloudinary API"],
  },
  {
    title: "Finance tracker app",
    image: project5,
    description:
      "A tool that helps users manage their personal finances by tracking income, expenses, and savings, enabling better budgeting and financial planning.",
    technologies: ["TypeScript", "React", "NodeJS", "ExpressJS", "PostgreSQL", "OAuth"],
  },
];

export const CONTACT = {
  address: "Guadalajara, Jalisco, MX",
  phoneNo: "+52 744 115 9615",
  email: "manuelporterll@gmail.com",
};
