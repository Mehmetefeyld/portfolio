import React, { useEffect, useRef } from 'react';
import './About.css';

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Hakkımda</h2>
        <div className="about-content">
          <div className="about-text">
            <div className="about-header">
              <h3>Mehmet Efe Yıldıran</h3>
              <p className="subtitle">Bilgisayar Mühendisliği 3. Sınıf Öğrencisi & Oyun Geliştiricisi</p>
            </div>
            <p className="about-description">
              Balıkesir Üniversitesi'nde Bilgisayar Mühendisliği eğitimime devam ederken, tutkuyla oyun geliştirme 
              alanında kendimi geliştiriyorum. Çeşitli game jam etkinliklerine katılarak yaratıcı projeler geliştirdim 
              ve bu süreçte değerli deneyimler kazandım.
            </p>
            <div className="skills-grid">
              <div className="skill-card">
                <i className="fas fa-gamepad"></i>
                <h4>Oyun Geliştirme</h4>
                <p>Unity, C#</p>
              </div>
              <div className="skill-card">
                <i className="fas fa-code"></i>
                <h4>Programlama</h4>
                <p>C++, C, Python, Java</p>
              </div>
              <div className="skill-card">
                <i className="fas fa-globe"></i>
                <h4>Web Teknolojileri</h4>
                <p>JavaScript, React, HTML, CSS</p>
              </div>
            </div>
            <div className="projects-section" id="portfolio">
              <h3>Öne Çıkan Projelerim</h3>
              <div className="projects-grid">
                <a href="https://github.com/Mehmetefeyld/adam-asmaca" className="project-card" target="_blank" rel="noopener noreferrer">
                  <div className="project-content">
                    <i className="fas fa-gamepad"></i>
                    <h4>Adam Asmaca Oyunu</h4>
                    <p>Klasik kelime tahmin oyununun modern bir yorumu. JavaScript ile geliştirilmiş interaktif bir oyun.</p>
                  </div>
                </a>
                <a href="https://github.com/sbugrayy/Gamejam-Proje" className="project-card" target="_blank" rel="noopener noreferrer">
                  <div className="project-content">
                    <i className="fas fa-ghost"></i>
                    <h4>Gamejam Projesi</h4>
                    <p>Game Jam etkinliğinde geliştirilen heyecan verici bir oyun projesi. Unity ve C# ile geliştirildi.</p>
                  </div>
                </a>
                <a href="https://github.com/beytullah-cakir/MyRoadMate" className="project-card" target="_blank" rel="noopener noreferrer">
                  <div className="project-content">
                    <i className="fas fa-road"></i>
                    <h4>MyRoadMate</h4>
                    <p>Yol arkadaşı bulma ve seyahat planlaması yapmanızı sağlayan kapsamlı bir uygulama.</p>
                  </div>
                </a>
                <a href="https://github.com/Mehmetefeyld/Star_Raiders" className="project-card" target="_blank" rel="noopener noreferrer">
                  <div className="project-content">
                    <i className="fas fa-space-shuttle"></i>
                    <h4>Star Raiders</h4>
                    <p>Uzay temalı bir macera oyunu. Unity ile geliştirilmiş, heyecan verici bir uzay savaşı deneyimi.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="profile-section">
            <div className="profile-image">
              <img src="/foto.jpg" alt="Mehmet Efe Yıldıran" />
            </div>
            <div className="social-links">
              <a href="https://github.com/Mehmetefeyld" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/mehmet-efe-yıldıran-27823b266/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;