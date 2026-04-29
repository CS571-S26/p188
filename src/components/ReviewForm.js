import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

/**
 * ReviewForm — accessible review submission form.
 *
 * Accessibility checklist:
 *   • Every input has a paired <Form.Label> via controlId / htmlFor.
 *   • The star rating is a fieldset of radio buttons (keyboard-navigable
 *     with Tab + arrow keys), with the visible stars purely decorative.
 *   • Required fields are marked both visually and with aria-required.
 *   • Validation errors are announced via role="alert" + aria-live.
 *   • Success confirmation is a status region (role="status").
 *   • Submit works with both mouse and keyboard (Enter inside any field).
 *
 * Props:
 *   onSubmit  {(review) => void}   Called with the new review object on success.
 */
function ReviewForm({ onSubmit }) {
  const [name, setName]         = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating]     = useState(0);
  const [text, setText]         = useState('');
  const [error, setError]       = useState('');
  const [success, setSuccess]   = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);

    // Simple validation — all required fields present
    const trimmedName = name.trim();
    const trimmedText = text.trim();

    if (!trimmedName) {
      setError('Please enter your name.');
      return;
    }
    if (rating < 1) {
      setError('Please choose a star rating.');
      return;
    }
    if (trimmedText.length < 10) {
      setError('Review must be at least 10 characters.');
      return;
    }

    // Build the review payload — initials are derived for the avatar
    const initials = trimmedName
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join('');

    const review = {
      id:        `r-${Date.now()}`,
      quote:     trimmedText,
      name:      trimmedName,
      location:  location.trim() || 'Verified traveller',
      initials:  initials || 'PT',
      rating,
      submittedAt: new Date().toISOString(),
    };

    onSubmit?.(review);

    // Reset form
    setName('');
    setLocation('');
    setRating(0);
    setText('');
    setError('');
    setSuccess(true);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      noValidate
      className="review-form"
      aria-labelledby="review-form-heading"
    >
      <h3 className="review-form-heading" id="review-form-heading">
        Share Your Story
      </h3>
      <p className="review-form-sub">
        Travelled with us? Tell future travellers what made the trip — every
        review helps us craft better journeys.
      </p>

      {/* Error message — announced to screen readers */}
      {error && (
        <Alert
          variant="danger"
          className="review-form-alert"
          role="alert"
          aria-live="assertive"
        >
          <i className="bi bi-exclamation-triangle me-2" aria-hidden="true" />
          {error}
        </Alert>
      )}

      {/* Success message */}
      {success && (
        <Alert
          variant="success"
          className="review-form-alert"
          role="status"
          aria-live="polite"
        >
          <i className="bi bi-check-circle me-2" aria-hidden="true" />
          Thank you — your review has been added below.
        </Alert>
      )}

      {/* Name + Location — side by side on wider screens */}
      <div className="review-form-row">
        <Form.Group controlId="review-name" className="review-form-field">
          <Form.Label>
            Name <span className="required-mark" aria-hidden="true">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Sarah Johnson"
            aria-required="true"
            autoComplete="name"
            maxLength={60}
          />
        </Form.Group>

        <Form.Group controlId="review-location" className="review-form-field">
          <Form.Label>City &amp; Country</Form.Label>
          <Form.Control
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. London, UK"
            autoComplete="address-level2"
            maxLength={60}
          />
        </Form.Group>
      </div>

      {/* Star rating — radio group */}
      <fieldset className="review-form-rating" aria-required="true">
        <legend>
          Rating <span className="required-mark" aria-hidden="true">*</span>
        </legend>
        <div className="star-row" role="radiogroup" aria-label="Star rating, 1 to 5">
          {[1, 2, 3, 4, 5].map((n) => (
            <label
              key={n}
              className={`star-label ${rating >= n ? 'is-filled' : ''}`}
              htmlFor={`review-rating-${n}`}
            >
              <input
                id={`review-rating-${n}`}
                type="radio"
                name="rating"
                value={n}
                checked={rating === n}
                onChange={() => setRating(n)}
                className="visually-hidden"
              />
              <i
                className={`bi ${rating >= n ? 'bi-star-fill' : 'bi-star'}`}
                aria-hidden="true"
              />
              <span className="visually-hidden">{n} star{n > 1 ? 's' : ''}</span>
            </label>
          ))}
          <span className="star-summary" aria-live="polite">
            {rating > 0 ? `${rating} of 5` : 'No rating yet'}
          </span>
        </div>
      </fieldset>

      {/* Review text */}
      <Form.Group controlId="review-text" className="review-form-field">
        <Form.Label>
          Your Review <span className="required-mark" aria-hidden="true">*</span>
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What made your trip memorable?"
          aria-required="true"
          aria-describedby="review-text-help"
          maxLength={800}
        />
        <Form.Text id="review-text-help" muted>
          {text.length}/800 characters · Minimum 10
        </Form.Text>
      </Form.Group>

      <Button
        type="submit"
        className="btn-primary-dark review-form-submit"
      >
        Submit Review
      </Button>
    </Form>
  );
}

export default ReviewForm;
