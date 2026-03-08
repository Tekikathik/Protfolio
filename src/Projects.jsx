import React from "react";
import { motion } from "framer-motion";
import End from './End'

import p1 from "./assets/image.png";
import p2 from "./assets/Aicode.png";
import p3 from "./assets/cctv.png";
// import p3 from "./assets/ai-code-analyzer.png"; // Optional: add a specific image for AI Code Analyzer

const projects = [
  {
    title: "🧳 TripNest",
    description:
      "TripNest – Your Smart Travel Planner 🧳🌍 Plan and explore trips with ease. Discover destinations, build itineraries, filter places, and save favorites.",
    tech: ["HTML", "CSS", "JavaScript", "Google Maps", "Figma"],
    image: p1,
    github: "https://github.com/Tekikathik/TripNest",
  },
  {
    title: "🤖 AI Code Analyzer",
    description:
      "AI-Powered Code Analysis Tool 🚀📊 Instantly analyze code complexity (Big O notation), detect security vulnerabilities, and receive optimization recommendations using Google's Gemini AI with 60% faster reviews and 95% vulnerability detection rate.",
    tech: ["React", "Gemini API", "Tailwind CSS", "Vite", "JavaScript", "Render"],
    image: p2,
    github: "https://github.com/Tekikathik/AI-Code-Analyzer",
    live: "https://ai-code-analyzer-vix4.onrender.com",
  },
  {
    title: "👤 Face Attendance System",
    description:
      "AI-Powered Face Recognition Attendance System 📸✅ Automatically marks attendance using real-time face detection with CNN, eliminating proxy attendance and reducing manual work by 40%.",
    tech: ["Python", "CNN", "OpenCV", "Express.js", "TensorFlow", "Machine Learning"],
    image: p3, // You'll need to import an image for this
    github: "https://github.com/Tekikathik/AttendAI",
    // live: "https://your-live-demo.com", // Add if you have a live demo
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className="project-image"
              onClick={() => window.open(project.live || project.github, "_blank")}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
              />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <div className="project-links">
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="link-button live"
                    onClick={(e) => e.stopPropagation()}
                  >
                    🔗 Live Demo
                  </a>
                )}
              </div>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              
              
            </div>
          </motion.div>
        ))}
      </div>
      <End/>
    </section>
  );
};

export default Projects;