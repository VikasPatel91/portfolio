"use client";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function Projects() {
  const { darkMode } = useDarkMode();
  const projects = [
    {
      name: "AI Resume Screener",
      date: "July 2025",
      description:
        "An intelligent resume screening backend application that analyzes candidate resumes against job descriptions.",
      technologies: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "OpenRouter LLM",
        "Render",
        "Multer",
      ],
      features: [
        "Resume parsing using PDF parser and text extraction",
        "LLM integration for semantic comparison of resumes with job descriptions",
        "Generates relevance scores based on skills, experience, and education",
        "RESTful API for uploading resumes and job descriptions",
        "Hosted and deployed on Render with scalable architecture",
        "Supports JSON response with detailed match analysis",
      ],
      links: [
        {
          name: "Live Demo",
          url: "https://ai-resume-screener-hy51.onrender.com",
        },
        {
          name: "GitHub",
          url: "https://github.com/VikasPatel91/AI-Resume-Screener",
        },
      ],
    },
    {
      name: "Portfolio Website",
      date: "July'25",
      description:
        "Modern developer portfolio with SSR optimization and dark mode.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      features: [
        "ISR for dynamic content updates",
        "Interactive project showcases",
        "Mobile-first responsive layout",
        "Dynamic resume/CV download (PDF generation)",
        "Analytics integration (Vercel)",
      ],
      links: [
        {
          name: "Live Demo",
          url: "https://portfolio-flame-seven-70.vercel.app/",
        },
        {
          name: "GitHub",
          url: "https://github.com/VikasPatel91/portfolio",
        },
      ],
    },
    {
      name: "Stay In School",
      date: "May'25",
      description:
        "Student retention system for Lovely Professional University.",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      features: [
        "Predictive analytics for dropout risk",
        "Counselor intervention workflow",
        "Automated parent notifications",
        "Scholarship eligibility tracking",
      ],
      links: [
        {
          name: "Live Demo",
          url: "https://stayinschoolnew.vercel.app/",
        },
        {
          name: "GitHub",
          url: "https://github.com/VikasPatel91/stayinschool",
        },
      ],
    },
    {
      name: "To-Do List Application",
      date: "April 2025",
      description:
        "A simple and intuitive to-do list web application built using the MERN stack.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Mongoose",
      ],
      features: [
        "Add, edit, delete, and mark tasks as complete/incomplete",
        "Filter tasks by status (All, Completed, Pending)",
        "Responsive UI optimized for both desktop and mobile",
        "Real-time updates without page reload using React state management",
        "Persistent task storage using MongoDB and Mongoose",
      ],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/VikasPatel91/todo-client",
        },
      ],
    },
    {
      name: "Filmen - Movie Website",
      date: "September'24",
      description: "Full-stack movie discovery and recommendation platform.",
      technologies: [
        "React",
        "Redux",
        "Bootstrap",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      features: [
        "Content-based filtering using movie metadata",
        "Collaborative filtering based on user ratings",
        "Hybrid recommendation algorithm combining both approaches",
        "Personalized recommendations engine",
        "User rating system with sentiment analysis",
        "Watchlist synchronization across devices",
      ],
      links: [
        {
          name: "Live Demo",
          url: "https://filmen3.vercel.app/",
        },
        {
          name: "GitHub",
          url: "https://github.com/VikasPatel91/filmen",
        },
      ],
    },

    {
      name: "Real Estate Listing Platform",
      date: "March 2024",
      description:
        "A full-stack real estate web application built using the MERN stack that allows users to browse.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Mongoose",
        "JWT",
      ],
      features: [
        "User authentication and role-based access (buyer, seller)",
        "Create, update, and delete property listings",
        "Image upload and hosting via Cloudinary",
        "Search and filter properties by location, price, and type",
        "Responsive design for mobile and desktop",
        "Admin panel for managing all listings and users",
      ],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/VikasPatel91/Real-State-Application",
        },
      ],
    },
    {
      name: "Restaurant Management System",
      date: "October 2023",
      description:
        "A comprehensive web-based restaurant management system designed to handle menu management.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Mongoose",
        "JWT",
      ],
      features: [
        "Admin dashboard to manage menu items, orders, and reservations",
        "User authentication and role management (admin, staff, customer)",
        "Online menu viewing and order placement",
        "Table booking and reservation scheduling system",
        "Real-time order status tracking using WebSockets",
        "Responsive UI for tablets and mobile devices used by staff",
      ],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/VikasPatel91/restaurants-mgt",
        },
      ],
    },
    {
      name: "Payment Gateway Integration",
      date: "January'23",
      description: "Secure payment processing system.",
      technologies: ["React", "Node.js", "PayU Money API"],
      features: [
        "Integrated PayU Money for seamless checkout and real-time transaction updates",
        "Subscription billing with auto-renewal support",
        "Fraud detection and transaction validation mechanisms",
      ],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/VikasPatel91/Payment-gateway-Integration",
        },
      ],
    },

    {
      name: "Netflix Clone",
      date: "October`22",
      description: "Streaming service clone with payment gateway integration.",
      technologies: ["React", "CSS"],
      features: [
        "Responsive design (mobile/tablet/desktop)",
        "Loading skeletons for smooth transitions",
        "Keyboard navigation support",
        "SEO optimization for discoverability",
      ],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/VikasPatel91/netflixclone",
        },
      ],
    },
    {
      name: "Student Management System",
      date: "August'22",
      description:
        "Academic administration system with secure role-based access control.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      features: [
        "CRUD operations for student records",
        "JWT authentication with role verification",
        "Attendance management with bulk update capability",
        "Input validation on all API endpoints",
        "Password encryption with bcrypt",
      ],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/VikasPatel91/student-web-app",
        },
      ],
    },
    {
      name: "News Web Application",
      date: "July'22",
      description: "Real-time news aggregator with category filtering.",
      technologies: ["React", "News API", "Firebase"],
      features: [
        "Multi-source news aggregation",
        "Customizable news feed by category/interests",
        "Real-time updates via WebSockets",
        "Trending news algorithm (engagement-based)",
      ],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/VikasPatel91/News-web-app",
        },
      ],
    },
  ];

  return (
    <div
      className={`p-8 min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <h2
        className={`text-2xl font-semibold ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Projects
      </h2>

      <ul className="mt-4 space-y-4">
        {projects.map((project, i) => (
          <li
            key={i}
            className={`border p-4 rounded-lg shadow-sm hover:shadow-md transition-all
                      ${
                        darkMode
                          ? "border-gray-700 bg-gray-800 hover:shadow-gray-700"
                          : "border-gray-200 bg-white hover:shadow-gray-200"
                      }`}
          >
            <div className="flex justify-between items-start">
              <h3
                className={`text-xl font-bold ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {project.name}
              </h3>
              {project.date && (
                <span
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {project.date}
                </span>
              )}
            </div>

            <p
              className={`mt-1 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              {project.description}
            </p>

            {project.links && project.links.length > 0 && (
              <div className="mt-2">
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                        darkMode
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-blue-500 hover:bg-blue-600 text-white"
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-3">
              <h4
                className={`font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Technologies:
              </h4>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.technologies.map((tech, j) => (
                  <span
                    key={j}
                    className={`px-2 py-1 rounded text-sm ${
                      darkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.features && (
              <div className="mt-3">
                <h4
                  className={`font-medium ${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Key Features:
                </h4>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  {project.features.map((feature, k) => (
                    <li
                      key={k}
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-700"
                      }`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.scale && (
              <p
                className={`mt-2 text-sm ${
                  darkMode ? "text-green-400" : "text-green-600"
                }`}
              >
                <span className="font-medium">Scale:</span> {project.scale}
              </p>
            )}

            {project.impact && (
              <p
                className={`mt-2 text-sm ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                <span className="font-medium">Impact:</span> {project.impact}
              </p>
            )}

            {project.performance && (
              <p
                className={`mt-2 text-sm ${
                  darkMode ? "text-purple-400" : "text-purple-600"
                }`}
              >
                <span className="font-medium">Performance:</span>{" "}
                {project.performance}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
