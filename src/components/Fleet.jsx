import { Truck, Navigation, Wrench, UserCheck } from 'lucide-react';

export default function Fleet() {
  const fleetItems = [
    {
      id: 'modern-trucks',
      title: 'Modern Trucks',
      description: 'Late-model semi-trucks equipped with fuel-efficient engines, climate control, and low-emission technology for reliable haulage.',
      image: 'https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?auto=format&fit=crop&q=80&w=600',
      icon: <Truck size={24} />,
    },
    {
      id: 'gps-tracking',
      title: 'GPS Tracking',
      description: 'Real-time satellite GPS tracking on every rig, giving shippers live visibility and precise ETA predictions 24/7.',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600',
      icon: <Navigation size={24} />,
    },
    {
      id: 'regular-maintenance',
      title: 'Regular Maintenance',
      description: 'Rigorous preventative maintenance schedules and multi-point inspections ensure zero unexpected downtime on critical routes.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600',
      icon: <Wrench size={24} />,
    },
    {
      id: 'professional-drivers',
      title: 'Professional Drivers',
      description: 'Experienced CDL-A drivers with spotless safety records, extensive highway training, and commitment to cargo integrity.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
      icon: <UserCheck size={24} />,
    },
  ];

  return (
    <section id="fleet" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Capabilities</span>
          <h2 className="section-title">Our Fleet & Standards</h2>
          <p className="section-description">
            We maintain top-tier equipment and rigorous operational standards to ensure maximum safety and efficiency on the road.
          </p>
        </div>

        <div className="grid grid-4">
          {fleetItems.map((item) => (
            <div key={item.id} className="fleet-card">
              <img src={item.image} alt={item.title} className="fleet-image" />
              <div className="fleet-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#d97706', marginBottom: '0.5rem' }}>
                  {item.icon}
                </div>
                <h3 className="fleet-title">{item.title}</h3>
                <p className="fleet-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
