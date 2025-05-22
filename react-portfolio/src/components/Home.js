import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home-section">
      <div className="home-content">
        <h1>Mehmet Efe</h1>
        <p className="subtitle">Full Stack Developer</p>
        <div className="cta-buttons">
          <a href="/about" className="btn primary-btn">Hakkımda</a>
          <a href="/contact" className="btn secondary-btn">İletişim</a>
        </div>
      </div>
    </section>
  );
}

export default Home;