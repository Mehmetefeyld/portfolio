import React, { useEffect } from 'react';
import './App.css'; // varsayılan stil dosyan
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
/*
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';*/

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="App">
      {/* Sol sabit navbar */}
      <Navbar />

      {/* Navbar'la çakışmaması için sola margin veren ana içerik */}
      <div className="main-content">
        
      <Home />
      <About />
      <Contact />
      </div>
    </div>
  );
}

export default App;
