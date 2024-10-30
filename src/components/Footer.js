import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css'; // Ensure this file exists or remove if not needed
import habotLogo from '../images/habot-logo.jpg';
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-image">
        <img src={habotLogo} alt="HABOT Logo" />
          <p>© R Singhania</p>
        </div>
        <div className="footer-links" style={{ display: 'flex' }}>
          <div style={{ marginRight: '40px' }}>
            <strong>Company</strong>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div>
            <strong>Resources</strong>
            <p>Blog</p>
            <p>Help Center</p>
          </div>
        </div>
        <div className="footer-icons" style={{ display: 'flex', alignItems: 'center' }}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter style={{ color: 'white', margin: '0 10px' }} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ color: 'white', margin: '0 10px' }} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF style={{ color: 'white', margin: '0 10px' }} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn style={{ color: 'white', margin: '0 10px' }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
