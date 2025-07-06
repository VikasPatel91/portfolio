"use client";
import { useState } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log({ email, message }); // For testing
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <div
      className={`min-h-screen p-8 flex items-center justify-center ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-md rounded-lg shadow-lg p-8 transition-colors ${
          darkMode ? "dark:bg-gray-800" : "bg-white"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Contact Me</h2>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div
              className={`w-16 h-16 ${
                darkMode ? "bg-green-900" : "bg-green-100"
              } rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Message Sent Successfully!
            </h3>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              I&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className={`mt-6 px-4 py-2 rounded-md transition-colors ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white`}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-1 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                  darkMode
                    ? "dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    : "border-gray-300 text-gray-900"
                }`}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium mb-1 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                  darkMode
                    ? "dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    : "border-gray-300 text-gray-900"
                }`}
                placeholder="Hello, I&apos;d like to talk about..."
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors flex items-center justify-center ${
                isLoading
                  ? "bg-blue-400"
                  : darkMode
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
