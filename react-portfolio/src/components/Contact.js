import React, { useRef, useEffect, useState } from 'react';
import './Contact.css';

function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  const contactInfo = [
    {
      title: 'Email',
      text: 'example@email.com',
      icon: 'fas fa-envelope'
    },
    {
      title: 'Telefon',
      text: '+90 555 123 4567',
      icon: 'fas fa-phone'
    },
    {
      title: 'Konum',
      text: 'İstanbul, Türkiye',
      icon: 'fas fa-map-marker-alt'
    }
  ];

  return (
    <section id="contact" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">İletişim</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Benimle İletişime Geçin</h3>
            <p>
              Proje önerileriniz, iş birliği teklifleriniz veya herhangi bir sorunuz için
              aşağıdaki formu doldurabilir veya doğrudan e-posta gönderebilirsiniz.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:mefeyld@gmail.com">mefeyld@gmail.com</a>
              </div>
              <div className="contact-item">
                <i className="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/mehmet-efe-yıldıran-27823b266/" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profilim
                </a>
              </div>
              <div className="contact-item">
                <i className="fab fa-github"></i>
                <a href="https://github.com/Mehmetefeyld" target="_blank" rel="noopener noreferrer">
                  GitHub Profilim
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">İsim</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Adınız"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Email adresiniz"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesaj</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Mesajınız"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Gönder</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
