import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { path: '/', text: 'Ana Sayfa', icon: 'fas fa-home' },
    { path: '/about', text: 'Hakkımda', icon: 'fas fa-user' },
    { path: '/contact', text: 'İletişim', icon: 'fas fa-envelope' }
  ];

  const socialLinks = [
    { url: 'https://github.com/yourusername', icon: 'fab fa-github' },
    { url: 'https://linkedin.com/in/yourusername', icon: 'fab fa-linkedin' },
    { url: 'https://twitter.com/yourusername', icon: 'fab fa-twitter' }
  ];

  return (
    <>
      <div className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <Link to="/">
              <img src="/logo.png" alt="Logo" />
            </Link>
          </div>

          <ul className="nav-menu">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <i className={item.icon}></i>
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
