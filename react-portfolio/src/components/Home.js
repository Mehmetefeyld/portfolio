import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content">
          <h1>Merhaba, Ben Mehmet Efe YILDIRAN</h1>
          <p className="subtitle">Game Developer / Web Designer / Öğrenci</p>
          <div className="cta-buttons">
            <a href="#portfolio" className="btn primary-btn">Projelerimi Gör</a>
            <a href="#contact" className="btn secondary-btn">İletişime Geç</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;