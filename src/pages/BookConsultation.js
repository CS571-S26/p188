import { useState } from 'react';
import { Container, Row, Col, Card, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const CATEGORIES = [
  { value: '',             label: 'Select a category…' },
  { value: 'cultural',    label: 'Cultural Heritage' },
  { value: 'nature',      label: 'Nature & Adventure' },
  { value: 'shopping',    label: 'Bazaars & Shopping' },
  { value: 'sightseeing', label: 'Sightseeing & Landmarks' },
  { value: 'mixed',       label: "I'm open to a mix!" },
];

const EMPTY_FORM = { name: '', email: '', phone: '', category: '', date: '', message: '' };

function validate(fields) {
  const errors = {};
  if (!fields.name.trim() || fields.name.trim().length < 2)
    errors.name = 'Please enter your full name (at least 2 characters).';

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!fields.email.trim())
    errors.email = 'Email address is required.';
  else if (!emailRe.test(fields.email.trim()))
    errors.email = 'Please enter a valid email address.';

  if (!fields.phone.trim())
    errors.phone = 'Phone number is required.';

  if (!fields.category)
    errors.category = 'Please select a preferred tour category.';

  if (!fields.date) {
    errors.date = 'Please select a preferred travel date.';
  } else {
    const chosen = new Date(fields.date);
    const today  = new Date();
    today.setHours(0, 0, 0, 0);
    if (chosen <= today) errors.date = 'Please choose a future travel date.';
  }
  return errors;
}

function tomorrowISO() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}

const TRUST_ITEMS = [
  { icon: 'bi-clock',        text: 'We respond within 24 hours' },
  { icon: 'bi-chat-dots',    text: 'Free, no-commitment consultation' },
  { icon: 'bi-shield-check', text: 'Your details are never shared' },
];

