import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/ELQASSEM.png"; // ← استيراد اللوجو

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* اللوجو */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <img
              src={logo}
              alt="El Qassem Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-stone-900">
              ELSHEMAA Custom Carpentry
            </span>
          </div>

          {/* الروابط */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-stone-700 hover:text-amber-700 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-stone-700 hover:text-amber-700 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-stone-700 hover:text-amber-700 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-stone-700 hover:text-amber-700 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* زر الموبايل */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-stone-700 hover:text-amber-700 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* منيو الموبايل */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-stone-700 hover:bg-amber-50 rounded"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 text-stone-700 hover:bg-amber-50 rounded"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left px-4 py-2 text-stone-700 hover:bg-amber-50 rounded"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-stone-700 hover:bg-amber-50 rounded"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
