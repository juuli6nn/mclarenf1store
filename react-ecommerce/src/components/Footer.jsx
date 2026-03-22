import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="custom-footer mt-5">
      <div className="container py-5">
        <div className="row g-4 mb-4">
          {/* About Section */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">About McLaren</h5>
            <p className="text-muted small">
              Your premier destination for authentic McLaren merchandise and collectibles. Experience the thrill of Formula 1 with our exclusive product range.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/products" className="footer-link">Shop Products</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="footer-link">Contact</Link>
              </li>
              <li className="mb-2">
                <Link to="/policies" className="footer-link">Policies</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Customer Service</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="footer-link">Shipping Info</a>
              </li>
              <li className="mb-2">
                <a href="#" className="footer-link">Returns & Exchanges</a>
              </li>
              <li className="mb-2">
                <a href="#" className="footer-link">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="#" className="footer-link">Track Order</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Connect With Us</h5>
            <p className="text-muted small mb-3">
              <i className="fas fa-envelope me-2 text-orange"></i>
              support@mclaren.com
            </p>
            <p className="text-muted small mb-3">
              <i className="fas fa-phone me-2 text-orange"></i>
              +63 (2) 1234-5678
            </p>
            <div className="social-links">
              <a href="#" className="footer-social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="footer-social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="footer-social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="footer-social-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 small text-muted">
              &copy; 2026 McLaren E-Commerce Store. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 small text-muted">
              <a href="#" className="footer-link">Privacy Policy</a> |
              <a href="#" className="footer-link ms-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
