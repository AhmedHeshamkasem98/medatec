// src/components/Hero.jsx
import React from "react";
import { ArrowRight, Play } from "lucide-react";

const Hero = ({ onViewCourses }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-green-900/40 border border-green-500/30 rounded-full">
          <span className="text-green-400 font-semibold text-sm tracking-wide">
            MONEY • SKILLS • GROWTH
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Learn Skills That <br />
          <span className="text-green-400">
            Actually Make Money
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Medatech بتقدملك تعليم تقني عملي، بدون تنظير،
          مهارات حقيقية تقدر تشتغل بيها وتكسب منها.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={onViewCourses}
            className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            Start Learning
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#courses"
            className="inline-flex items-center justify-center gap-3 border border-green-500 text-green-400 hover:bg-green-500/10 font-semibold py-4 px-10 rounded-xl transition-all"
          >
            View Courses
            <Play className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
