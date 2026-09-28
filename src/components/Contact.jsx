import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact RoadLine Trucking</h2>
          <p className="section-description">
            Have questions about our freight services or need immediate dispatch assistance? We are available 24/7.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-card">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MapPin size={24} />
              </div>
              <div>
                <div className="contact-info-title">Headquarters</div>
                <div className="contact-info-text">RoadLine Trucking</div>
                <div style={{ color: '#475569' }}>Chicago, IL</div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Phone size={24} />
              </div>
              <div>
                <div className="contact-info-title">24/7 Phone Support</div>
                <div className="contact-info-text">(773) 555-0100</div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Mail size={24} />
              </div>
              <div>
                <div className="contact-info-title">Email Contact</div>
                <div className="contact-info-text">dispatch@roadlinetrucking.com</div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Clock size={24} />
              </div>
              <div>
                <div className="contact-info-title">Operating Hours</div>
                <div className="contact-info-text">24/7 Dispatch Operations</div>
              </div>
            </div>
          </div>

          <div className="contact-map-placeholder">
            <MapPin size={48} style={{ color: '#d97706', marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.75rem', marginBottom: '0.5rem' }}>CHICAGO HUB HEADQUARTERS</h3>
            <p style={{ color: '#94a3b8', maxWidth: '300px' }}>
              Strategically positioned in Chicago, IL for nationwide interstate freight connectivity across 48 states.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
