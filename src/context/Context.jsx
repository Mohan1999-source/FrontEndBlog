import React, { createContext, useState, useEffect } from "react";
import { db, collection, getDocs } from "../Firebase/firebase"; // Adjust the import path for your Firebase config


export const BlogContext = createContext(null);

const Context = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [iconCount, setIconCount] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  const changeCategory = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, "blogs"); // Replace "blogs" with your Firestore collection name
        const blogSnapshot = await getDocs(blogsCollection);
        const blogList = blogSnapshot.docs.map((doc) => ({
          id: doc.id, // Include document ID for unique keys
          ...doc.data(), // Spread document data
        }));
        setBlogs(blogList.reverse());
        // Reverse to show the latest blogs first
      } catch (error) {
        console.error("Error fetching blogs from Firestore:", error);
      }
    };

    fetchBlogs();
  }, []);

  // check

  // useEffect(() => {
  //   console.log("Updated blogs state:", blogs); // Log when blogs state updates
  // }, [blogs]);

  return (
    <BlogContext.Provider
      value={{
        selectedCategory,
        changeCategory,
        iconCount,
        blogs,
        setIconCount,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default Context;

// original code

// import React, { createContext, useState, useEffect } from "react";
// import img from "../assets/back.jpg";
// import back from "../assets/bg.jpg";

// export const BlogContext = createContext(null);




// const Context = ({ children }) => {
//   const [blogs, setBlogs] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [iconCount, setIconCount] = useState(5); 
//   const [searchQuery, setSearchQuery] = useState(""); 

//   const changeCategory = (category) => {
//     setSelectedCategory(category);
//   };


//   useEffect(() => {
//     const fetchBlogs = async () => {
//         try {
//             const response = await fetch(`https://moviebackend-o6m5.onrender.com/api/blogs`);
//             if (!response.ok) {
//                 throw new Error('Failed to fetch blogs');
//             }
//             const data = await response.json();
         
//             setBlogs([...data].reverse());
//         } catch (error) {
//             console.error('Error fetching blogs:', error);
//         }
//     };

//     fetchBlogs();
// }, []);



//   return (
//     <BlogContext.Provider
//       value={{ selectedCategory, changeCategory, iconCount,blogs, setIconCount, searchQuery, setSearchQuery,}}
//     >
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export default Context;
