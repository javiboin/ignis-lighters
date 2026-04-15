import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isProfileActive, setIsProfileActive] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();
  return (
    <header className="ecommerce-header">
      <div className="header-container">
        {/* LOGO */}
        <Link to="/" className="brand-logo" style={{ textDecoration: 'none' }}>
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
        </Link>

        {/* NAVIGATION */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" className="nav-link">Inicio</Link></li>
            <li className="nav-item"><Link to="/coleccion" className="nav-link">Colección</Link></li>
            <li className="nav-item"><Link to="/premium" className="nav-link">Premium</Link></li>
            <li className="nav-item"><Link to="/nosotros" className="nav-link">Nosotros</Link></li>
          </ul>
        </nav>

        {/* ACTIONS */}
        <div className="header-actions">
          <div className={`search-container ${isSearchActive ? 'active' : ''}`}>
            <input
              type="text"
              className="search-input"
              placeholder="Buscar encendedores..."
              autoFocus={isSearchActive}
            />
            <button
              className="icon-btn search-btn"
              aria-label="Buscar"
              onClick={() => setIsSearchActive(!isSearchActive)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>

          <div className="profile-container">
            <button
              className="icon-btn profile-btn"
              aria-label="Perfil"
              onClick={() => setIsProfileActive(!isProfileActive)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
            <div className={`profile-dropdown ${isProfileActive ? 'active' : ''}`}>
              <a href="#login" className="dropdown-link">Iniciar sesión / Registrarse</a>
            </div>
          </div>

          <button className="icon-btn cart-btn" aria-label="Carrito de compras" onClick={() => setIsCartOpen(true)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>

      {/* Cart Offcanvas */}
      <div className={`cart-overlay ${isCartOpen ? 'active' : ''}`} onClick={() => setIsCartOpen(false)}></div>
      <div className={`cart-offcanvas ${isCartOpen ? 'active' : ''}`}>
        <div className="cart-header">
          <h2>Tu Carrito</h2>
          <button className="close-cart-btn" onClick={() => setIsCartOpen(false)} aria-label="Cerrar carrito">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#a1a1aa', marginTop: '2rem' }}>Tu carrito está vacío.</div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image || "/hero-lighter.png"} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">{item.price}</p>
                  <div className="cart-item-qty">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="remove-item-btn" onClick={() => removeFromCart(item.id)} aria-label="Eliminar">&times;</button>
              </div>
            ))
          )}
        </div>
        <div className="cart-offcanvas-footer">
          <div className="cart-total">
            <span>Subtotal</span>
            <span className="total-price">${cartTotal.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Finalizar Compra</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
