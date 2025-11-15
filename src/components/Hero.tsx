import { ChevronRight } from "lucide-react";
import React from "react";
import workshopImg from "../assets/home.jpeg"; // ✅ استيراد الصورة من مجلد assets

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* النص */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-900 leading-tight">
                Crafting Wood
                <span className="block text-amber-700">Into Beauty</span>
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed">
                Where traditional craftsmanship meets modern design
              </p>
            </div>

            <p className="text-lg text-stone-700 max-w-xl">
              From custom furniture to handcrafted doors and repairs, every
              piece tells a story of quality, passion, and attention to detail.
            </p>

            <button
              onClick={scrollToContact}
              className="group inline-flex items-center space-x-2 bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Get Your Free Quote</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* الصورة */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={workshopImg}
                alt="Workshop"
                className="w-full h-full object-cover"
              />
            </div>

            {/* صندوق الخبرة */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-6 max-w-xs">
              <p className="text-3xl font-bold text-amber-700">40+</p>
              <p className="text-stone-600">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
