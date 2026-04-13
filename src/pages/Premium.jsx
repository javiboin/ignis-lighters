import './Premium.css';

const Premium = () => {
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

      {/* Gallery Section */}
      <div className="premium-gallery">
        {premiumProducts.map(product => (
          <div className="premium-card" key={product.id}>
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
        ))}
      </div>
    </section>
  );
};

export default Premium;
