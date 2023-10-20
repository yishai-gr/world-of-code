import React, { useState, useEffect } from "react";
import ContentCard from "./ContentCard";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/data/articles.json")
      .then((response) => response.json())
      .then((data) => {
        data = data.sort(function () {
          return 0.5 - Math.random();
        });
        setArticles(data);
      })
      .catch((error) => {
        console.error("שגיאה בטעינת הקובץ JSON:", error);
      });
  }, []);

  return (
    <div className="content-grid">
      {articles.map((tutorial) => (
        <ContentCard
          key={tutorial.tag}
          title={tutorial.heading}
          description={tutorial.description}
          image={tutorial.image}
          link={"/articles/" + tutorial.id}
        />
      ))}
    </div>
  );
}
