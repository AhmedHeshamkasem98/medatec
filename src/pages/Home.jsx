import React, { useRef } from "react";
import Hero from "./Hero";
import Courses from "./Courses";

const Home = () => {
  const coursesRef = useRef(null);

  const scrollToCourses = () => {
    if (!coursesRef.current) return;

    const yOffset = -80; // adjust if you have a sticky navbar
    const y =
      coursesRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div>
      <Hero onViewCourses={scrollToCourses} />

      <section ref={coursesRef} id="courses" className="min-h-screen">
        <Courses />
      </section>
    </div>
  );
};

export default Home;
