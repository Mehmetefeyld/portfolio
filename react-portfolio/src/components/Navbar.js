import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        <div className="nav-container">
          <a href="/" className="nav-logo">
            Mehmet Efe
          </a>

          <ul className="nav-menu">
            <li>
              <a href="#home" onClick={closeMenu}>
                <i className="fas fa-home"></i>
                Ana Sayfa
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                <i className="fas fa-user"></i>
                Hakkımda
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={closeMenu}>
                <i className="fas fa-code"></i>
                Projeler
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                <i className="fas fa-envelope"></i>
                İletişim
              </a>
            </li>
          </ul>

          <div className="nav-social">
            <a href="https://github.com/Mehmetefeyld" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
