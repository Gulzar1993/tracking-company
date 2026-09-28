import { Clock, MapPin, Award, Shield, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      id: 'dispatch',
      icon: <Clock size={24} />,
      title: '24/7 Dispatch',
      description: 'Our dispatch command center is active around the clock, offering constant communication and updates for your haul.',
    },
    {
      id: 'tracking',
      icon: <MapPin size={24} />,
      title: 'Real-Time Tracking',
      description: 'Know exactly where your cargo is with real-time location metrics and transparent timeline tracking.',
    },
    {
      id: 'drivers',
      icon: <Award size={24} />,
      title: 'Experienced Drivers',
      description: 'Our team consists of vetted, highly trained commercial driver professionals with decades of combined experience.',
    },
    {
      id: 'safety',
      icon: <Shield size={24} />,
      title: 'Safety First',
      description: 'Uncompromising safety standards, strict DOT compliance, and regular maintenance safeguard every single load.',
    },
    {
      id: 'delivery',
      icon: <CheckCircle size={24} />,
      title: 'Reliable Delivery',
      description: 'Industry-leading 99% on-time delivery rate, ensuring your business stays on schedule without delays.',
    },
  ];

  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Why Partner With Us</span>
          <h2 className="section-title">Why Choose RoadLine Trucking</h2>
          <p className="section-description">
            We deliver excellence through commitment, transparency, and top-tier logistics infrastructure.
          </p>
        </div>

        <div className="grid grid-3">
          {reasons.map((reason) => (
            <div key={reason.id} className="feature-card" style={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}>
              <div className="feature-icon">
                {reason.icon}
              </div>
              <div>
                <h3 className="feature-title" style={{ color: '#ffffff' }}>{reason.title}</h3>
                <p className="feature-desc" style={{ color: '#94a3b8' }}>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
