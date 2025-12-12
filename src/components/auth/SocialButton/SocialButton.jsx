import React from 'react';
import './SocialButton.css';

const SocialButton = ({ icon, text, onClick }) => {
  return (
    <button 
      className="social-btn" 
      type="button" 
      onClick={onClick}
    >
      <span className="social-icon">{icon}</span> 
      <span className="social-text">{text}</span>
    </button>
  );
};

export default SocialButton;