import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="featured-title mb-2">Get In Touch</h2>
          <p className="text-muted mb-5">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="mb-4">
              <label className="form-label fw-600">Name</label>
              <input 
                type="text" 
                className="form-control form-control-lg"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-600">Email</label>
              <input 
                type="email" 
                className="form-control form-control-lg"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-600">Message</label>
              <textarea 
                className="form-control form-control-lg"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
