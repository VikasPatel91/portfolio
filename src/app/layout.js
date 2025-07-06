// app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { DarkModeProvider } from "./contexts/DarkModeContext";

export const metadata = {
  title: "Vikas Portfolio",
  description: "Portfolio built using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <DarkModeProvider>
          <Navbar />
          <main className="pt-20 md:pt-24">{children}</main>
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}
