/**
 * DayCard — single day in a multi-day itinerary, shown as a wide editorial card.
 *
 * Props:
 *   dayNumber  {number}   1-based day index (rendered as e.g. "Day 01")
 *   location   {string}   City / region label shown in the eyebrow
 *   title      {string}   Headline of the day
 *   summary    {string}   Short paragraph describing the day
 *   highlights {string[]} 3-4 bullet items (places, activities)
 *   travelInfo {string}   [optional] Travel mode/time blurb (e.g. "Lahore → Islamabad · 4 hr drive")
 *   imageUrl   {string}   [optional] Hero image for the day
 *   gradient   {string}   CSS gradient placeholder when no image
 *   alt        {string}   Accessible image description
 *   reverse    {boolean}  Flip image/text columns (alternate layout for visual rhythm)
 */
function DayCard({
  dayNumber,
  location,
  title,
  summary,
  highlights = [],
  travelInfo,
  imageUrl,
  gradient,
  alt,
  reverse = false,
}) {
  const bgStyle = imageUrl
    ? { backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { background: gradient };

  const dayLabel = `Day ${String(dayNumber).padStart(2, '0')}`;

  return (
    <article
      className={`day-card ${reverse ? 'day-card-reverse' : ''}`}
      aria-labelledby={`day-${dayNumber}-title`}
    >
      {/* Image side */}
      <div className="day-card-media">
        <div
          className="day-card-media-bg"
          style={bgStyle}
          role="img"
          aria-label={alt || title}
        />
        <div className="day-card-media-overlay" aria-hidden="true" />
        <span className="day-card-day-badge" aria-hidden="true">{dayLabel}</span>
      </div>

      {/* Text side */}
      <div className="day-card-body">
        <p className="day-card-eyebrow">
          <span className="visually-hidden">{dayLabel} — </span>
          {location}
        </p>
        <h3 className="day-card-title" id={`day-${dayNumber}-title`}>
          {title}
        </h3>
        <p className="day-card-summary">{summary}</p>

        {highlights.length > 0 && (
          <ul className="day-card-highlights" aria-label={`Highlights for ${dayLabel}`}>
            {highlights.map((h) => (
              <li key={h}>
                <i className="bi bi-check2 day-card-highlight-icon" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {travelInfo && (
          <p className="day-card-travel">
            <i className="bi bi-arrow-right-short" aria-hidden="true" />
            {travelInfo}
          </p>
        )}
      </div>
    </article>
  );
}

export default DayCard;
