/**
 * RegionCard — informational card for a Pakistani region on the Explore page.
 *
 * Props:
 *   name        {string}    Region name
 *   description {string}    1–2 sentence description
 *   highlights  {string[]}  Array of 3 notable attractions / experiences
 *   tags        {string[]}  Experience categories, e.g. ['Nature', 'Adventure']
 *   gradient    {string}    CSS gradient used as placeholder background
 *   imageUrl    {string}    [OPTIONAL] real photo URL — replaces the gradient
 *                           Example: imageUrl="/images/gilgit.jpg"
 *   alt         {string}    Accessible description of the background
 */
function RegionCard({ name, description, highlights, tags, gradient, imageUrl, alt }) {
  const bgStyle = imageUrl
    ? { backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { background: gradient };

  return (
    <article className="region-card" aria-label={`${name} region`}>
      {/* Image / gradient header */}
      <div className="region-card-img-wrap">
        <div
          className="region-card-img-bg"
          style={bgStyle}
          role="img"
          aria-label={alt || name}
        />
        <div className="region-card-img-overlay" aria-hidden="true" />
      </div>

      {/* Card body */}
      <div className="region-card-body">
        {/* Experience tags */}
        <div className="region-tags" aria-label="Experience types">
          {tags.map((tag) => (
            <span key={tag} className="region-tag">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="region-name">{name}</h3>
        <p className="region-desc">{description}</p>

        {/* Highlights list */}
        <ul className="region-highlights" aria-label={`Highlights of ${name}`}>
          {highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default RegionCard;
