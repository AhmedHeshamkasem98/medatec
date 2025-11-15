import React from "react";
import cabinetImg from "../assets/Cabinets.jpeg"; // ✅ استيراد الصورة
import homeImg from "../assets/home.jpeg"; // ✅ استيراد الصورة
import woodenImg from "../assets/Wooden Doors.jpeg"; // ✅ استيراد الصورة
import restImg from "../assets/Restorations.jpeg"; // ✅ استيراد الصورة
import officeImg from "../assets/Office Furniture.jpeg"; // ✅ استيراد الصورة
import customImg from "../assets/custom tables.jpeg"; // ✅ استيراد الصورة
import decorImg from "../assets/Decorative Art.jpeg"; // ✅ استيراد الصورة

interface Project {
  title: string;
  category: string;
  image: string;
}

export default function Gallery() {
  const projects: Project[] = [
    {
      title: "Custom Oak Dining Table",
      category: "Furniture",
      image: customImg, // ✅ استخدم المتغير
    },
    {
      title: "Handcrafted Entry Door",
      category: "Doors",
      image: woodenImg,
    },
    {
      title: "Built-in Bookshelf",
      category: "Carpentry",
      image: cabinetImg,
    },
    {
      title: "Office Table",
      category: "Furniture",
      image: officeImg,
    },
    {
      title: "Kitchen Cabinets",
      category: "Built-ins",
      image: customImg,
    },
    {
      title: "Decorative Wall Panels",
      category: "Decor",
      image: decorImg,
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mt-4 mb-6">
            Recent Projects
          </h2>
          <p className="text-xl text-stone-600">
            A selection of our recent work showcasing the quality and variety of
            our craftsmanship.
          </p>
        </div>

        {/* شبكة المشاريع */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
            >
              {/* الصورة */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* التعتيم والنص */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white z-10">
                <span className="text-sm font-semibold uppercase tracking-wider mb-2 opacity-90">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-center">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* النص الختامي */}
        <div className="mt-12 text-center">
          <p className="text-stone-600 text-lg">
            Each project represents our commitment to excellence and client
            satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}
