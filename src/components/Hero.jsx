// src/components/Hero.jsx
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

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
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-blue-900/40 border border-blue-500/30 rounded-full">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-blue-400 font-semibold text-sm">
            Learn Programming • Build Skills
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Medatech
          </span>
          <br />
          <span className="text-3xl md:text-5xl text-gray-200">
            Learn Programming The Right Way
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          منصة تعليمية متخصصة في البرمجة، بتعلمك المهارات
          العملية المطلوبة في سوق العمل من Front-End
          إلى Python بأسلوب واضح وتطبيقي.
        </p>

        {/* Button */}
        <button
          onClick={onViewCourses}
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          View Courses
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            { value: "500+", label: "Active Students" },
            { value: "Hands-On", label: "Practical Courses" },
            { value: "95%", label: "Skill Progress" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-8 bg-white/5 backdrop-blur rounded-2xl border border-white/10 hover:border-blue-500/40 transition"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-300 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
