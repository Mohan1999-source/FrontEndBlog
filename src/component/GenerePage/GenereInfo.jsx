import React from "react";

import "./GenerePage.css";

const GenereInfo = ({blog}) => {

  return (
    <div className="genere-info-container">
      <div className="genere-image">
        <img src={blog.img} alt="img" />
      </div>
      <div className="genere-info">
        <div className="genere-item">
          <strong>Genre:</strong> <span>{blog.details.genre}</span>
        </div>
        <div className="genere-item">
          <strong>Created by:</strong> <span>{blog.details.createdBy}</span>
        </div>
        <div className="genere-item">
          <strong>Directed by:</strong> <span>{blog.details.directedBy}</span>
        </div>
        <div className="genere-item">
          <strong>Starring:</strong>{" "}
          <span>{blog.details.starring}</span>
        </div>
        <div className="genere-item">
          <strong>Music by:</strong> <span>{blog.details.musicBy}</span>
        </div>
        <div className="genere-item">
          <strong>Country of origin:</strong> <span>{blog.details.countryOfOrigin}</span>
        </div>
        <div className="genere-item">
          <strong>Original language:</strong> <span>{blog.details.originalLanguage}</span>
        </div>
        {blog.details.seasons!==0 &&  (<div className="genere-item">
          <strong>Seasons:</strong> <span>{blog.details.seasons}</span>
        </div>)}
        {blog.details.numberOfEpisodes!==0 && (
        <div className="genere-item">
          <strong>No. of episodes:</strong> <span>{blog.details.numberOfEpisodes}</span>
        </div>
)}
      </div>
    </div>
  );
};

export default GenereInfo;
