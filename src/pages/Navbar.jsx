import React, { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaKaggle, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Helper function to scroll smoothly to a section
const scrollToSection = (id, setMenuOpen) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    if (setMenuOpen) setMenuOpen(false); // Close mobile menu after click
  }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = "hover:text-red-600 transition duration-300 cursor-pointer";
  const activeClass = "text-red-600 font-semibold cursor-pointer";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div 
        className="text-xl font-bold text-red-600 cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        Data Scientist
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 text-gray-800 font-medium">
        <li onClick={() => scrollToSection("home")} className={linkClass}>Home</li>
        <li onClick={() => scrollToSection("about")} className={linkClass}>About</li>
        <li onClick={() => scrollToSection("service")} className={linkClass}>Service</li>

        {/* Animated Portfolio Link */}
        <motion.li
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          animate={{
            boxShadow: "0px 0px 8px rgba(255, 0, 0, 0.6)",
            transition: { repeat: Infinity, repeatType: "reverse", duration: 1.5 }
          }}
          onClick={() => scrollToSection("portfolio")}
          className="text-red-500 font-semibold cursor-pointer"
        >
          Portfolio
        </motion.li>

        <li onClick={() => scrollToSection("resume")} className={linkClass}>Resume</li>
        <li onClick={() => scrollToSection("blog")} className={linkClass}>Blog</li>
        <li onClick={() => scrollToSection("contact")} className={linkClass}>Contact</li>
      </ul>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 text-gray-800 font-medium z-50"
        >
          <li onClick={() => scrollToSection("home", setMenuOpen)} className={linkClass}>Home</li>
          <li onClick={() => scrollToSection("about", setMenuOpen)} className={linkClass}>About</li>
          <li onClick={() => scrollToSection("service", setMenuOpen)} className={linkClass}>Service</li>
          <li onClick={() => scrollToSection("portfolio", setMenuOpen)} className={linkClass}>Portfolio</li>
          <li onClick={() => scrollToSection("resume", setMenuOpen)} className={linkClass}>Resume</li>
          <li onClick={() => scrollToSection("blog", setMenuOpen)} className={linkClass}>Blog</li>
          <li onClick={() => scrollToSection("contact", setMenuOpen)} className={linkClass}>Contact</li>

          {/* Social Icons inside mobile menu */}
          <div className="flex space-x-6 text-xl mt-4 text-gray-600">
            <a href="https://www.linkedin.com/in/zohaib-ul-hassan-66aba22ba/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-red-500 cursor-pointer" />
            </a>
            <a href="https://github.com/Zohaibuhassan" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-red-500 cursor-pointer" />
            </a>
            <a href="https://www.kaggle.com/zohaibumhassan" target="_blank" rel="noopener noreferrer">
              <FaKaggle className="hover:text-red-500 cursor-pointer" />
            </a>
          </div>
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
