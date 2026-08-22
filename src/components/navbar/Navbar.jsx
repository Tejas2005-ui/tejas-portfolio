import { useState } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Download,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Blog", href: "#blog" },
  ];

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("light-mode");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="logo">
          TEJAS<span>.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="nav-actions">

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="GitHub"
          >
            <FaGithub size={19} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn    size={19} />
          </a>

          {/* Theme */}
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          {/* Resume */}
          <a href="https://drive.google.com/file/d/1dlODMCB-rPw_mbO6wnNn2V-9BK5TajRN/view?usp=sharing" className="resume-btn">
            <Download size={17} />
            Resume
          </a>

          {/* Let's Talk */}
          <a href="#contact" className="talk-btn">
            Let's Talk
            <ArrowUpRight size={17} />
          </a>

          {/* Mobile Menu */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          
        </div>
      )}
    </header>
  );
}


export default Navbar;