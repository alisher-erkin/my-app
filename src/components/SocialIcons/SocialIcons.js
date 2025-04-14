// src/components/SocialLinks.jsx
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF size={24} className="text-blue-600 hover:text-blue-800" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} className="text-pink-500 hover:text-pink-700" />
      </a>
      <a href="https://t.me/yourname" target="_blank" rel="noopener noreferrer">
        <FaTelegramPlane size={24} className="text-blue-400 hover:text-blue-600" />
      </a>
    </div>
  );
};

export default SocialLinks;
