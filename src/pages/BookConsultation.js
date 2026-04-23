import { InlineWidget } from 'react-calendly';
import { Container, Row, Col } from 'react-bootstrap';
import PageBanner from '../components/PageBanner';

/* ================================================================
   YOUR CALENDLY URL
   1. Create a free account at https://calendly.com
   2. Make an event type (e.g. "Pakistan Tours Consultation · 30 min")
   3. Replace the string below with your real event URL

   The query params customise the widget's colours to match the site:
     background_color  → warm off-white (#FAFAF7 without the #)
     text_color        → our dark text
     primary_color     → deep mountain green (buttons, highlights)
     hide_gdpr_banner  → cleaner look inside the embed
   ================================================================ */
const CALENDLY_URL =
  'https://calendly.com/razarashid1019/30min' +
  '?background_color=FAFAF7' +
  '&text_color=1C2410' +
  '&primary_color=1A4228' +
  '&hide_gdpr_banner=1';

const CALENDLY_CONFIGURED = true;

/* ── What-to-expect steps shown on the left ── */
const STEPS = [
  {
    num: '01',
    title: 'Pick a time',
    desc: 'Browse available slots and choose one that works for you. Consultations are 30 minutes.',
  },
  {
    num: '02',
    title: 'Share your travel vision',
    desc: "Calendly will ask a few quick questions about your interests, travel dates, and group size.",
  },
  {
    num: '03',
    title: 'Receive your itinerary',
    desc: 'Within 48 hours of your call, we\'ll send a custom travel proposal — no commitment needed.',
  },
];

/* ================================================================
   CALENDLY WIDGET
   Renders the real widget or a styled placeholder if not yet configured.
   ================================================================ */
function CalendlyWidget() {
  if (!CALENDLY_CONFIGURED) {
    return (
      <div className="calendly-placeholder" role="status">
        <i className="bi bi-calendar3" aria-hidden="true"></i>
        <p>
          <strong>Calendly widget will appear here.</strong>
          <br />
          Open <code>BookConsultation.js</code>, paste your Calendly
          event URL into <code>CALENDLY_URL</code>, and set{' '}
          <code>CALENDLY_CONFIGURED = true</code>.
        </p>
      </div>
    );
  }

  return (
    <div className="calendly-shell">
      <InlineWidget
        url={CALENDLY_URL}
        iframeTitle="Book a Pakistan Tours consultation"
        styles={{ minWidth: '100%', height: '680px' }}
      />
    </div>
  );
}

/* ================================================================
   BOOKING PAGE
   ================================================================ */
function BookConsultation() {
  return (
    <>
      <PageBanner
        eyebrow="Free · No Commitment"
        title="Book a Consultation"
        subtitle="Choose a time that works for you. We'll talk through your dream Pakistan trip and follow up with a personalised proposal."
      />

      <div className="booking-split-section">
        <Container>
          <Row className="align-items-start">

            {/* ── Left: steps + direct contact ───────────────── */}
            <Col lg={4} md={12} className="booking-steps-col">

              <h2 className="booking-steps-heading">What to expect</h2>
              <p className="booking-steps-sub">
                A relaxed, 30-minute conversation — no sales pressure,
                just genuine help planning your journey.
              </p>

              {STEPS.map((step) => (
                <div className="booking-step" key={step.num}>
                  <div className="booking-step-num" aria-hidden="true">
                    {step.num}
                  </div>
                  <div>
                    <p className="booking-step-title">{step.title}</p>
                    <p className="booking-step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}

              {/* Direct contact fallback */}
              <div className="booking-contact-block">
                <span className="booking-contact-label">Prefer to reach us directly?</span>
                <a
                  href="https://wa.me/923001234567"
                  className="booking-contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                >
                  <i className="bi bi-whatsapp" aria-hidden="true"></i>
                  +92 300 123 4567 (WhatsApp)
                </a>
                <a
                  href="mailto:hello@pakistantours.com"
                  className="booking-contact-link"
                  aria-label="Send us an email"
                >
                  <i className="bi bi-envelope" aria-hidden="true"></i>
                  hello@pakistantours.com
                </a>
              </div>
            </Col>

            {/* ── Right: Calendly widget ──────────────────────── */}
            <Col lg={8} md={12} className="calendly-col">
              <CalendlyWidget />
            </Col>

          </Row>
        </Container>
      </div>
    </>
  );
}

export default BookConsultation;
