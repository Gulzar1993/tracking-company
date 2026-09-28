import { Truck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo-link">
              <div className="logo-icon">
                <Truck size={30} />
              </div>
              <span>RoadLine <span className="logo-accent">Trucking</span></span>
            </a>
            <p>
              Professional trucking and freight logistics solutions across the United States. Premium service, modern fleet, and on-time delivery guaranteed.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#fleet">Our Fleet</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Full Truckload (FTL)</a></li>
              <li><a href="#services">Less Than Truckload (LTL)</a></li>
              <li><a href="#services">Expedited Freight</a></li>
              <li><a href="#services">Dedicated Transportation</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} RoadLine Trucking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
