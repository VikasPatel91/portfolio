"use client";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function ExperienceCards() {
  const { darkMode } = useDarkMode();

  const experienceData = [
    {
      role: "Full Stack Developer",
      company: "Lovely Professional University",
      location: "Jalandhar, Punjab",
      duration: "Jan'25 - Jun'25",
      responsibilities: [
        "Developed a capstone project, **Stay in School**, aimed at reducing rising student dropout rates by analyzing key factors and implementing intervention strategies.",
        "Designed and implemented full-stack features (frontend + backend) to track student engagement, academic performance, and attendance trends.",
        "Collaborated with university stakeholders to align the project with institutional goals and ensure actionable insights for retention efforts.",
        "Integrated data visualization tools to help educators identify at-risk students early and take preventive measures.",
      ],
      logo: "/lpulogo.png",
    },
    {
      role: "Python Trainee",
      company: "CipherSchools",
      location: "Remote",
      duration: "Jun'24 - Jul'24",
      responsibilities: [
        "Completed an intensive Python programming course covering fundamentals, data structures (lists, dictionaries), and algorithms.",
        "Developed practical projects including a CLI weather app (using APIs) and a calculator to reinforce OOP concepts.",
        "Learned to handle file I/O, error handling, and modular programming in Python.",
        "Gained experience in using Python libraries like NumPy and Pandas for data manipulation.",
      ],
      logo: "/cipherschools.png",
    },
    {
      role: "Front-end Developer",
      company: "FLOWRAT TECHNOLOGIES",
      location: "Remote",
      duration: "Sep'22 - Oct'22",
      responsibilities: [
        "Developed responsive user interfaces using React.js and modern CSS frameworks",
        "Implemented state management using Redux for complex application workflows",
        "Created reusable UI components library to maintain design consistency",
        "Optimized frontend performance through code splitting and lazy loading",
        "Integrated RESTful APIs with Axios for dynamic data rendering",
        "Implemented user authentication flows using JWT tokens",
        "Collaborated with UX designers to implement pixel-perfect interfaces",
        "Wrote unit tests using Jest and React Testing Library",
        "Participated in code reviews and followed Git best practices",
        "Implemented responsive designs with mobile-first approach using Flexbox/Grid",
      ],
      logo: "/flow.png",
    },
    {
      role: "MERN Stack Developer Training",
      company: "Universal Infotech",
      location: "Indore, MP",
      duration: "Jun'22 - Aug'22",
      responsibilities: [
        "Mastered full-stack development using MongoDB, Express.js, React.js, and Node.js",
        "Developed 3 full-stack applications including an e-commerce platform and task management system",
        "Designed and implemented RESTful APIs with Express.js and Node.js",
        "Built interactive front-end interfaces with React.js using hooks and context API",
        "Implemented JWT authentication and role-based authorization systems",
        "Optimized MongoDB queries and database schemas for performance",
        "Created reusable React component libraries with styled-components",
        "Integrated third-party APIs including payment gateways and Google Maps",
        "Deployed applications using Heroku, Netlify, and MongoDB Atlas",
        "Practiced Agile methodologies with daily standups and sprint planning",
        "Learned error handling and logging best practices",
        "Implemented form validation and error handling on both client and server sides",
      ],
      logo: "/uni.jpg",
    },
  ];

  return (
    <div className={`p-8 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <h2
        className={`text-3xl font-bold mb-8 text-center ${
          darkMode ? "text-amber-400" : "text-blue-600"
        }`}
      >
        Experience
      </h2>

      <div className="space-y-8 max-w-4xl mx-auto">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex items-start mb-4">
              <div className="relative w-16 h-16 mr-4">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3
                  className={`text-xl font-bold ${
                    darkMode ? "text-amber-300" : "text-blue-700"
                  }`}
                >
                  {exp.role}
                </h3>
                <p
                  className={`font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {exp.company} • {exp.location}
                </p>
                <p
                  className={`text-sm ${
                    darkMode ? "text-amber-400" : "text-blue-600"
                  } font-semibold mt-1`}
                >
                  {exp.duration}
                </p>
              </div>
            </div>

            <div
              className={`h-1 w-12 mb-4 rounded-full ${
                darkMode ? "bg-amber-500" : "bg-blue-500"
              }`}
            ></div>

            <ul className="space-y-2">
              {exp.responsibilities.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <span className="mr-2 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
