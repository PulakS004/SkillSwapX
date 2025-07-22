import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-[#1A1446] text-white py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img
            src="\logo.jpg"
            alt="Company Logo"
            className="mb-4"
            width="50"
            height="50"
          />
          <h1 className="text-2xl font-bold mb-4">Swyft</h1>
          <p className="mb-4">
            A Barter based skill exchange platform to find you the right partner to learn new skills.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-pink-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-pink-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-pink-500">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Navigation</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Our Services</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Reviews</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">
            Our Support and Sales team is available 24/7 to answer your queries
          </p>
          <div className="flex items-center mb-2">
            <i className="fas fa-map-marker-alt text-pink-500 mr-2"></i>
            <p>123 Main St, gurgaon, Delhi-NCR</p>
          </div>
          <div className="flex items-center">
            <i className="fas fa-phone-alt text-pink-500 mr-2"></i>
            <p>+91-9868453162</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        <p>COPYRIGHT © 2025 Swyft </p>
        <div className="mt-2">
          <a href="#" className="hover:underline">TERM OF USE</a> | <a href="#" className="hover:underline">PRIVACY POLICY</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
