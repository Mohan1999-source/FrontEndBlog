import React, { useContext } from "react";
import { BlogContext } from "../../context/Context"; 
import './RecentPost.css';
import { useNavigate } from "react-router-dom";

const RecentPosts = () => {
  const { blogs } = useContext(BlogContext); 
  const navigate = useNavigate(); 

  const handleReviewClick = (id) => {
    navigate(`/${id}`); 
  };

  const recentPosts = blogs.slice(-5); 

  const renderStars = (rating) => {
    return (
      <div className="star-rating">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={`star ${i < rating ? "filled-star" : "empty-star"}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="recent-posts">
      <h3>Latest Updates</h3>
        <div className="recent-blog-grid">
        {recentPosts.map((blog) => (
          <div key={blog.id} className="blog-card-grid">
            <img src={blog.img} alt="blog" className="blog-card1-img" />
             <div className="recent-blog-overlay">
             <h5>{blog.title}</h5>
             {renderStars(blog.star)}
                  <button onClick={() => handleReviewClick(blog.id)}>
                    Watch Review
                  </button>
             </div>
          </div>
        ))}
    </div>
    </div>
  );
};

export default RecentPosts;
