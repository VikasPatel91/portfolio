"use client";
import Image from "next/image";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useEffect, useState } from "react";

const certificates = [
  { src: "bytebash.png", title: "Bytebash Hackathon" },
  { src: "cloud.png", title: "Cloud Computing" },
  { src: "internship.png", title: "Internship Certificate" },
  { src: "MERN.jpg", title: "MERN Stack Course" },
  { src: "java.png", title: "Java Programming" },
  { src: "web.png", title: "Web Development" },
  { src: "software.png", title: "Software Engineering" },
];

export default function Certificates() {
  const { darkMode } = useDarkMode();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("certificates");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const openCertificate = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = "hidden";
  };

  const closeCertificate = () => {
    setSelectedCert(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section
        id="certificates"
        className={`relative p-8 transition-colors duration-500 ${
          darkMode
            ? "dark bg-gray-900"
            : "bg-gradient-to-br from-gray-50 to-gray-100"
        }`}
      >
        {/* Floating bubbles decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full opacity-20 ${
                darkMode ? "bg-amber-400" : "bg-blue-400"
              }`}
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2
              className={`text-4xl font-bold ${
                darkMode ? "text-amber-400" : "text-blue-600"
              } ${isVisible ? "animate-fadeIn" : "opacity-0"}`}
            >
              My Certificates
            </h2>
          </div>

          <div
            className={`grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${
              isVisible ? "animate-slideUp" : "opacity-0"
            }`}
          >
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`group relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-[1.03] hover:shadow-xl ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-50"
                }`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={`/certificates/${cert.src}`}
                    alt={cert.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      darkMode ? "from-gray-900" : "from-white"
                    } to-transparent opacity-80`}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3
                    className={`text-lg font-semibold ${
                      darkMode ? "text-amber-300" : "text-blue-600"
                    }`}
                  >
                    {cert.title}
                  </h3>
                  <div
                    className={`mt-2 w-8 h-1 mx-auto rounded-full ${
                      darkMode ? "bg-amber-400" : "bg-blue-500"
                    } transition-all duration-300 group-hover:w-16`}
                  />
                </div>
                <div
                  className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    darkMode
                      ? "bg-gray-900 bg-opacity-70"
                      : "bg-white bg-opacity-70"
                  }`}
                >
                  <button
                    onClick={() => openCertificate(cert)}
                    className={`px-4 py-2 rounded-full font-medium ${
                      darkMode
                        ? "bg-amber-500 hover:bg-amber-600 text-gray-900"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    } transition-colors flex items-center gap-2`}
                  >
                    <EyeIcon /> View Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx global>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes float {
            0% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
            100% {
              transform: translateY(0) rotate(0deg);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
          .animate-slideUp {
            animation: slideUp 0.8s ease-out forwards;
          }
        `}</style>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
            darkMode ? "bg-gray-900 bg-opacity-90" : "bg-white bg-opacity-90"
          }`}
          onClick={closeCertificate}
        >
          <div
            className={`relative max-w-4xl w-full max-h-[90vh] rounded-xl overflow-hidden shadow-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeCertificate}
              className={`absolute top-4 right-4 z-10 p-2 rounded-full ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-amber-400"
                  : "bg-gray-200 hover:bg-gray-300 text-blue-600"
              } transition-colors`}
            >
              <CloseIcon />
            </button>
            <div className="relative h-full w-full">
              <Image
                src={`/certificates/${selectedCert.src}`}
                alt={selectedCert.title}
                width={1200}
                height={900}
                className="w-full h-full object-contain max-h-[80vh]"
              />
            </div>
            <div
              className={`p-4 text-center ${
                darkMode ? "text-amber-300" : "text-blue-600"
              }`}
            >
              <h3 className="text-xl font-semibold">{selectedCert.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function EyeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path
        fillRule="evenodd"
        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}