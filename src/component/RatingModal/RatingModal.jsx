// import React, { useState } from "react";
// import "./RatingModal.css";
// import {message} from 'antd';

// const RatingModal = ({ blogId, setRatingBlogId }) => {
//   const [selectedRating, setSelectedRating] = useState(0); // To keep track of selected rating


//   const handleRatingSubmit = () => {
//     fetch(`https://moviebackend-o6m5.onrender.com/api/submitRating`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ blogId, rating: selectedRating }), 
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         message.success("Rating_submitted_successfully.");
//         setRatingBlogId(null); 
//       })
//       .catch((error) => {
//         message.error("Rating not submitted");
//       });
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <h4>Rate This Movie</h4>
//         <div className="stars">
//           {Array.from({ length: 5 }, (_, i) => (
//             <span
//               key={i}
//               className={`star ${i < selectedRating ? "filled-star" : "empty-star"}`}
//               onClick={() => setSelectedRating(i + 1)} // Set the selected rating when clicked
//             >
//               ★
//             </span>
//           ))}
//         </div>
//         <div className="modal-buttons">
//           <button className="submit-btn" onClick={handleRatingSubmit}>
//             Submit
//           </button>
//           <button className="cancel-btn" onClick={() => setRatingBlogId(null)}>
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RatingModal;



//using firebase

import React, { useState } from "react";
import "./RatingModal.css";
import { message } from "antd";
import { db, collection, doc, updateDoc, arrayUnion } from "../../Firebase/firebase"; // Adjust the import path for your Firebase config

const RatingModal = ({ blogId, setRatingBlogId }) => {
  const [selectedRating, setSelectedRating] = useState(0); // To keep track of selected rating

  const handleRatingSubmit = async () => {
    try {
      const blogRef = doc(collection(db, "blogs"), blogId); // Reference to the specific blog document
      
      // Update the blog document with the new rating
      await updateDoc(blogRef, {
        ratings: arrayUnion(selectedRating), // Append the new rating to an array of ratings
      });

      message.success("Rating submitted successfully.");
      setRatingBlogId(null);
    } catch (error) {
      console.error("Error submitting rating:", error);
      message.error("Rating not submitted.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h4>Rate This Movie</h4>
        <div className="stars">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`star ${i < selectedRating ? "filled-star" : "empty-star"}`}
              onClick={() => setSelectedRating(i + 1)} // Set the selected rating when clicked
            >
              ★
            </span>
          ))}
        </div>
        <div className="modal-buttons">
          <button className="submit-btn" onClick={handleRatingSubmit}>
            Submit
          </button>
          <button className="cancel-btn" onClick={() => setRatingBlogId(null)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;
