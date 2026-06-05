import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="container pt-3">
        <div className="row gy-4">
          {/* Company Info */}
          <div className="col-lg-3 col-md-6">
            <h4>About Us</h4>
            <p className="footer-para">
              Bloom Business Solutions is dedicated to empowering professionals
              by providing specialized services in legal, finance, and
              accounting. Our mission is to enhance operational efficiency
              through comprehensive outsourcing solutions designed to meet the
              evolving needs of businesses and professional firms.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 quick-liks">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#/about">About Us</a>
              </li>
              <li>
                <a href="/#/services">Services</a>
              </li>
              <li>
                <a href="/#/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h4>Services</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">WordPress Development</a>
              </li>
              <li>
                <a href="#">React Development</a>
              </li>
              <li>
                <a href="#">UI/UX Design</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h4>Contact Us</h4>

            <p>
              <FaMapMarkerAlt className="me-2" />
              141, H block, Sector-63, Gautam Buddha Nagar,201309
            </p>

            <p>
              <FaPhoneAlt className="me-2" />
              +91 9876543210
            </p>

            <p>
              <FaEnvelope className="me-2" />
              info@bloombusinesssolution.com
            </p>
             <div className="social-icons">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className="text-center copyright">
          <p className="mb-0">
            © 2026 Bloom Business Solution. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
