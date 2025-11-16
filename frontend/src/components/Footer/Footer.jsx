// src/components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';          // ← NEW
import './Footer.css';
import { assets } from '../../assets/assets.js';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">

        {/* LEFT – LOGO & SOCIAL */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="KimDeli logo" />
          <p>Food Delivery Web.</p>
          <div className="footer-social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
          </div>
        </div>

        {/* CENTER – COMPANY (clickable) */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/delivery">Delivery</Link></li>
            <li><Link to="/privacy">Privacy policy</Link></li>
          </ul>
        </div>

        {/* RIGHT – CONTACT */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1 234 567 890</li>
            <li>kimdeli@food.com</li>
          </ul>
        </div>

      </div>

      <hr />
      <p className='footer-copyright'>
        Copyright 2025 © KimDeli.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;