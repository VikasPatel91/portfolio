"use client";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function Footer() {
  const { darkMode } = useDarkMode();

  return (
    <footer
      className={`px-6 py-12 mt-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Me */}
        <div>
          <h3
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About Me
          </h3>
          <p className={darkMode ? "text-gray-200" : "text-gray-700"}>
            I&apos;m a skilled MERN stack developer from{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-purple-300" : "text-purple-600"
              }`}
            >
              Indore
            </span>
            . I specialize in{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-blue-300" : "text-blue-600"
              }`}
            >
              React
            </span>
            ,{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-green-300" : "text-green-600"
              }`}
            >
              Node.js
            </span>
            , and{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-emerald-300" : "text-emerald-600"
              }`}
            >
              MongoDB
            </span>
            .
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/experience", label: "Experience" },
              { href: "/projects", label: "Projects" },
              { href: "/education", label: "Education" },
              { href: "/certificates", label: "Certificates" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`flex items-center ${
                    darkMode
                      ? "text-gray-200 hover:text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full mr-2 ${
                      darkMode ? "bg-purple-400" : "bg-purple-600"
                    }`}
                  ></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Me */}
        <div>
          <h3
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Follow Me
          </h3>
          <ul className="space-y-3">
            {[
              {
                href: "https://github.com/VikasPatel91",
                icon: <FaGithub className="text-xl" />,
                label: "GitHub",
                color: darkMode
                  ? "text-gray-200 hover:text-white"
                  : "text-gray-700 hover:text-gray-900",
              },
              {
                href: "https://www.linkedin.com/in/vikas-patel-10145b24b/",
                icon: <FaLinkedin className="text-xl" />,
                label: "LinkedIn",
                color: darkMode
                  ? "text-blue-300 hover:text-blue-200"
                  : "text-blue-600 hover:text-blue-800",
              },
              {
                href: "https://twitter.com",
                icon: <FaTwitter className="text-xl" />,
                label: "Twitter",
                color: darkMode
                  ? "text-sky-300 hover:text-sky-200"
                  : "text-sky-600 hover:text-sky-800",
              },
              {
                href: "https://facebook.com",
                icon: <FaFacebook className="text-xl" />,
                label: "Facebook",
                color: darkMode
                  ? "text-blue-300 hover:text-blue-200"
                  : "text-blue-600 hover:text-blue-800",
              },
              {
                href: "https://instagram.com",
                icon: <FaInstagram className="text-xl" />,
                label: "Instagram",
                color: darkMode
                  ? "text-pink-300 hover:text-pink-200"
                  : "text-pink-600 hover:text-pink-800",
              },
            ].map((social, index) => (
              <li key={index}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center ${social.color}`}
                >
                  <span className="mr-2">{social.icon}</span>
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Me */}
        <div>
          <h3
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Contact Me
          </h3>
          <ul
            className={`space-y-3 ${
              darkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            <li className="flex items-start">
              <span
                className={`mr-3 mt-1 ${
                  darkMode ? "text-amber-300" : "text-amber-600"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div>
                <p>Madhya Pradesh, India</p>
                <p>Indore – 451010</p>
              </div>
            </li>
            <li className="flex items-center">
              <FaEnvelope
                className={`mr-3 ${darkMode ? "text-red-300" : "text-red-600"}`}
              />
              <a
                href="mailto:vikaspatel82916@gmail.com"
                className={`hover:underline ${
                  darkMode ? "text-red-300" : "text-red-600"
                }`}
              >
                vikaspatel82916@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <FaPhone
                className={`mr-3 ${
                  darkMode ? "text-green-300" : "text-green-600"
                }`}
              />
              <a
                href="tel:+919111182916"
                className={`hover:underline ${
                  darkMode ? "text-green-300" : "text-green-600"
                }`}
              >
                (+91) 9111182916
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className={`mt-12 pt-6 border-t ${
          darkMode
            ? "border-gray-700 text-gray-300"
            : "border-gray-200 text-gray-600"
        } text-center text-sm`}
      >
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div>
            © {new Date().getFullYear()} Vikas Patel. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
