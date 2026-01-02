// src/components/Hero.jsx
import React from "react";
import { ArrowRight, Code2 } from "lucide-react";

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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-blue-900/40 border border-blue-500/30 rounded-full">
          <Code2 className="w-4 h-4 text-blue-400" />
          <span className="text-blue-400 font-semibold text-sm tracking-wide">
            Learn Programming • Build Skills
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Learn Programming <br />
          <span className="text-blue-400">
            The Practical Way
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Medatech منصة تعليمية متخصصة في البرمجة،
          بتعلمك المهارات اللي فعلاً محتاجها سوق العمل
          من Front-End لحد Python.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={onViewCourses}
            className="inline-flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            View Courses
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#about"
            className="inline-flex items-center justify-center gap-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold py-4 px-10 rounded-xl transition-all"
          >
            Why Medatech?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
