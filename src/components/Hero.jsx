// src/components/Hero.jsx
import React from "react";
import { ArrowRight, Play } from "lucide-react";

const Hero = ({ onViewCourses }) => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-[#061a12] via-[#0b2a1c] to-black flex items-center pt-28"
    >
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-green-900/40 border border-green-600/30 rounded-full">
            <span className="text-green-400 font-semibold text-sm">
              MONEY • SKILLS • GROWTH
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Learn Skills That <br />
            <span className="text-green-400">Actually Make Money</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-300 max-w-xl mb-10 leading-relaxed">
            منصة Medatech بتقدملك مهارات عملية في البرمجة والتقنية
            بأسلوب واقعي، مباشر، وبدون حشو.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onViewCourses}
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105"
            >
              Start Learning
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#intro-video"
              className="flex items-center gap-3 border border-green-500 text-green-400 hover:bg-green-500/10 font-semibold py-4 px-8 rounded-xl transition-all"
            >
              Watch Intro
              <Play className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* RIGHT VIDEO */}
        <div
          id="intro-video"
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-green-500/20"
        >
          <iframe
            className="w-full h-[260px] md:h-[420px]"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Medatech Introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* Glow Effect */}
          <div className="absolute inset-0 pointer-events-none ring-1 ring-green-500/30 rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
