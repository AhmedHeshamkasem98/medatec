import "./Courses.css";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Front-End Diploma",
      description:
        "Learn HTML, CSS, JavaScript, React, and build real-world projects to become a professional Front-End Developer.",
      learningPoints: [
        "HTML5 & CSS3",
        "JavaScript (ES6+)",
        "React & Hooks",
        "Responsive Design",
        "Real Projects",
      ],
      originalPrice: 7500,
      price: 3000,
      formLink: "https://forms.gle/XvUwibiyPMxQvsmS8",
    },
    {
      id: 2,
      title: "Python Course",
      description:
        "Master Python from basics to advanced topics with practical examples and real applications.",
      learningPoints: [
        "Python Basics",
        "Data Structures",
        "OOP in Python",
        "Working with Files",
        "Real Projects",
      ],
      originalPrice: 5000,
      price: 2500,
      formLink: "https://forms.gle/vEr2eLY6tyMbShgM8",
    },
  ];

  return (
    <section className="courses" id="courses">
      <div className="container">
        <h2 className="section-title">Our Courses</h2>
        <p className="section-subtitle">
          Choose from our expert-led courses designed to accelerate your career
        </p>

        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>

              <div className="course-learning">
                <h4 className="learning-title">What You'll Learn:</h4>
                <ul className="learning-list">
                  {course.learningPoints.map((point, index) => (
                    <li key={index} className="learning-item">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="course-footer">
                <div className="price-box">
                  <span className="old-price">{course.originalPrice} EGP</span>
                  <span className="course-price">{course.price} EGP</span>
                </div>

                <a
                  href={course.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="course-btn"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
