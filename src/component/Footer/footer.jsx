import React from "react";
import { FaYoutube, FaTelegramPlane, FaInstagram } from "react-icons/fa"; // Importing updated icons
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-3">
      <div className="container">
        <div className="row text-center">
          {/* Footer Text */}
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
          </div>

          {/* Social Media Links */}
          <div className="col-12 col-md-6">
            <div className="d-flex justify-content-center">
              <a href="https://www.youtube.com/results?search_query=critics+mohan" target="_blank" rel="noopener noreferrer" className="mx-2 text-white">
                <FaYoutube size={24} />
              </a>
              <a href="https://t.me/CriticsMohans" target="_blank" rel="noopener noreferrer" className="mx-2 text-white">
                <FaTelegramPlane size={24} />
              </a>
              <a href="https://www.instagram.com/mohanvlogger/" target="_blank" rel="noopener noreferrer" className="mx-2 text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
