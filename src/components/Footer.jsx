import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'; // You can add more icons as needed

function Footer() {
  return (
    <div className="bg-white text-black py-8 mt-16">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left">
          
          {/* About Section */}
          <div className="mb-8 sm:mb-0">
            <h2 className="text-2xl font-bold text-red-500 mb-2">Sneha Kumari</h2>
            <p className="text-lg">Full-Stack Developer | Passionate about Web Development</p>
          </div>

          {/* Social Media Links */}
          <div className="mb-8 sm:mb-0">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Connect with Me</h3>
            <div className="flex space-x-6 justify-center sm:justify-start">
              <a href="https://www.linkedin.com/in/sneha-kumari-05137029a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-2xl hover:text-red-500 transition duration-300" />
              </a>
              <a href="https://github.com/snehakumari8801" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl hover:text-red-500 transition duration-300" />
              </a>
              <a href="https://twitter.com/snehakumari8801" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-red-500 transition duration-300" />
              </a>
            </div>
          </div>

          {/* Contact & Copyright */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Contact</h3>
            <p className="text-lg">Email: <a href="mailto:snehakumari8801@gmail.com" className="text-blue-800 hover:underline">snehakumari8801@gmail.com</a></p>
            <p className="mt-4 text-sm text-gray-900">© 2025 Sneha Kumari. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
