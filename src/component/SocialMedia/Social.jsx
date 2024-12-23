import React, { useContext, useState, useEffect } from "react";
import {
  // FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTelegram,
  // FaWhatsapp,
} from "react-icons/fa";
import { BlogContext } from "../../context/Context";
import "./Social.css";

const Social = () => {
  const { iconCount } = useContext(BlogContext); 
  const [iconSize, setIconSize] = useState(35);

  useEffect(() => {
    const updateIconSize = () => {
      if (window.innerWidth <= 608) {
        setIconSize(15);
      } else {
        setIconSize(35);
      }
    };

    updateIconSize();

    window.addEventListener("resize", updateIconSize);

    return () => window.removeEventListener("resize", updateIconSize);
  }, []);

  const socialLinks = [
    { link: "https://youtube.com/@criticsmohan?si=O5MmSkG1JDMAGvEz", icon: <FaYoutube size={iconSize} color="#2C2E43" /> },
    { link: "https://www.instagram.com/mohanvlogger/", icon: <FaInstagram size={iconSize} color="#2C2E43" /> },
    { link: "https://t.me/CriticsMohans", icon: <FaTelegram size={iconSize} color="#2C2E43" /> },
    // { link: "https://wa.me", icon: <FaWhatsapp size={iconSize} color="#2C2E43" /> },
    // { link: "https://twitter.com", icon: <FaTwitter size={iconSize} color="#2C2E43" /> },
  ];


  const displayedLinks = socialLinks.slice(0, iconCount);

  return (
    <div className="Social-container">
      {displayedLinks.map((social, index) => (
        <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
