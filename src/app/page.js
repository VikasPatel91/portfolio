// app/page.js
"use client";
import Image from "next/image";
import About from "./components/About";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import { useDarkMode } from "./contexts/DarkModeContext";

export default function Home() {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-blue-50 to-purple-50"
      }`}
    >
      {/* Animated background elements */}
      <div
        className={`fixed inset-0 overflow-hidden ${
          darkMode ? "opacity-10" : "opacity-20"
        }`}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              darkMode ? "bg-purple-500" : "bg-blue-300"
            }`}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <main className="relative z-10 px-4 py-12 md:py-20 flex flex-col items-center text-center max-w-6xl mx-auto">
        {/* Profile Image with Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8 group"
        >
          <Image
            src="/myPhoto.png"
            alt="Vikas Patel"
            width={200}
            height={200}
            className={`rounded-full border-4 shadow-xl group-hover:shadow-2xl transition-all duration-300 ${
              darkMode ? "border-gray-700" : "border-white"
            }`}
          />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 group-hover:rotate-180 transition-transform duration-1000" />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1
            className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
              darkMode
                ? "from-blue-400 to-purple-400"
                : "from-blue-600 to-purple-600"
            }`}
          >
            Hi, I&apos;m Vikas Patel <span className="wave">👋</span>
          </h1>
          <p
            className={`mt-4 text-xl md:text-2xl font-medium ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            MERN Stack Developer
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={`mt-8 max-w-2xl text-lg md:text-xl space-y-4 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <p>
            I&apos;m from{" "}
            <span
              className={`font-bold ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Indore
            </span>
            , one of the oldest and most culturally rich cities in India.
          </p>
          <p>
            Currently pursuing my{" "}
            <span
              className={`font-bold ${
                darkMode ? "text-purple-400" : "text-purple-600"
              }`}
            >
              Master of Computer Applications (MCA)
            </span>{" "}
            at{" "}
            <span
              className={`font-bold ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Lovely Professional University
            </span>
            .
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="/Vikas_Patel_CV.pdf"
            download
            className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <FaDownload className="mr-2" />
            Download CV
          </a>
          <a
            href="/contact"
            className={`px-6 py-3 border-2 rounded-full hover:bg-blue-50 transition-all duration-300 ${
              darkMode
                ? "border-blue-400 text-blue-400 hover:bg-gray-700"
                : "border-blue-600 text-blue-600"
            }`}
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 flex space-x-6"
        >
          <a
            href="https://github.com/VikasPatel91/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 text-2xl ${
              darkMode
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-700 hover:text-blue-600"
            }`}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vikas-patel-10145b24b/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 text-2xl ${
              darkMode
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-700 hover:text-blue-600"
            }`}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 text-2xl ${
              darkMode
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-700 hover:text-blue-600"
            }`}
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:vikaspatel82916@gmail.com"
            className={`transition-colors duration-300 text-2xl ${
              darkMode
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-700 hover:text-blue-600"
            }`}
            aria-label="Email"
          >
            <FiMail />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 animate-bounce"
        >
          <div
            className={`w-6 h-10 border-2 rounded-full flex justify-center ${
              darkMode ? "border-gray-300" : "border-gray-400"
            }`}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className={`w-1 h-2 rounded-full mt-2 ${
                darkMode ? "bg-gray-300" : "bg-gray-400"
              }`}
            />
          </div>
        </motion.div>
      </main>

      {/* About Section */}
      <div className="relative z-10 w-full">
        <About darkMode={darkMode} />
      </div>
    </div>
  );
}
