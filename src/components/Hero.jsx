import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Content Area */}
        <div className="hero-content">
          <div className="badge">Nueva Colección 2026</div>
          <h1 className="hero-title">El arte del <span>fuego</span> en tu bolsillo.</h1>
          <p className="hero-description">
            Descubre nuestra línea premium de encendedores. Diseño meticuloso, 
            materiales de alta gama y una llama que no se apaga ante nada.
          </p>
          
          <div className="hero-actions">
            <button className="primary-btn">Explorar Colección</button>
            <button className="secondary-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Ver Video
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">5k+</span>
              <span className="stat-label">Clientes Felices</span>
            </div>
            <div className="stat">
              <span className="stat-value">Garantía</span>
              <span className="stat-label">De por vida</span>
            </div>
          </div>
        </div>

        {/* Visual Product Area */}
        <div className="hero-visual">
          <div className="hero-glow"></div>
          {/* Using the image generated and placed in the public folder */}
          <img src="/hero-lighter.png" alt="Premium Lighter" className="hero-image" />
          
          <div className="floating-card">
            <div className="card-icon">🔥</div>
            <div className="card-text">
              <span className="card-title">A prueba de viento</span>
              <span className="card-subtitle">Tecnología Dual</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
