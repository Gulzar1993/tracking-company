import { useState } from 'react';
import { Truck, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#home" className="logo-link">
          <div className="logo-icon">
            <Truck size={32} />
          </div>
          <span>RoadLine <span className="logo-accent">Trucking</span></span>
        </a>

        <nav>
          <ul className={`nav-menu ${isMobileOpen ? 'open' : ''}`}>
            <li>
              <a href="#home" className="nav-link" onClick={closeMobileMenu}>Home</a>
            </li>
            <li>
              <a href="#services" className="nav-link" onClick={closeMobileMenu}>Services</a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={closeMobileMenu}>About</a>
            </li>
            <li>
              <a href="#fleet" className="nav-link" onClick={closeMobileMenu}>Fleet</a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#quote" className="btn btn-primary">
            Get a Quote
          </a>
          <button
            className="mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
}
