import { Link } from 'react-router-dom';

/**
 * CategoryCard — tall editorial card for showcasing a tour category.
 *
 * Props:
 *   title      {string}  Category name shown at the bottom of the card
 *   tagline    {string}  One-line descriptor, revealed on hover
 *   label      {string}  Small eyebrow label (e.g. "Living Heritage")
 *   gradient   {string}  CSS gradient string used as the placeholder background
 *   imageUrl   {string}  [OPTIONAL] Real photo URL — set this to replace the gradient.
 *                        Example: imageUrl="/images/cultural-lahore.jpg"
 *   alt        {string}  Accessible description of the background image/gradient
 *   to         {string}  [OPTIONAL] Route to navigate to when clicked.
 *                        If provided, the card becomes a link.
 */
function CategoryCard({ title, tagline, label, gradient, imageUrl, alt, to }) {
  const bgStyle = imageUrl
    ? {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : { background: gradient };

  const inner = (
    <>
      {/* Background: gradient placeholder or real image */}
      <div
        className="category-card-bg"
        style={bgStyle}
        role="img"
        aria-label={alt || title}
      />

      {/* Dark gradient overlay */}
      <div className="category-card-overlay" aria-hidden="true" />

      {/* Text content — lives at the bottom */}
      <div className="category-card-content">
        {label && (
          <p className="category-card-label">{label}</p>
        )}
        <h3 className="category-card-title">{title}</h3>
        <p className="category-card-tagline">{tagline}</p>
        {to && (
          <span className="category-card-cta" aria-hidden="true">
            Explore <i className="bi bi-arrow-right" />
          </span>
        )}
      </div>
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className="category-card-wrap category-card-link"
        aria-label={`Explore ${title} tours`}
      >
        {inner}
      </Link>
    );
  }

  return (
    <article className="category-card-wrap" aria-label={`${title} tour category`}>
      {inner}
    </article>
  );
}

export default CategoryCard;
