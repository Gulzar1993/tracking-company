import { Truck, Package, Zap, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'ftl',
      icon: <Truck size={32} />,
      title: 'Full Truckload (FTL)',
      description: 'Dedicated full truckload services for high-volume cargo requiring fast, direct, and uninterrupted delivery across North America.',
    },
    {
      id: 'ltl',
      icon: <Package size={32} />,
      title: 'Less Than Truckload (LTL)',
      description: 'Cost-effective freight shipping solutions for smaller shipments that don’t require a full truckload space.',
    },
    {
      id: 'expedited',
      icon: <Zap size={32} />,
      title: 'Expedited Freight',
      description: 'Time-critical freight transportation with express priority routing and guaranteed delivery schedules.',
    },
    {
      id: 'dedicated',
      icon: <Shield size={32} />,
      title: 'Dedicated Transportation',
      description: 'Customized fleet solutions providing dedicated trucks, professional drivers, and tailored equipment for your exact supply chain needs.',
    },
  ];

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">What We Offer</span>
          <h2 className="section-title">Comprehensive Freight Services</h2>
          <p className="section-description">
            We deliver tailored freight solutions designed to meet the demands of modern commerce and complex logistics operations.
          </p>
        </div>

        <div className="grid grid-4">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