function BookConsultation() {
  const [fields,    setFields]    = useState(EMPTY_FORM);
  const [errors,    setErrors]    = useState({});
  const [touched,   setTouched]   = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const next = validate({ ...fields, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: next[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const next = validate(fields);
    setErrors((prev) => ({ ...prev, [name]: next[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = Object.keys(EMPTY_FORM).reduce((a, k) => ({ ...a, [k]: true }), {});
    setTouched(allTouched);
    const next = validate(fields);
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  const handleReset = () => {
    setFields(EMPTY_FORM); setErrors({}); setTouched({}); setSubmitted(false);
  };

  const fieldState = (name) => {
    if (!touched[name]) return {};
    return errors[name] ? { isInvalid: true } : { isValid: true };
  };

  /* ── Success screen ──────────────────────────────────────────── */
  if (submitted) {
    return (
      <>
        <PageBanner eyebrow="Request Received" title="Book a Consultation" />

        <div className="booking-body">
          <Container>
            <Row className="justify-content-center">
              <Col lg={7} md={9}>
                <Card className="booking-card">
                  <Card.Body>
                    <div className="text-center py-3">
                      <div className="success-ring" aria-hidden="true">
                        <i className="bi bi-check-lg"></i>
                      </div>
                      <h2 className="section-heading mb-2" style={{ fontSize: '1.9rem' }}>
                        You're on our radar, {fields.name.trim().split(' ')[0]}!
                      </h2>
                      <p className="section-body mx-auto mb-4" style={{ maxWidth: 420 }}>
                        Thank you for reaching out. Our team will be in touch within{' '}
                        <strong style={{ color: 'var(--text)' }}>24 hours</strong> at{' '}
                        <strong style={{ color: 'var(--text)' }}>{fields.email}</strong>.
                      </p>
                      <Alert style={{
                        background: 'rgba(45,106,79,0.08)', border: '1px solid rgba(45,106,79,0.18)',
                        borderRadius: '8px', color: 'var(--green-deep)', fontSize: '0.88rem',
                        maxWidth: 380, margin: '0 auto 2rem',
                      }}>
                        <i className="bi bi-info-circle me-2" aria-hidden="true"></i>
                        Check your inbox for a confirmation copy.
                      </Alert>
                      <div className="d-flex gap-3 justify-content-center flex-wrap">
                        <button className="btn-submit-form" onClick={handleReset}>
                          Submit Another Request
                        </button>
                        <Link to="/" className="btn-outline-brand" style={{ display: 'inline-block' }}>
                          Back to Home
                        </Link>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }

  /* ── Main form ───────────────────────────────────────────────── */
  return (
    <>
      <PageBanner
        eyebrow="Free & No Obligation"
        title="Book a Consultation"
        subtitle="Tell us about your dream trip and we'll craft a personalised itinerary proposal — completely free, no commitment required."
      />

      <div className="booking-body">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={10}>
              <Card className="booking-card">
                <Card.Body>
                  <Form onSubmit={handleSubmit} noValidate aria-label="Consultation booking form">
                    <Row className="g-3 mb-3">

                      {/* Full name */}
                      <Col md={6}>
                        <Form.Group controlId="field-name">
                          <Form.Label>
                            Full Name <span aria-hidden="true" style={{ color: 'var(--terracotta)' }}>*</span>
                          </Form.Label>
                          <Form.Control
                            type="text" name="name" placeholder="e.g. Ahmed Malik"
                            value={fields.name} onChange={handleChange} onBlur={handleBlur}
                            autoComplete="name" aria-required="true"
                            aria-describedby={errors.name ? 'name-error' : undefined}
                            {...fieldState('name')}
                          />
                          {touched.name && errors.name && (
                            <Form.Control.Feedback type="invalid" id="name-error" role="alert">
                              {errors.name}
                            </Form.Control.Feedback>
                          )}
                        </Form.Group>
                      </Col>

                      {/* Email */}
                      <Col md={6}>
                        <Form.Group controlId="field-email">
                          <Form.Label>
                            Email Address <span aria-hidden="true" style={{ color: 'var(--terracotta)' }}>*</span>
                          </Form.Label>
                          <Form.Control
                            type="email" name="email" placeholder="you@example.com"
                            value={fields.email} onChange={handleChange} onBlur={handleBlur}
                            autoComplete="email" aria-required="true"
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            {...fieldState('email')}
                          />
                          {touched.email && errors.email && (
                            <Form.Control.Feedback type="invalid" id="email-error" role="alert">
                              {errors.email}
                            </Form.Control.Feedback>
                          )}
                        </Form.Group>
                      </Col>

                      {/* Phone */}
                      <Col md={6}>
                        <Form.Group controlId="field-phone">
                          <Form.Label>
                            Phone Number <span aria-hidden="true" style={{ color: 'var(--terracotta)' }}>*</span>
                          </Form.Label>
                          <Form.Control
                            type="tel" name="phone" placeholder="+92 300 000 0000"
                            value={fields.phone} onChange={handleChange} onBlur={handleBlur}
                            autoComplete="tel" aria-required="true"
                            aria-describedby={errors.phone ? 'phone-error' : undefined}
                            {...fieldState('phone')}
                          />
                          {touched.phone && errors.phone && (
                            <Form.Control.Feedback type="invalid" id="phone-error" role="alert">
                              {errors.phone}
                            </Form.Control.Feedback>
                          )}
                        </Form.Group>
                      </Col>

                      {/* Travel date */}
                      <Col md={6}>
                        <Form.Group controlId="field-date">
                          <Form.Label>
                            Preferred Travel Date <span aria-hidden="true" style={{ color: 'var(--terracotta)' }}>*</span>
                          </Form.Label>
                          <Form.Control
                            type="date" name="date" min={tomorrowISO()}
                            value={fields.date} onChange={handleChange} onBlur={handleBlur}
                            aria-required="true"
                            aria-describedby={errors.date ? 'date-error' : undefined}
                            {...fieldState('date')}
                          />
                          {touched.date && errors.date && (
                            <Form.Control.Feedback type="invalid" id="date-error" role="alert">
                              {errors.date}
                            </Form.Control.Feedback>
                          )}
                        </Form.Group>
                      </Col>

                      {/* Category */}
                      <Col md={12}>
                        <Form.Group controlId="field-category">
                          <Form.Label>
                            Preferred Tour Category <span aria-hidden="true" style={{ color: 'var(--terracotta)' }}>*</span>
                          </Form.Label>
                          <Form.Select
                            name="category" value={fields.category}
                            onChange={handleChange} onBlur={handleBlur}
                            aria-required="true"
                            aria-describedby={errors.category ? 'category-error' : undefined}
                            {...fieldState('category')}
                          >
                            {CATEGORIES.map((c) => (
                              <option key={c.value} value={c.value} disabled={!c.value}>
                                {c.label}
                              </option>
                            ))}
                          </Form.Select>
                          {touched.category && errors.category && (
                            <Form.Control.Feedback type="invalid" id="category-error" role="alert">
                              {errors.category}
                            </Form.Control.Feedback>
                          )}
                        </Form.Group>
                      </Col>

                      {/* Message */}
                      <Col md={12}>
                        <Form.Group controlId="field-message">
                          <Form.Label>
                            Tell Us About Your Dream Trip{' '}
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 400 }}>
                              (optional)
                            </span>
                          </Form.Label>
                          <Form.Control
                            as="textarea" rows={4} name="message"
                            placeholder="Preferences, special occasions, accessibility needs, destinations in mind…"
                            value={fields.message} onChange={handleChange}
                            style={{ resize: 'vertical' }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.4rem' }}>
                      <span style={{ color: 'var(--terracotta)' }}>*</span> Required fields
                    </p>

                    <div className="d-flex align-items-center gap-3 flex-wrap">
                      <button type="submit" className="btn-submit-form">
                        <i className="bi bi-send me-2" aria-hidden="true"></i>
                        Send My Request
                      </button>
                      <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                        <i className="bi bi-lock me-1" aria-hidden="true"></i>
                        Your information is kept private.
                      </span>
                    </div>
                  </Form>
                </Card.Body>
              </Card>

              {/* Trust badges */}
              <Row className="g-3 mt-3">
                {TRUST_ITEMS.map((item) => (
                  <Col md={4} sm={12} key={item.text}>
                    <div className="d-flex align-items-center gap-2"
                      style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                      <i className={`bi ${item.icon}`}
                        style={{ color: 'var(--gold)', fontSize: '1.1rem' }} aria-hidden="true" />
                      {item.text}
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BookConsultation;
