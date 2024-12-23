import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../../context/Context";
import logo from "../../assets/logo6.png";
import "./DetailPage.css";
import Heading from '../../component/Heading/Heading'
import GenerePage from "../GenerePage/GenerePage";
import RatingModal from "../RatingModal/RatingModal"; // Import the RatingModal

const Detailpage = () => {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const [ratingBlogId, setRatingBlogId] = useState(null); // State to control modal visibility

  const blog = blogs.find((blog) => blog.id === id);
console.log("detail page ")
console.log(blogs);
  if (!blog) {
    return <p>Blog not found</p>;
  }

  // Function to calculate the number of filled stars based on rating
  // const renderStars = (rating) => {
  //   const stars = [];
  //   for (let i = 1; i <= 5; i++) {
  //     stars.push(
  //       <span key={i} className={i <= rating ? "filled-star" : "empty-star"}>
  //         ★
  //       </span>
  //     );
  //   }
  //   return stars;
  // };

  //Function to calculate the number of filled stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars.push(
                <span key={i} className="filled-star">
                    ★
                </span>
            );
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            // Add a half-star if there's a decimal part in the rating
            stars.push(
                <span key={i} className="half-star">
                    ★
                </span>
            );
        } else {
            stars.push(
                <span key={i} className="empty-star">
                    ★
                </span>
            );
        }
    }
    
    return stars;
};


  return (
    <>
  
      <div className="DBlog-Container">
        <div className="videoDescription">
          <h2>{blog.title}</h2>
          <a href={blog.back} target="_blank" rel="noopener noreferrer">
            <img
              className="video-img-align"
              src={blog.thumbnail}
              alt={blog.title}
              style={{ width: "100%", maxWidth: "600px" }}
            />
          </a>
          <div className="blog-description">
            <p className="blog-p">{blog.simpledescription}</p>
            <div className="logo-star-align">
              <div className="rating-align">
                <p>{renderStars(blog.star)}</p>{" "}
                {/* Display stars based on rating */}
                <button onClick={() => setRatingBlogId(blog.id)}>
                  Give ratings
                </button>

             
                {ratingBlogId && (
                  <RatingModal className="Rating-blog-align"
                    blogId={ratingBlogId}
                    setRatingBlogId={setRatingBlogId}
                  />
                )}
         
              </div>
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <GenerePage blog={blog} />
    </>
  );
};

export default Detailpage;
