import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    deliveryLocation: '',
    freightType: 'FTL',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.pickupLocation.trim()) newErrors.pickupLocation = 'Pickup location is required';
    if (!formData.deliveryLocation.trim()) newErrors.deliveryLocation = 'Delivery location is required';
    if (!formData.freightType) newErrors.freightType = 'Freight type is required';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      setErrors({});
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      pickupLocation: '',
      deliveryLocation: '',
      freightType: 'FTL',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="quote" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get Started</span>
          <h2 className="section-title">Request a Free Freight Quote</h2>
          <p className="section-description">
            Fill out the form below and our dispatch team will get back to you within 15 minutes with competitive pricing.
          </p>
        </div>

        <div className="quote-container">
          {submitted ? (
            <div className="form-success">
              <CheckCircle size={48} style={{ margin: '0 auto 1rem auto', color: '#166534' }} />
              <h3 className="form-success-title">Quote Request Received!</h3>
              <p>Thank you, <strong>{formData.name}</strong>. Our dispatch team is preparing your custom rate quote and will contact you at <strong>{formData.email}</strong> shortly.</p>
              <button onClick={handleReset} className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="error-msg">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                  />
                  {errors.phone && <span className="error-msg">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="freightType" className="form-label">Freight Type *</label>
                  <select
                    id="freightType"
                    name="freightType"
                    className={`form-select ${errors.freightType ? 'error' : ''}`}
                    value={formData.freightType}
                    onChange={handleChange}
                  >
                    <option value="FTL">Full Truckload (FTL)</option>
                    <option value="LTL">Less Than Truckload (LTL)</option>
                    <option value="Expedited">Expedited Freight</option>
                    <option value="Dedicated">Dedicated Transportation</option>
                  </select>
                  {errors.freightType && <span className="error-msg">{errors.freightType}</span>}
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="pickupLocation" className="form-label">Pickup Location *</label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    className={`form-input ${errors.pickupLocation ? 'error' : ''}`}
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder="City, State or ZIP"
                  />
                  {errors.pickupLocation && <span className="error-msg">{errors.pickupLocation}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="deliveryLocation" className="form-label">Delivery Location *</label>
                  <input
                    type="text"
                    id="deliveryLocation"
                    name="deliveryLocation"
                    className={`form-input ${errors.deliveryLocation ? 'error' : ''}`}
                    value={formData.deliveryLocation}
                    onChange={handleChange}
                    placeholder="City, State or ZIP"
                  />
                  {errors.deliveryLocation && <span className="error-msg">{errors.deliveryLocation}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Additional Cargo / Delivery Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Specify weight, dimensions, temperature requirements, or special instructions..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Request Quote <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
