// components/Navbar.js
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300 bg-clip-text text-transparent"
              aria-label="Home"
            >
              Profile
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="/">Home</NavLink>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-300"
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                About
                {isOpen ? (
                  <FaChevronUp className="ml-1 text-sm" />
                ) : (
                  <FaChevronDown className="ml-1 text-sm" />
                )}
              </button>

              {isOpen && <DropdownMenu onClose={() => setIsOpen(false)} />}
            </div>

            <NavLink href="/contact">Contact Me</NavLink>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <FaSun className="h-5 w-5 text-yellow-300" />
              ) : (
                <FaMoon className="h-5 w-5" />
              )}
            </button>

            <Link
              href="https://www.linkedin.com/in/vikas-patel-10145b24b/"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-500 dark:to-blue-400 text-white rounded-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <FaSun className="h-5 w-5 text-yellow-300" />
              ) : (
                <FaMoon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <MobileMenu
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
          toggleMobileMenu={toggleMobileMenu}
          setIsOpen={setIsOpen}
        />
      )}
    </nav>
  );
}

// Reusable components (same as before)
function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="relative group text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-300"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

function DropdownMenu({ onClose }) {
  const menuItems = [
    { href: "/certificates", label: "Certificates", icon: "🎓" },
    { href: "/education", label: "Education", icon: "📚" },
    { href: "/experience", label: "Experience", icon: "💼" },
    { href: "/projects", label: "Projects", icon: "🚀" },
  ];

  return (
    <div
      className="absolute left-0 mt-2 w-56 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black dark:ring-gray-600 ring-opacity-5 focus:outline-none z-50 animate-fadeIn"
      onMouseLeave={onClose}
    >
      <div className="py-1">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
            onClick={onClose}
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileMenu({ isOpen, toggleDropdown, toggleMobileMenu, setIsOpen }) {
  const menuItems = [
    { href: "/", label: "Home" },
    {
      type: "dropdown",
      label: "About",
      items: [
        { href: "/certificates", label: "Certificates", icon: "🎓" },
        { href: "/education", label: "Education", icon: "📚" },
        { href: "/experience", label: "Experience", icon: "💼" },
        { href: "/projects", label: "Projects", icon: "🚀" },
      ],
    },
    { href: "/contact", label: "Contact Me" },
  ];

  return (
    <div className="md:hidden bg-white dark:bg-gray-800 shadow-xl rounded-lg mx-4 mt-2 animate-slideDown">
      <div className="px-2 pt-2 pb-4 space-y-1">
        {menuItems.map((item) =>
          item.type === "dropdown" ? (
            <div key={item.label} className="px-3 py-2">
              <button
                onClick={toggleDropdown}
                className="w-full flex justify-between items-center text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                {item.label}
                {isOpen ? (
                  <FaChevronUp className="text-sm" />
                ) : (
                  <FaChevronDown className="text-sm" />
                )}
              </button>

              {isOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-700"
                      onClick={() => {
                        setIsOpen(false);
                        toggleMobileMenu();
                      }}
                    >
                      <span className="mr-2">{subItem.icon}</span>
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-700"
              onClick={toggleMobileMenu}
            >
              {item.label}
            </Link>
          )
        )}

        <Link
          href="https://www.linkedin.com/in/vikas-patel-10145b24b/"
          className="block w-full text-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-500 dark:to-blue-400 text-white rounded-md hover:shadow-lg transition-all duration-300 mt-2"
          onClick={toggleMobileMenu}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
