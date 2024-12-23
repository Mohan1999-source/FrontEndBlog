// import React, { useEffect, useState } from "react";
// import io from "socket.io-client";
// import "./Comment.css";




// const socket = io(`https://moviebackend-o6m5.onrender.com`, {
//   transports: ["websocket", "polling"], 
//   withCredentials: true,
// });


// const Comment = ({ blogId }) => {
//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState([]);
//   const [sortOrder, setSortOrder] = useState("latest");


//   console.log(comments)
//   useEffect(() => {
//     socket.on("newComment", (newComment) => {
//       setComments((prevComments) => [...prevComments, newComment]);
//     });

//     const fetchComments = async () => {
//       try {
//         const response = await fetch(`https://moviebackend-o6m5.onrender.com/api/comments?blogId=${blogId}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         if (Array.isArray(data)) {
//           setComments(data);
//         } else {
//           setComments([]);
//         }
//       } catch (error) {
//         console.error("Error fetching comments:", error);
//       }
//     };

//     fetchComments();

//     return () => {
//       socket.off("newComment");
//     };
//   }, [blogId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newComment = { blogId, comment };
//     await fetch(`https://moviebackend-o6m5.onrender.com/api/comments`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newComment),
//     });
//     socket.emit("newComment", { comment });
//     setComment("");
//   };

//   const handleSortChange = (e) => {
//     setSortOrder(e.target.value);
//   };

//   const sortedComments = sortOrder === "latest" ? comments : comments.reverse();

//   return (
//     <div className="comment-box">
//       <div className="comment-header">
//         <h4>{comments.length} Comments</h4>
//         <div className="sort-container">
//           <span className="sort-label">Sort by : </span>
//           <select className="sort-dropdown" value={sortOrder} onChange={handleSortChange}>
//             <option value="latest">Latest</option>
//             <option value="oldest">Oldest</option>
//           </select>
//         </div>
//       </div>

//       <hr className="comment-divider" />

//       <form onSubmit={handleSubmit} className="comment-form">
//         <img
//           src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
//           alt="avatar"
//           className="avatar-img"
//         />
//         <input
//           placeholder="Write your comment here..."
//           type="text"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           className="comment-input"
//         />
//         <button type="submit" className="submit-btn">Submit</button>
//       </form>

//       <hr className="comment-divider" />

//       <ul className="comment-list">
//         {sortedComments.map((c, index) => (
//           <li key={index} className="comment-item">
//             <img
//               src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
//               alt="avatar"
//               className="avatar-img"
//             />
//             <div className="comment-content">
//               <div className="comment-text">{c.comment}</div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Comment;
