import React, { useState, useEffect } from 'react';
import { Pizza, Phone, MapPin, Clock, Menu, X, ChefHat, Star } from 'lucide-react';
import './PizzaBox.css';

import LOGO from './assets/pizzas/LOGO_PB.png';
import CALABRISIMA from './assets/pizzas/CALABRISIMA.jpg';
import CHAMPINETA from './assets/pizzas/CHAMPINETA.jpg';
import CHOCLOLOVER from './assets/pizzas/CHOCLOLOVER.jpg';
import HAWAIANITA from './assets/pizzas/HAWAIANITA.jpg';
import MISTERIOSA from './assets/pizzas/MISTERIOSA.jpg';
import PEPAPOWER from './assets/pizzas/PEPAPOWER.jpg';
import QUESUDITA from './assets/pizzas/QUESUDITA.jpg';
import ROJA_SABROSA from './assets/pizzas/ROJA_SABROSA.jpg';

export default function PizzaBoxLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { 
      name: "Calabrísima", 
      desc: "Pizza especial con calabresa y especias", 
      price: "Bs 35",
      image: CALABRISIMA
    },
    { 
      name: "Champiñeta", 
      desc: "Jamón, Champiñones frescos y salteados con la receta especial", 
      price: "Bs 35",
      image: CHAMPINETA
    },
    { 
      name: "Choclolover", 
      desc: "Pizza con jamón, choclo y salsa especial", 
      price: "Bs 35",
      image: CHOCLOLOVER
    },
    { 
      name: "Hawaianita", 
      desc: "Jamón, piña y queso mozzarella", 
      price: "Bs 35",
      image: HAWAIANITA
    },
    { 
      name: "Misteriosa", 
      desc: "Combinación secreta de ingredientes", 
      price: "Bs 35",
      image: MISTERIOSA
    },
    { 
      name: "Pepapower", 
      desc: "Pepperoni extra con doble queso", 
      price: "Bs 35",
      image: PEPAPOWER
    },
    { 
      name: "Quesudita", 
      desc: "Cuatro quesos premium", 
      price: "Bs 35",
      image: QUESUDITA
    },
    { 
      name: "Roja Sabrosa", 
      desc: "Jamón, Pimentones preparados y condimentados con trozos de aceituna", 
      price: "Bs 35",
      image: ROJA_SABROSA
    },
  ];

  // Número de WhatsApp
  const whatsappNumber = '59160811833';

  // Función para abrir WhatsApp
  const openWhatsApp = (pizzaName = '') => {
    let message = '¡Hola! Me gustaría hacer un pedido';
    if (pizzaName) {
      message = `¡Hola! Me gustaría ordenar una pizza ${pizzaName}`;
    }
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Función para abrir Google Maps
  const openMaps = () => {
    const address = '-17.759158595659084, -63.16664874872013';
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pizza-box-landing">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-content">
            <div className="navbar-logo">
              <img 
                src={LOGO} 
                alt="Pizza Box Logo" 
                className="logo-image"
              />
            </div>
            
            <div className="navbar-links">
              {['Inicio', 'Menú', 'Nosotros', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link ${scrolled ? 'nav-link-scrolled' : ''}`}
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={scrolled ? 'menu-icon-dark' : 'menu-icon-light'} />
              ) : (
                <Menu className={scrolled ? 'menu-icon-dark' : 'menu-icon-light'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              {['Inicio', 'Menú', 'Nosotros', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="mobile-menu-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-overlay-dark"></div>
        
        <div className="hero-content">
          <h1 className="hero-title">Pizza Box</h1>
          <p className="hero-subtitle">
            Las mejores pizzas artesanales de Santa Cruz
          </p>
          <div className="hero-buttons">
            <a href="#menú" className="btn btn-primary">
              Ver Menú
            </a>
            <button 
              onClick={() => openWhatsApp()}
              className="btn btn-secondary"
            >
              Ordenar Ahora
            </button>
          </div>
        </div>

        {/* Decorative Pizza Icons */}
        <div className="pizza-decoration pizza-left">
          <Pizza className="pizza-icon" />
        </div>
        <div className="pizza-decoration pizza-right">
          <Pizza className="pizza-icon" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <ChefHat className="feature-icon" />
              </div>
              <h3 className="feature-title">Ingredientes Frescos</h3>
              <p className="feature-text">Seleccionamos los mejores ingredientes para cada pizza</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Clock className="feature-icon" />
              </div>
              <h3 className="feature-title">Entrega Rápida</h3>
              <p className="feature-text">Tu pizza caliente en 30 minutos o menos</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Star className="feature-icon" />
              </div>
              <h3 className="feature-title">Calidad Premium</h3>
              <p className="feature-text">Recetas artesanales con pasión por la perfección</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menú" className="menu-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestro Menú</h2>
            <p className="section-subtitle">Descubre nuestras deliciosas pizzas artesanales</p>
          </div>

          <div className="menu-grid">
            {menuItems.map((item, index) => (
              <div key={index} className="menu-card">
                <div className="menu-card-image">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="menu-pizza-img"
                    />
                  ) : (
                    <Pizza className="menu-pizza-icon" />
                  )}
                </div>
                <div className="menu-card-content">
                  <h3 className="menu-card-title">{item.name}</h3>
                  <p className="menu-card-desc">{item.desc}</p>
                  <div className="menu-card-footer">
                    <span className="menu-card-price">{item.price}</span>
                    <button 
                      className="menu-card-btn"
                      onClick={() => openWhatsApp(item.name)}
                    >
                      Ordenar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="about-title">Descubre el secreto de La Misteriosa</h2>
              <p className="about-text">
                ¿Por qué es la favorita de todos? Quizás sea el contraste perfecto entre lo salado del tocino crocante y el toque dulce de nuestra cebolla caramelizada. O tal vez sea esa base generosa de muzzarella fundida.
              </p>
              <p className="about-text">
                No te quedes con la duda. Pide la #1 de la casa y entiende por qué quien la prueba, repite.
              </p>
              <div className="about-badge">
                <Star className="about-badge-icon" />
                <span className="about-badge-text">Producto más vendido</span>
              </div>
            </div>
            <div className="about-image">
              <img 
                src={MISTERIOSA} 
                alt="Pizza Misteriosa - Producto más vendido"
                className="about-pizza-img"
              />
              <div className="about-overlay">
                <h3 className="about-overlay-title">Pizza Misteriosa</h3>
                <p className="about-overlay-text">¡Nuestra especialidad más vendida!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contáctanos</h2>
            <p className="section-subtitle">Estamos listos para preparar tu pizza favorita</p>
          </div>

          <div className="contact-grid">
            <div 
              className="contact-card contact-card-clickable"
              onClick={() => openWhatsApp()}
            >
              <div className="contact-icon-wrapper">
                <Phone className="contact-icon" />
              </div>
              <h3 className="contact-title">Teléfono</h3>
              <p className="contact-text">+591 60811833</p>
              <p className="contact-text-small">Haz clic para ordenar por WhatsApp</p>
            </div>

            <div 
              className="contact-card contact-card-clickable"
              onClick={openMaps}
            >
              <div className="contact-icon-wrapper">
                <MapPin className="contact-icon" />
              </div>
              <h3 className="contact-title">Dirección</h3>
              <p className="contact-text">Av. Alemana 3er anillo externo #123</p>
              <p className="contact-text">Santa Cruz Bolivia, Bolivia</p>
              <p className="contact-text-small">Haz clic para ver en el mapa</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <Clock className="contact-icon" />
              </div>
              <h3 className="contact-title">Horario</h3>
              <p className="contact-text">Lun - Dom</p>
              <p className="contact-text">17:30 PM - 1:00 AM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img 
              src={LOGO} 
              alt="Pizza Box Logo" 
              className="footer-logo-image"
            />
          </div>
          <p className="footer-subtitle">Las mejores pizzas artesanales de Santa Cruz</p>
          <p className="footer-copyright">© 2025 Pizza Box. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}