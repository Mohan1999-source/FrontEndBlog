import React from "react";
import "./GenerePage.css";
import RecentPosts from "../RecentPost/RecentPost";
// import Comment from "../Comment/Comment";
import GenereInfo from "./GenereInfo";


const GenerePage = ({blog}) => {



  return (
    <div className="genere-container">
      <div className="genere-main-content">
        <div className="description">
          <h1>{blog.description.descriptiontitle}</h1>
           <div>
               <div className="para-content">
                  <h3>Story :</h3>
                  <p>{blog.description.story}</p>
               </div>
               <div className="para-content">
                  <h3>Plus Point :</h3>
                  <p>{blog.description.plusPoint}</p>
               </div>
               <div className="para-content">
                  <h3>Minus Point :</h3>
                  <p>{blog.description.minusPoint}</p>
               </div>
               <div className="para-content">
                  <h3>Technical Aspect :</h3>
                  <p>{blog.description.technicalAspect}</p>
               </div>
               <div className="para-content">
                  <h3>Final Review :</h3>
                  <p>{blog.description.finalReview}</p>
               </div>
           </div>
        </div>
        <div className="gener">
          <GenereInfo blog={blog} />
        </div>
        {/* <div className="user-comment-box">
          <Comment blogId={blog._id} />
        </div> */}
      </div>
      <div className="Latest-posts">
        <RecentPosts />
      </div>
    </div>
  );
};

export default GenerePage;
