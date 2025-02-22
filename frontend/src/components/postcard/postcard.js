import React from "react";
import "./postcard.css";

const PostCard = ({ image, title, description, className }) => {
  return (
    <div className={`post-card ${className}`}>
      <img src={image} alt={title} className="post-card-image" />
      <div className="post-card-content">
        <h3 className="post-card-title">{title}</h3>
        <p className="post-card-description">{description}</p>
      </div>
    </div>
  );
};

export default PostCard;
