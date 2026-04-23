import { Container, Row, Col } from 'react-bootstrap';

/**
 * PageBanner — reusable dark-green header strip for non-hero pages.
 * Handles the fixed-navbar offset automatically.
 *
 * Props:
 *   eyebrow   {string}         Small uppercase label above the title
 *   title     {string|node}    Main heading (h1)
 *   subtitle  {string}         Optional sub-paragraph
 *   children  {node}           Optional extra content (e.g. filter bars, CTAs)
 */
function PageBanner({ eyebrow, title, subtitle, children }) {
  return (
    <div className="page-offset">
      <div className="page-banner">
        <Container>
          <Row>
            <Col lg={9}>
              {eyebrow && (
                <span
                  className="section-eyebrow"
                  style={{ color: 'var(--gold-light)' }}
                >
                  {eyebrow}
                </span>
              )}
              <h1
                className="section-heading on-dark"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: subtitle || children ? '0.6rem' : 0 }}
              >
                {title}
              </h1>
              {subtitle && (
                <p
                  className="section-body on-dark"
                  style={{ maxWidth: 540, marginBottom: children ? '1.5rem' : 0 }}
                >
                  {subtitle}
                </p>
              )}
              {children}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default PageBanner;
