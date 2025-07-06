"use client";
import { useDarkMode } from "../contexts/DarkModeContext";
import Image from "next/image";

export default function EducationCards() {
  const { darkMode } = useDarkMode();

  const educationData = [
    {
      institution: "Lovely Professional University",
      duration: "2023-Present",
      metric: "CGPA 7.1",
      location: "Punjab, India",
      description: "Master's degree in Computer Science",
      logo: "/education/lpu.jpg", // Replace with actual path
    },
    {
      institution: "Industrial Training Institute",
      duration: "2022-2022",
      metric: "Percentage 90%",
      location: "Indore, MP",
      description: "MERN Stack Development",
      logo: "/education/universal.jpg", // Replace with actual path
    },
    {
      institution: "Maharaja Ranjit Singh College",
      duration: "2020-2023",
      metric: "Percentage 68%",
      location: "Indore, MP",
      description: "Bachelor's degree in Management",
      logo: "/education/maharaja.jpg", // Replace with actual path
    },
    {
      institution: "Shrikanwartara Public School",
      duration: "2019-2020",
      metric: "Percentage 74%",
      location: "Mandleshwar, MP",
      description: "Higher Secondary Education",
      logo: "/education/shrikanwartara.webp", // Replace with actual path
    },
    {
      institution: "Shrikanwartara Public School",
      duration: "2017-2018",
      metric: "Percentage 61%",
      location: "Mandleshwar, MP",
      description: "Secondary Education",
      logo: "/education/shrikanwartara.webp", // Replace with actual path
    },
  ];

  return (
    <div className={`p-8 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <h2
        className={`text-3xl font-bold mb-8 text-center ${
          darkMode ? "text-amber-400" : "text-blue-600"
        }`}
      >
        Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex items-center mb-4">
              <div className="relative w-16 h-16 mr-4">
                <Image
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3
                className={`text-xl font-bold ${
                  darkMode ? "text-amber-300" : "text-blue-700"
                }`}
              >
                {edu.institution}
              </h3>
            </div>

            <div
              className={`h-1 w-12 mb-4 rounded-full ${
                darkMode ? "bg-amber-500" : "bg-blue-500"
              }`}
            ></div>

            <p
              className={`mb-1 font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {edu.description}
            </p>

            <div
              className={`mt-4 pt-4 border-t ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <p
                className={`flex items-center gap-2 mb-2 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {edu.duration}
              </p>

              <p
                className={`flex items-center gap-2 mb-2 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {edu.location}
              </p>

              <p
                className={`flex items-center gap-2 font-semibold ${
                  darkMode ? "text-amber-400" : "text-blue-600"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {edu.metric}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
