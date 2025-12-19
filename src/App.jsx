import React, { useState, useRef, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showContact, setShowContact] = useState(false);

  // ✅ Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // ✅ Language state
  const [lang, setLang] = useState("en");

  const coursesRef = useRef(null);
  const contactRef = useRef(null);

  // ✅ Apply dark mode to <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const scrollToSection = (section) => {
    setActiveSection(section);

    if (section === "courses") {
      coursesRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    if (section === "contact") {
      setShowContact(true);
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      <Navigation
        activeSection={activeSection}
        onSectionChange={scrollToSection}
        darkMode={darkMode}
        toggleDark={() => setDarkMode(!darkMode)}
        lang={lang}
        toggleLang={() => setLang(lang === "en" ? "ar" : "en")}
      />

      {/* Hero */}
      <Hero onViewCourses={() => scrollToSection("courses")} lang={lang} />

      <About lang={lang} />

      {/* Courses */}
      <section ref={coursesRef} id="courses">
        <Courses lang={lang} />
      </section>

      {/* Contact */}
      {showContact && (
        <section ref={contactRef}>
          <Contact lang={lang} />
        </section>
      )}

      <Footer lang={lang} />
    </div>
  );
}

export default App;
