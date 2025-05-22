import React, { useRef, useEffect } from 'react';
import './Contact.css';

function Contact() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const subject = `İletişim Formu - ${formData.get('name')}`;
    const body = `İsim: ${formData.get('name')}%0D%0ASoyisim: ${formData.get('surname')}%0D%0AE-posta: ${formData.get('email')}%0D%0AMesaj: ${formData.get('message')}`;
    window.location.href = `mailto:mefeyld@gmail.com?subject=${subject}&body=${body}`;
  };

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
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="surname">Soyisim</label>
              <input type="text" id="surname" name="surname" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesaj</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn">Gönder</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
