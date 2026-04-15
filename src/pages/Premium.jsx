import { useState } from 'react';
import './Premium.css';

const Premium = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const premiumProducts = [
    {
      id: 1,
      name: 'Obsidian Black',
      desc: 'Acabado en negro obsidiana con detalles en oro puro de 18K. Llama cálida inigualable, diseño ultradelgado para un agarre perfecto.',
      image: '/premium-black.png',
      price: '$249.99'
    },
    {
      id: 2,
      name: 'Pure Silver Refined',
      desc: 'Plata de ley sólida con patrones artesanales finamente engarzados. Estética madura y un fuego constante en cada encendido.',
      image: '/premium-silver.png',
      price: '$319.99'
    },
    {
      id: 3,
      name: 'Titanium Elite',
      desc: 'Cuerpo de titanio macizo cepillado. Incorpora una llama dual de última tecnología con un núcleo de plasma envolvente.',
      image: '/premium-titanium.png',
      price: '$459.99'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === premiumProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? premiumProducts.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="premium-page">
      {/* Hero Section */}
      <div className="premium-hero">
        <h1 className="premium-title">Colección <span>Premium</span></h1>
        <p className="premium-subtitle">
          Donde la ingeniería superior se encuentra con el lujo absoluto. 
          Diseñados exclusivamente para los verdaderos conocedores del arte del fuego.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="premium-carousel-container">
        
        <button className="carousel-control prev" onClick={prevSlide} aria-label="Anterior">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="premium-carousel-track">
          {premiumProducts.map((product, index) => (
            <div 
              className="premium-card-wrapper" 
              key={product.id}
              style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
            >
              <div className="premium-card">
                <div className="card-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-img" />
                  <div className="glowing-backdrop"></div>
                </div>
                <div className="card-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.desc}</p>
                  <div className="card-footer">
                    <span className="price">{product.price}</span>
                    <button className="add-btn">Añadir al Carrito</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control next" onClick={nextSlide} aria-label="Siguiente">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div className="carousel-indicators">
          {premiumProducts.map((_, index) => (
            <button 
              key={index} 
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir a tarjeta ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Premium;
