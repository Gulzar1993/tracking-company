import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <ShieldCheck size={18} />
            <span>Trusted Coast-to-Coast Shipping</span>
          </div>
          <h1 className="hero-title">
            Reliable Freight. <span>Delivered On Time.</span>
          </h1>
          <p className="hero-subtitle">
            Professional trucking and logistics solutions across the United States. Modern fleet, real-time tracking, and dedicated dispatch services for all your cargo needs.
          </p>
          <div className="hero-buttons">
            <a href="#quote" className="btn btn-primary">
              Get a Quote <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn btn-secondary">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
