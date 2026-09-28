import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Experience', value: '10+ Years' },
    { label: 'Trucks Fleet', value: '50+ Trucks' },
    { label: 'Coverage', value: '48 States' },
    { label: 'On-Time Rate', value: '99%' },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800"
              alt="RoadLine Trucking Semi Truck on Highway"
              className="about-image"
            />
            <div className="about-badge">
              <div className="about-badge-number">99%</div>
              <div className="about-badge-text">Satisfaction Guaranteed</div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-subtitle">About RoadLine Trucking</span>
            <h2 className="section-title">Moving America Forward</h2>
            <p className="section-description" style={{ textAlign: 'left', margin: '1rem 0 1.5rem 0' }}>
              RoadLine Trucking provides safe, reliable, and efficient transportation services throughout the United States.
              Founded with a mission to simplify freight logistics, we combine cutting-edge technology with experienced drivers to ensure every shipment reaches its destination safely and on schedule.
            </p>

            <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', fontWeight: '500' }}>
                <CheckCircle2 color="#d97706" size={20} /> Advanced route optimization and tracking system
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', fontWeight: '500' }}>
                <CheckCircle2 color="#d97706" size={20} /> Highly certified and safety-vetted commercial drivers
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '500' }}>
                <CheckCircle2 color="#d97706" size={20} /> Modern, eco-friendly, and well-maintained freight equipment
              </li>
            </ul>

            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
