// src/components/Hero.jsx
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = ({ onViewCourses }) => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-2 bg-blue-100 rounded-full">
          <span className="text-blue-700 font-semibold flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Premium Online Learning Platform
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Medatech
          </span>
          <br />
          <span className="text-4xl md:text-6xl">Learn, Grow, Succeed</span>
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          اكتشف دوراتنا العالمية المصممة لمساعدتك على إتقان المهارات الحديثة من
          تطوير واجهات المستخدم إلى برمجة بايثون.
        </p>

        {/* View Courses Button */}
        <button
          onClick={onViewCourses} // this should match the prop name
          aria-label="Scroll to courses section"
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          View Courses
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { value: "500+", label: "Active Students" },
            { value: "2", label: "Expert Courses" },
            { value: "95%", label: "Success Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
