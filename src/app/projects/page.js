"use client";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function Projects() {
  const { darkMode } = useDarkMode();
  const projects = [
    {
      name: "Student Management System",
      date: "Aug'22",
      description:
        "Academic administration system with secure role-based access control",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      features: [
        "CRUD operations for student records",
        "JWT authentication with role verification",
        "Attendance management with bulk update capability",
        "Input validation on all API endpoints",
        "Password encryption with bcrypt",
      ],
    },

    {
      name: "Payment Gateway Integration",
      date: "Jan'23",
      description: "Secure payment processing system",
      technologies: ["React", "Node.js", "PayU Money API"],
      features: [
        "Integrated PayU Money for seamless checkout and real-time transaction updates",
        "Subscription billing with auto-renewal support",
        "Fraud detection and transaction validation mechanisms",
      ],
    },
    {
      name: "Filmen - Movie Website",
      date: "22 Jul'24",
      description: "Full-stack movie discovery and recommendation platform",
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
    },
    {
      name: "Stay In School",
      date: "05 Mar'25",
      description:
        "student retention system for Lovely Professional University",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      features: [
        "Predictive analytics for dropout risk",
        "Counselor intervention workflow",
        "Automated parent notifications",
        "Scholarship eligibility tracking",
      ],
    },
    {
      name: "Portfolio Website",
      date: "July'25",
      description:
        "Modern developer portfolio with SSR optimization and dark mode",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      features: [
        "ISR for dynamic content updates",
        "Interactive project showcases",
        "Mobile-first responsive layout",
        "Dynamic resume/CV download (PDF generation)",
        "Analytics integration (Vercel)",
      ],
    },
    {
      name: "News Web Application",
      date: "Aug'22",
      description: "Real-time news aggregator with category filtering",
      technologies: ["React", "News API", "Firebase"],
      features: [
        "Multi-source news aggregation",
        "Customizable news feed by category/interests",
        "Real-time updates via WebSockets",
        "Trending news algorithm (engagement-based)",
      ],
    },
    {
      name: "Netflix Clone",
      date: "Oct`22",
      description: "Streaming service clone with payment gateway integration",
      technologies: ["React", "CSS"],
      features: [
        "Responsive design (mobile/tablet/desktop)",
        "Loading skeletons for smooth transitions",
        "Keyboard navigation support",
        "SEO optimization for discoverability",
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
