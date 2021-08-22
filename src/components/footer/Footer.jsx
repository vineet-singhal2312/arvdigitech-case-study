import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-center-div">
        <div className="contact-about-us-list-div">
          <h3>About Us</h3>
          <ul className="contact-about-us-list">
            <li className="contact-about-us-list-item">We're Hiring</li>
            <li className="contact-about-us-list-item">Our Customer</li>
            <li className="contact-about-us-list-item">Blog Post</li>
            <li className="contact-about-us-list-item">Help & Support</li>
          </ul>
        </div>
        <div className="contact-about-us-list-div">
          <h3>Contact</h3>
          <ul className="contact-about-us-list">
            <li className="contact-about-us-list-item">+123456789</li>
            <li className="contact-about-us-list-item">Contact us</li>
          </ul>
        </div>
      </div>
      <div className="footer-left">
        <div className="footer-social-media">
          <p className="footer-social-media-line">
            Reach Out to our Social Media channels
            <i className="fab fa-accessible-icon"></i>
          </p>

          <div className="footer-icons">
            <div className="footer-icon">
              {" "}
              <p>
                <FaFacebookF id="icon" />
              </p>
            </div>
            <div className="footer-icon">
              <p>
                <AiOutlineTwitter id="icon" />
              </p>
            </div>
            <div className="footer-icon">
              <p>
                <AiFillYoutube id="icon" />
              </p>
            </div>
          </div>
        </div>
        <div className="copyright-content-div">
          copyright @ 2021 arvdigitech all rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
