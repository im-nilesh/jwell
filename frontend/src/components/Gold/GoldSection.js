import React, { useState } from "react";
import PostCard from "../postcard/postcard";
import "./GoldSection.css";
import neck1 from "../../assets/neck1.jpg";
import neck2 from "../../assets/neck2.jpg";
import neck3 from "../../assets/neck3.jpg";
import neck4 from "../../assets/neck4.jpg";
import neck5 from "../../assets/neck5.jpg";
import neck6 from "../../assets/neck6.jpg";
import neck7 from "../../assets/neck7.jpg";
import neck8 from "../../assets/neck8.jpg";
import neck9 from "../../assets/neck9.jpg";
import neck10 from "../../assets/neck10.jpg";

const GoldSection = () => {
  const posts = [
    {
      image: neck1,
      title: "Elegant Gold Necklace",
      description: "A timeless piece of art for your loved one.",
    },
    {
      image: neck2,
      title: "Silver Diamond Necklace",
      description: "A classic design with stunning diamonds.",
    },
    {
      image: neck3,
      title: "Rose Gold Necklace",
      description: "Modern elegance with a rose gold finish.",
    },
    {
      image: neck4,
      title: "Platinum Necklace",
      description: "A luxurious platinum necklace for special occasions.",
    },
    {
      image: neck5,
      title: "Sapphire Necklace",
      description: "A beautiful necklace with a stunning sapphire.",
    },
    {
      image: neck6,
      title: "Emerald Necklace",
      description: "A necklace with a gorgeous emerald stone.",
    },
    {
      image: neck7,
      title: "Ruby Necklace",
      description: "A necklace with a gorgeous ruby stone.",
    },
    {
      image: neck8,
      title: "Amethyst Necklace",
      description: "A necklace with a gorgeous amethyst stone.",
    },
    {
      image: neck9,
      title: "Topaz Necklace",
      description: "A necklace with a gorgeous topaz stone.",
    },
    {
      image: neck10,
      title: "Opal Necklace",
      description: "A necklace with a gorgeous opal stone.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 5;

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.floor(posts.length / postsPerPage))
    );
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIndex = currentPage * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="gold-section">
      {currentPosts.map((post, index) => (
        <PostCard
          key={index}
          image={post.image}
          title={post.title}
          description={post.description}
          className="postcard"
        />
      ))}
      {posts.length > postsPerPage && (
        <div className="navigation-buttons">
          <button onClick={handlePrev} disabled={currentPage === 0}>
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + postsPerPage >= posts.length}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default GoldSection;
