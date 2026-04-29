import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer" role="contentinfo">
      <Container>
        <Row className="gy-4">

          {/* Brand */}
          <Col lg={4} md={12}>
            <Link to="/" className="footer-brand">
              <i className="bi bi-compass brand-icon" aria-hidden="true" />
              Pakistan Tours
            </Link>
            <p className="footer-tagline">
              Expertly crafted journeys through ancient lands, towering peaks, and
              vibrant bazaars. Pakistan, rediscovered.
            </p>
          </Col>

          {/* Navigate */}
          <Col lg={2} md={4} sm={6}>
            <span className="footer-section-label">Navigate</span>
            <nav aria-label="Footer navigation">
              <Link to="/" className="footer-link">
                <i className="bi bi-house" aria-hidden="true" />
                Home
              </Link>
              <Link to="/explore" className="footer-link">
                <i className="bi bi-compass" aria-hidden="true" />
                Explore Regions
              </Link>
              <Link to="/tour" className="footer-link">
                <i className="bi bi-map" aria-hidden="true" />
                Sample 4-Day Tour
              </Link>
              <Link to="/book" className="footer-link">
                <i className="bi bi-calendar-check" aria-hidden="true" />
                Book a Consultation
              </Link>
            </nav>
          </Col>

          {/* Contact */}
          <Col lg={3} md={4} sm={6}>
            <span className="footer-section-label">Contact Us</span>
            <a
              href="https://wa.me/923001234567"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <i className="bi bi-whatsapp" aria-hidden="true" />
              +92 300 123 4567
            </a>
            <a href="mailto:hello@pakistantours.com" className="footer-link">
              <i className="bi bi-envelope" aria-hidden="true" />
              hello@pakistantours.com
            </a>
            <span className="footer-link" style={{ cursor: 'default' }}>
              <i className="bi bi-geo-alt" aria-hidden="true" />
              Lahore, Pakistan
            </span>
          </Col>

          {/* Social */}
          <Col lg={3} md={4} sm={12}>
            <span className="footer-section-label">Follow Along</span>
            <div className="d-flex gap-2 flex-wrap">
              <a href="#instagram" className="social-icon-btn" aria-label="Instagram">
                <i className="bi bi-instagram" aria-hidden="true" />
              </a>
              <a href="#facebook" className="social-icon-btn" aria-label="Facebook">
                <i className="bi bi-facebook" aria-hidden="true" />
              </a>
              <a href="#youtube" className="social-icon-btn" aria-label="YouTube">
                <i className="bi bi-youtube" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/923001234567"
                className="social-icon-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp" aria-hidden="true" />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="footer-hr" />
        <p className="footer-copy mb-0">
          &copy; {year} Pakistan Tours. Crafted with care for every traveller.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
