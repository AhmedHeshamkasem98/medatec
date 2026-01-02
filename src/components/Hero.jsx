// src/components/Hero.jsx
import React from "react";
import { ArrowRight, Sparkles, Play } from "lucide-react";

const Hero = ({ onViewCourses }) => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center pt-24"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-blue-100 rounded-full">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-blue-400 font-semibold text-sm tracking-wide">
            Learn Programming • Build Skills
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Medatech
          </span>
          <br />
          <span className="text-4xl md:text-6xl">
            Learn, Grow, Succeed
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          منصة Medatech بتقدملك مهارات عملية في البرمجة والتقنية
            بأسلوب واقعي، مباشر، وبدون حشو.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-14">
          <button
            onClick={onViewCourses}
            className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            View Courses
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#intro-video"
            className="inline-flex items-center justify-center gap-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-all"
          >
            Watch Intro
            <Play className="w-5 h-5" />
          </a>
        </div>

        {/* Video Section */}
        <div
          id="intro-video"
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
        >
          <iframe
            className="w-full h-[240px] md:h-[500px]"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Medatech Introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            { value: "500+", label: "Active Students" },
            { value: "2+", label: "Expert Courses" },
            { value: "95%", label: "Success Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600 font-medium">
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
