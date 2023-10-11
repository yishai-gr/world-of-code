import React, { useState, useEffect } from "react";
import ContentCard from "./ContentCard";

export default function Tutorials() {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    fetch("/data/tutorials.json")
      .then((response) => response.json())
      .then((data) => {
        data = data.sort(function () {
          return 0.5 - Math.random();
        });
        setTutorials(data);
      })
      .catch((error) => {
        console.error("שגיאה בטעינת הקובץ JSON:", error);
      });
  }, []);

  return (
    <div className="content-grid">
      {tutorials.map((tutorial) => (
        <ContentCard
          key={tutorial.tag}
          title={tutorial.heading}
          description={tutorial.description}
          image={tutorial.image}
          link={"tutorials/" + tutorial.id}
        />
      ))}
    </div>
  );
}
