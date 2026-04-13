import './Header.css';

const Header = () => {
  return (
    <header className="ecommerce-header">
      <div className="header-container">
        {/* LOGO */}
        <div className="brand-logo">
          <svg className="fire-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C12 22 18 16.5 18 11.5C18 7.5 14.5 4 12 2C9.5 4 6 7.5 6 11.5C6 16.5 12 22 12 22Z" fill="url(#fireGradient)" />
            <path d="M12 21.5C12 21.5 16 17 16 13C16 10 13.5 7.5 12 6C10.5 7.5 8 10 8 13C8 17 12 21.5 12 21.5Z" fill="#FFAA00" />
            <defs>
              <linearGradient id="fireGradient" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF3300" />
                <stop offset="1" stopColor="#FF8800" />
              </linearGradient>
            </defs>
          </svg>
          <span className="brand-text">Ignis</span>
        </div>

        {/* NAVIGATION */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#inicio" className="nav-link active">Inicio</a></li>
            <li className="nav-item"><a href="#coleccion" className="nav-link">Colección</a></li>
            <li className="nav-item"><a href="#premium" className="nav-link">Premium</a></li>
            <li className="nav-item"><a href="#nosotros" className="nav-link">Nosotros</a></li>
          </ul>
        </nav>

        {/* ACTIONS */}
        <div className="header-actions">
          <button className="icon-btn search-btn" aria-label="Buscar">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <button className="icon-btn profile-btn" aria-label="Perfil">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>

          <button className="icon-btn cart-btn" aria-label="Carrito de compras">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="cart-badge">3</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
