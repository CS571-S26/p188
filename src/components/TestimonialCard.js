/**
 * TestimonialCard — premium testimonial card for the dark testimonials section.
 *
 * Props:
 *   quote        {string}  The testimonial text (without surrounding quotes)
 *   name         {string}  Traveller's name
 *   location     {string}  Traveller's city / country
 *   initials     {string}  2-letter initials for the avatar (e.g. "AM")
 *   avatarClass  {string}  Color class for the avatar:
 *                          "tc-avatar-green" | "tc-avatar-gold" | "tc-avatar-terra"
 */
function TestimonialCard({ quote, name, location, initials, avatarClass = 'tc-avatar-green' }) {
  return (
    <article className="tc-card" aria-label={`Testimonial from ${name}`}>

      {/* Opening quotation mark (decorative) */}
      <span className="tc-quote-mark" aria-hidden="true">&ldquo;</span>

      {/* Star rating */}
      <div className="tc-stars" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <i key={i} className="bi bi-star-fill" aria-hidden="true"></i>
        ))}
      </div>

      {/* Quote text */}
      <blockquote className="tc-blockquote">
        <p>{quote}</p>
      </blockquote>

      {/* Author */}
      <footer className="tc-footer">
        <div className={`tc-avatar ${avatarClass}`} aria-hidden="true">
          {initials}
        </div>
        <div>
          <cite className="tc-name">{name}</cite>
          <p className="tc-location">{location}</p>
        </div>
      </footer>
    </article>
  );
}

export default TestimonialCard;
