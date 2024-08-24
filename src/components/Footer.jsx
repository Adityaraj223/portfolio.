import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const openLinkedInProfile = () => {
    window.open(
      "https://www.linkedin.com/in/aditya-raj-programmer-analyst",
      "_blank"
    );
  };

  const openTwitterProfile = () => {
    window.open("https://twitter.com/adityarajr77482", "_blank");
  };

  return (
    <footer className="bg-gray-900 text-gray-200 py-16 md:px-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Social Media Icons */}
        <div className="flex items-center gap-6 mb-8">
          <FaTwitter
            className="text-3xl cursor-pointer hover:text-primary transition-transform transform hover:scale-125 duration-300"
            onClick={openTwitterProfile}
          />
          <FaLinkedin
            className="text-3xl cursor-pointer hover:text-primary transition-transform transform hover:scale-125 duration-300"
            onClick={openLinkedInProfile}
          />
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Aditya Raj. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
