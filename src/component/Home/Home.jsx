import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../../context/Context";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // Importing React Icons
import "./Home.css";
import Social from "../SocialMedia/Social";

const Home = () => {
  const { selectedCategory, blogs, searchQuery } = useContext(BlogContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setblogPerPage] = useState(8);
  const navigate = useNavigate();

  useEffect(() => {
    const updateIconSize = () => {
      if (window.innerWidth <= 608) {
        setblogPerPage(6);
      } else {
        setblogPerPage(8);
      }
    };

    updateIconSize();

    window.addEventListener("resize", updateIconSize);

    return () => window.removeEventListener("resize", updateIconSize);
  }, []);

  // Combine filtering for category and search query
  const filteredData = selectedCategory === "All"
    ? blogs
    .filter(blog => blog.title.toLowerCase().includes(searchQuery.toLowerCase())): blogs
    .filter(blog => blog.category === selectedCategory && blog.title.toLowerCase().includes(searchQuery.toLowerCase()));
   

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredData.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(filteredData.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleReviewClick = (id) => {
    navigate(`/${id}`);
  };

  // Function to get range of pages for pagination
  const getPaginationRange = () => {
    let startPage, endPage;

 
    const totalPagesToShow = 2;
    const midPoint = Math.ceil(totalPagesToShow / 2);

    if (totalPages <= totalPagesToShow) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= midPoint) {
        startPage = 1;
        endPage = totalPagesToShow;
      } else if (currentPage + midPoint - 1 >=totalPages) {
        startPage = totalPages - (totalPagesToShow - 1);
        endPage = totalPages;
      } else {
        startPage = currentPage - midPoint + 1;
        endPage = currentPage + midPoint - 1;
      }
    }

    return { startPage, endPage };
  };

  const { startPage, endPage } = getPaginationRange();

  // const renderStars = (rating) => {
  //   return (
  //     <div className="star-rating">
  //       {Array.from({ length: 5 }, (_, i) => (
  //         <span
  //           key={i}
  //           className={`star ${i < rating ? "filled-star" : "empty-star"}`}
  //         >
  //           ★
  //         </span>
  //       ))}
  //     </div>
  //   );
  // };

  // new change for decimal star value 
  const renderStars = (rating) => {
    return (
      <div className="star-rating">
        {Array.from({ length: 5 }, (_, i) => {
          if (i < Math.floor(rating)) {
            // Full star
            return (
              <span key={i} className="star filled-star">
                ★
              </span>
            );
          } else if (i < rating) {
            // Half star
            return (
              <span key={i} className="star half-star">
                ★
              </span>
            );
          } else {
            // Empty star
            return (
              <span key={i} className="star empty-star">
                ★
              </span>
            );
          }
        })}
      </div>
    );
  };
  

  return (
    <div>
      <Heading />
      <div className="Home-align">
        <div className="social-container">
          <Social />
        </div>
        <div className="blog-content">
          <div className="blog-grid">
            {currentBlogs.map((blog) => (
              <div key={blog.id} className="blog-card">
                <img src={blog.img} alt="Blog" className="blog-card-img" />
                <div className="blog-card-overlay">
                  <h5>{blog.title}</h5>
                  <div>{renderStars(blog.star)}</div>
                  <button onClick={() => handleReviewClick(blog.id)}>
                    Watch review
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
         
            <button
              className="page-button-align"
              onClick={() => paginate(1)}
              disabled={currentPage === 1}
            >
              First
            </button>

          
            <button
              className="page-button-align"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <IoIosArrowBack /> 
            </button>

      
            {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
              <button
                key={startPage + i}
                onClick={() => paginate(startPage + i)}
                className={currentPage === startPage + i ? "active-page" : ""}
              >
                {startPage + i}
              </button>
            ))}

        
            <button
              className="page-button-align"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <IoIosArrowForward /> 
            </button>

            <button
              className="page-button-align"
              onClick={() => paginate(totalPages)}
              disabled={currentPage === totalPages}
            >
              Last
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
