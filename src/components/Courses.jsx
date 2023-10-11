import React, { useState, useEffect } from "react";
import ContentCard from "./ContentCard";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/data/courses.json")
      .then((response) => response.json())
      .then((data) => {
        data = data.sort(function () {
          return 0.5 - Math.random();
        });
        setCourses(data);
      })
      .catch((error) => {
        console.error("שגיאה בטעינת הקובץ JSON:", error);
      });
  }, []);

  return (
    <div className="content-grid">
      {courses.map((course) => (
        <ContentCard
          key={course.tag}
          title={course.heading}
          description={course.description}
          image={course.image}
          link={"courses/" + course.id}
        />
      ))}
    </div>
  );
}
