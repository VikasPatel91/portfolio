"use client";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  // SiJava,
  SiPython,
  SiExpress,
  SiNextdotjs,
  SiMysql,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
export default function About({ darkMode }) {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "Java", icon: <DiJava className="text-red-500" /> },
        { name: "Python", icon: <SiPython className="text-blue-500" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black dark:text-white" />,
        },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      ],
    },
  ];

  return (
    <section
      className={`py-12 px-4 md:px-8 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
              darkMode
                ? "from-blue-400 to-purple-400"
                : "from-blue-600 to-purple-600"
            }`}
          >
            About Me
          </h2>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Creative Full Stack Developer with a passion for building digital
            experiences
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Details Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className={`rounded-xl p-6 shadow-lg transition-all duration-300 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex items-center mb-6">
              <div
                className={`p-3 rounded-full mr-4 ${
                  darkMode ? "bg-purple-900" : "bg-purple-100"
                }`}
              >
                <FaCode
                  className={`text-2xl ${
                    darkMode ? "text-purple-300" : "text-purple-600"
                  }`}
                />
              </div>
              <h3
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Personal Details
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <span
                  className={`w-2 h-2 rounded-full mr-3 ${
                    darkMode ? "bg-purple-400" : "bg-purple-600"
                  }`}
                ></span>
                <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                  <strong
                    className={darkMode ? "text-purple-300" : "text-purple-600"}
                  >
                    Name:
                  </strong>{" "}
                  Vikas Patel
                </p>
              </div>
              <div className="flex items-center">
                <span
                  className={`w-2 h-2 rounded-full mr-3 ${
                    darkMode ? "bg-purple-400" : "bg-purple-600"
                  }`}
                ></span>
                <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                  <strong
                    className={darkMode ? "text-purple-300" : "text-purple-600"}
                  >
                    Age:
                  </strong>{" "}
                  24
                </p>
              </div>
              <div className="flex items-center">
                <span
                  className={`w-2 h-2 rounded-full mr-3 ${
                    darkMode ? "bg-purple-400" : "bg-purple-600"
                  }`}
                ></span>
                <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                  <strong
                    className={darkMode ? "text-purple-300" : "text-purple-600"}
                  >
                    Location:
                  </strong>{" "}
                  Indore, India
                </p>
              </div>
               <div className="flex items-center">
                <span
                  className={`w-2 h-2 rounded-full mr-3 ${
                    darkMode ? "bg-purple-400" : "bg-purple-600"
                  }`}
                ></span>
                <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                  <strong
                    className={darkMode ? "text-purple-300" : "text-purple-600"}
                  >
                    Education:
                  </strong>{" "}
                  MCA
                </p>
              </div>
              <div className="flex items-center">
                <span
                  className={`w-2 h-2 rounded-full mr-3 ${
                    darkMode ? "bg-purple-400" : "bg-purple-600"
                  }`}
                ></span>
                <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                  <strong
                    className={darkMode ? "text-purple-300" : "text-purple-600"}
                  >
                    Phone:
                  </strong>{" "}
                  9111182916
                </p>
              </div>
              <div className="flex items-center">
                <span
                  className={`w-2 h-2 rounded-full mr-3 ${
                    darkMode ? "bg-purple-400" : "bg-purple-600"
                  }`}
                ></span>
                <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                  <strong
                    className={darkMode ? "text-purple-300" : "text-purple-600"}
                  >
                    Email:
                  </strong>{" "}
                  vikaspatel82916@gmail.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className={`rounded-xl p-6 shadow-lg transition-all duration-300 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex items-center mb-6">
              <div
                className={`p-3 rounded-full mr-4 ${
                  darkMode ? "bg-blue-900" : "bg-blue-100"
                }`}
              >
                <FaTools
                  className={`text-2xl ${
                    darkMode ? "text-blue-300" : "text-blue-600"
                  }`}
                />
              </div>
              <h3
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Technical Skills
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <div key={index} className="mb-4">
                  <h4
                    className={`font-semibold mb-2 flex items-center ${
                      darkMode ? "text-blue-300" : "text-blue-600"
                    }`}
                  >
                    {skillGroup.category === "Frontend" && (
                      <FaCode className="mr-2" />
                    )}
                    {skillGroup.category === "Backend" && (
                      <FaServer className="mr-2" />
                    )}
                    {skillGroup.category === "Databases" && (
                      <FaDatabase className="mr-2" />
                    )}
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        {skill.icon}
                        <span
                          className={`ml-2 ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {skill.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* About Me Card (full width) */}
          <motion.div
            whileHover={{ y: -5 }}
            className={`rounded-xl p-6 shadow-lg transition-all duration-300 lg:col-span-2 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex items-center mb-6">
              <div
                className={`p-3 rounded-full mr-4 ${
                  darkMode ? "bg-green-900" : "bg-green-100"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    className={darkMode ? "text-green-300" : "text-green-600"}
                  />
                </svg>
              </div>
              <h3
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                My Journey
              </h3>
            </div>

            <div
              className={`space-y-4 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <p>
                I am a versatile web developer at the beginning of my
                professional journey, equipped with a strong skill set in both
                frontend and backend development. My passion for technology
                drives me to create efficient, scalable, and user-friendly
                applications.
              </p>

              <div className="flex items-start mt-4">
                <span
                  className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-3 ${
                    darkMode ? "bg-green-400" : "bg-green-600"
                  }`}
                ></span>
                <p>
                  On the{" "}
                  <strong
                    className={darkMode ? "text-green-300" : "text-green-600"}
                  >
                    frontend
                  </strong>
                  , I specialize in modern JavaScript frameworks like React and
                  Next.js, creating responsive and interactive user interfaces
                  that deliver exceptional user experiences.
                </p>
              </div>

              <div className="flex items-start">
                <span
                  className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-3 ${
                    darkMode ? "bg-green-400" : "bg-green-600"
                  }`}
                ></span>
                <p>
                  For the{" "}
                  <strong
                    className={darkMode ? "text-green-300" : "text-green-600"}
                  >
                    backend
                  </strong>
                  , I work with Node.js and Express.js to build robust APIs and
                  server-side logic. I also have experience with Java and Spring
                  Boot for enterprise-level applications.
                </p>
              </div>

              <div className="flex items-start">
                <span
                  className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-3 ${
                    darkMode ? "bg-green-400" : "bg-green-600"
                  }`}
                ></span>
                <p>
                  My{" "}
                  <strong
                    className={darkMode ? "text-green-300" : "text-green-600"}
                  >
                    database
                  </strong>{" "}
                  expertise includes both SQL (MySQL) and NoSQL (MongoDB)
                  solutions, ensuring optimal data storage and retrieval for any
                  application needs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
