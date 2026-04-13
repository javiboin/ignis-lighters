import './Footer.css';

const Footer = () => {
  return (
    <footer className="ecommerce-footer">
      <div className="footer-container">
        
        {/* Left Side: Mocked Contact and Info */}
        <div className="footer-links-container">
          <div className="footer-section">
            <h3 className="footer-heading">Atención al Cliente</h3>
            <ul className="footer-list">
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#envios">Envíos y Entregas</a></li>
              <li><a href="#devoluciones">Devoluciones</a></li>
              <li><a href="#faq">Preguntas Frecuentes</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Contacto</h3>
            <ul className="footer-list contact-list">
              <li><span className="contact-icon">📍</span> Av. del Fuego 456, CABA</li>
              <li><span className="contact-icon">✉️</span> soporte@ignis.com</li>
              <li><span className="contact-icon">📞</span> +54 9 11 1234-5678</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Brand Name and Icon (Push right with margin-left) */}
        <div className="footer-brand">
          <div className="brand-logo-footer">
            <span className="brand-text-footer">Ignis</span>
            <svg className="fire-icon-footer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C12 22 18 16.5 18 11.5C18 7.5 14.5 4 12 2C9.5 4 6 7.5 6 11.5C6 16.5 12 22 12 22Z" fill="url(#fireGradientFooter)" />
              <path d="M12 21.5C12 21.5 16 17 16 13C16 10 13.5 7.5 12 6C10.5 7.5 8 10 8 13C8 17 12 21.5 12 21.5Z" fill="#FFAA00" />
              <defs>
                <linearGradient id="fireGradientFooter" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF3300" />
                  <stop offset="1" stopColor="#FF8800" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="footer-tagline">El arte del fuego en tu bolsillo.</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ignis Lighters. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
