import React from "react";

export default function ContentCard({ title, description, image, link }) {
  return (
    <div className="content-card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a
          href={link}
          className="card-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          לקורס
        </a>
      </div>
    </div>
  );
}
