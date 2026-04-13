import './Collection.css';

const Collection = () => {
  const products = [
    { id: 1, name: 'Ignis Clásico Plata', price: '$49.99', category: 'Clásico' },
    { id: 2, name: 'Ignis Matte Negro', price: '$54.99', category: 'Moderno' },
    { id: 3, name: 'Ignis Fuego Azul', price: '$59.99', category: 'Sport' },
    { id: 4, name: 'Ignis Vintage Oro', price: '$89.99', category: 'Vintage' },
    { id: 5, name: 'Ignis Carbon Fiber', price: '$79.99', category: 'Moderno' },
    { id: 6, name: 'Ignis Slim Rose', price: '$64.99', category: 'Slim' }
  ];

  return (
    <section className="collection-page">
      <div className="collection-header">
        <h1 className="collection-title">Nuestra <span>Colección</span></h1>
        <p className="collection-subtitle">
          Explora la gama completa de encendedores Ignis. Fiabilidad diaria con un estilo inconfundible.
        </p>
      </div>

      <div className="collection-filters">
        <button className="filter-btn active">Todos</button>
        <button className="filter-btn">Clásico</button>
        <button className="filter-btn">Moderno</button>
        <button className="filter-btn">Vintage</button>
      </div>

      <div className="collection-grid">
        {products.map((product) => (
          <div className="compact-card" key={product.id}>
            <div className="compact-image-wrapper">
              <img src="/hero-lighter.png" alt={product.name} className="compact-img" />
            </div>
            <div className="compact-info">
              <span className="compact-category">{product.category}</span>
              <h3 className="compact-name">{product.name}</h3>
              <div className="compact-footer">
                <span className="compact-price">{product.price}</span>
                <button className="compact-add-btn" title="Añadir al carrito">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
