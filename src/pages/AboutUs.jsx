import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <span className="badge-accent">Nuestra Historia</span>
          <h1 className="about-title">Forjados en el <span>fuego</span></h1>
          <p className="about-subtitle">
            Desde 2026, redefiniendo lo que significa llevar la llama contigo.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text-content">
            <h2>Nuestra Misión</h2>
            <p>
              Ignis nació de la creencia de que un encendedor no es solo una herramienta, sino una declaración de estilo, un compañero de vida y una pequeña obra de arte mecánicamente perfecta.
            </p>
            <p>
              Diseñamos cada encendedor con precisión milimétrica, utilizando materiales de grado aeroespacial y garantizando un nivel de confiabilidad absoluto en cualquier condición. Nuestra llama nunca te abandona.
            </p>
          </div>
          
          <div className="about-image-wrapper">
             <div className="abstract-glow"></div>
             <div className="glass-panel">
               <div className="panel-stat">
                 <span className="number">100%</span>
                 <span className="label">Artesanal</span>
               </div>
               <div className="panel-stat">
                 <span className="number">V2</span>
                 <span className="label">Tecnología Llama</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
