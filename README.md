React Portfolio with Vite & Java Backend

A modern, responsive personal portfolio website built with React and Vite for the frontend, connected to a Java-based backend API to dynamically fetch and display projects. This setup showcases my full-stack development skills, with the frontend handling UI/UX and the backend managing project data persistence and retrieval.
The portfolio highlights key projects with descriptions, tech stacks, live demos, and GitHub links, pulled in real-time from the backend for easy updates without redeploying the frontend.
Features

Dynamic Project Display: Projects are fetched from a Java backend API, allowing seamless updates to your portfolio without frontend changes.
Responsive Design: Fully mobile-friendly using Tailwind CSS (or your preferred styling solution) for a polished look across devices.
Fast Development & Builds: Powered by Vite for lightning-fast hot module replacement (HMR) and optimized production bundles.
Interactive Elements: Smooth animations, project filtering, and contact forms integrated with the backend for submissions.
SEO Optimized: Meta tags and structured data for better search engine visibility.
Easy Customization: Modular components for quick personalization of sections like About, Skills, and Contact.

Tech Stack
Frontend

React: Core library for building reusable UI components.
Vite: Build tool for rapid development and production-ready bundles.
React Router: For seamless navigation between sections (e.g., Home, Projects, About).
Axios (or Fetch API): For making HTTP requests to the backend.
Tailwind CSS (or styled-components/Bootstrap): For styling and responsive layouts.
React Icons or similar: For icons and visual enhancements.

Backend

Java with Spring Boot: RESTful API for handling project data (CRUD operations).
Spring Data JPA: For database interactions (e.g., with H2/PostgreSQL for storing project details).
Maven/Gradle: Dependency management and build automation.
JSON Handling: For serializing project data (title, description, tech stack, links, images).

Database

H2 Database (development) / PostgreSQL/MySQL (production): To store project information like:

Title
Description
Tech Stack (array of strings)
GitHub Repo URL
Live Demo URL
Featured Image URL
Date Completed



Deployment

Frontend: Vercel/Netlify for static hosting.
Backend: Heroku/Railway or AWS for API hosting.
Database: Supabase or AWS RDS for production data.

Prerequisites

Node.js (v18+): For the frontend.
Java JDK (v17+): For the backend.
npm or yarn: Package manager for frontend dependencies.
Maven or Gradle: For backend builds (if not using Spring Initializr).
Git: For cloning the repo.

Ensure you have a backend API running (e.g., on http://localhost:8080) before starting the frontend.

Contact

Author: Manuel Porter
Email: jomporty@gmail.com
LinkedIn: linkedin.com/in/jmanrp/
GitHub: github.com/ManuelPorter

Built with ❤️ for showcasing full-stack skills. Star the repo if it helps! ⭐
