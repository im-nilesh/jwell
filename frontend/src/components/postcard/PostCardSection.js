import React, { useState } from "react";
import PostCard from "./postcard";
import "./PostCardSection.css";
import ring1 from "../../assets/ring1.jpg";
import ring2 from "../../assets/ring2.jpg";
import ring3 from "../../assets/ring3.jpg";
import ring4 from "../../assets/ring4.jpg";
import ring5 from "../../assets/ring5.jpg";
import ring6 from "../../assets/ring6.jpg";
import ring7 from "../../assets/ring7.jpg";
import ring8 from "../../assets/ring8.jpg";
import ring9 from "../../assets/ring9.jpg";
import ring10 from "../../assets/ring10.jpg";

const PostCardSection = () => {
  const posts = [
    {
      image: ring1,
      title: "Elegant Gold Ring",
      description: "A timeless piece of art for your loved one.",
    },
    {
      image: ring2,
      title: "Silver Diamond Ring",
      description: "A classic design with stunning diamonds.",
    },
    {
      image: ring3,
      title: "Rose Gold Band",
      description: "Modern elegance with a rose gold finish.",
    },
    {
      image: ring4,
      title: "Platinum Ring",
      description: "A luxurious platinum ring for special occasions.",
    },
    {
      image: ring5,
      title: "Sapphire Ring",
      description: "A beautiful ring with a stunning sapphire.",
    },
    {
      image: ring6,
      title: "Emerald Ring",
      description: "A ring with a gorgeous emerald stone.",
    },
    {
      image: ring7,
      title: "Ruby Ring",
      description: "A ring with a gorgeous ruby stone.",
    },
    {
      image: ring8,
      title: "Amethyst Ring",
      description: "A ring with a gorgeous amethyst stone.",
    },
    {
      image: ring9,
      title: "Topaz Ring",
      description: "A ring with a gorgeous topaz stone.",
    },
    {
      image: ring10,
      title: "Opal Ring",
      description: "A ring with a gorgeous opal stone.",
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
    <div className="postcard-section">
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

export default PostCardSection;
