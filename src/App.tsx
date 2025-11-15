import {
  Menu,
  X,
  Hammer,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />

      <footer className="bg-stone-900 text-stone-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Wady Woodworks. Crafted with
            AhmedHesham
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
