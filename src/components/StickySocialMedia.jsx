import React from 'react';
import { FiTwitter, FiGithub, FiLinkedin, FiCodepen, FiInstagram, FiYoutube, FiMail } from 'react-icons/fi';
// import './StickySocialMedia.css'; // Import CSS for styling

const StickySocialMedia = () => {
  // Handle click event for each social media icon
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="sticky-social-media">
      <div className="social-media-icon" onClick={() => handleClick('#')}>
        <FiTwitter />
      </div>
      <div className="social-media-icon" onClick={() => handleClick('https://github.com/Rohini-k73')}>
        <FiGithub />
      </div>
      <div className="social-media-icon" onClick={() => handleClick('https://www.linkedin.com/in/rohini-kulkarni-/')}>
        <FiLinkedin />
      </div>
      <div className="social-media-icon" onClick={() => handleClick('https://instagram.com/_.dreamer_.99?igshid=NTc4MTIwNjQ2YQ==')}>
        <FiInstagram />
      </div>
      <div className="social-media-icon" onClick={() => handleClick('https://youtube.com/@status_D')}>
        <FiYoutube />
      </div>
     
    </div>
  );
};

export default StickySocialMedia;
