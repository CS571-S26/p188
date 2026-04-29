import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import DayCard from '../components/DayCard';

/* ================================================================
   Wikimedia Commons image helper — same pattern as the other pages.
   The Special:FilePath redirect resolves to the actual hosted image.
   ================================================================ */
const wcImg = (filename, width = 1400) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=${width}`;

/* ================================================================
   FOUR-DAY SAMPLE TOUR
   ================================================================ */
const ITINERARY = [
  {
    dayNumber: 1,
    location: 'Lahore, Punjab',
    title: 'Old City & the Bazaars.',
    summary:
      "Begin in Pakistan's cultural capital. The day winds through the Walled City — Mughal forts, mosques, and centuries-old bazaars — with plenty of time to wander, shop, and soak in the atmosphere.",
    highlights: [
      'Walled City heritage walk',
      'Mughal-era mosques & forts',
      'Bazaar shopping — textiles, spices, crafts',
    ],
    imageUrl: wcImg('The_Bazaar_outside_Wazir_Khan_Mosque.jpg'),
    gradient:
      'linear-gradient(150deg, #1A0805 0%, #3A1408 35%, #6B2C12 65%, #2A0E08 100%)',
    alt: 'The bazaar outside Wazir Khan Mosque in the Walled City of Lahore',
  },
  {
    dayNumber: 2,
    location: 'Islamabad',
    title: 'Capital of Calm.',
    summary:
      "Move north to Pakistan's serene, mountain-backed capital. Expect grand modern landmarks, museum visits, and quiet panoramic views from the Margalla Hills.",
    highlights: [
      'Faisal Mosque & Pakistan Monument',
      'Margalla Hills viewpoint',
      'Heritage museum visit',
    ],
    imageUrl: wcImg('Shah_Faisal_Masjid_with_moon.JPG'),
    gradient:
      'linear-gradient(150deg, #080C12 0%, #161E2E 35%, #1F2D40 65%, #0A0E18 100%)',
    alt: 'Faisal Mosque with the moon overhead, Islamabad',
    reverse: true,
  },
  {
    dayNumber: 3,
    location: 'Into the Karakoram',
    title: 'The Long Road North.',
    summary:
      "Trade tarmac for the Karakoram Highway and head deep into the mountains. The route reveals dramatic canyons, glacial valleys, and your first close-up view of Nanga Parbat as you arrive at Fairy Meadows.",
    highlights: [
      'Karakoram Highway scenic route',
      'First views of Nanga Parbat',
      'Arrival at Fairy Meadows (3,300 m)',
    ],
    imageUrl: wcImg('Nanga_Parbat_The_killer_mountain.JPG'),
    gradient:
      'linear-gradient(150deg, #050E08 0%, #0F2415 35%, #1A3A22 65%, #0A1810 100%)',
    alt: 'Nanga Parbat, viewed from the Karakoram region',
  },
  {
    dayNumber: 4,
    location: 'Fairy Meadows',
    title: 'A Day with the Naked Mountain.',
    summary:
      "A full day in the alpine meadows beneath Nanga Parbat — Pakistan's 8,126 m “Killer Mountain.” Slow mornings, gentle hikes, picnic lunches, and a night sky thick with stars.",
    highlights: [
      'Sunrise views of Nanga Parbat',
      'Gentle hikes through alpine meadows',
      'Campfire evening & alpine stargazing',
    ],
    imageUrl: wcImg('Fairy_Meadows_GB_Pakistan.jpg'),
    gradient:
      'linear-gradient(150deg, #060F0A 0%, #102E1C 35%, #1B4329 65%, #081C12 100%)',
    alt: 'Scenic view of Fairy Meadows with Nanga Parbat in the distance',
    reverse: true,
  },
];

/* ================================================================
   PAGE
   ================================================================ */
function SampleTour() {
  return (
    <>
      <PageBanner
        eyebrow="Sample Itinerary · 4 Days"
        title="Lahore to the Mountains"
        subtitle="A taste of what we craft for first-time visitors — Mughal heritage, the calm of the capital, and a finale among the highest mountains on Earth. Every detail can be adjusted around your dates, pace, and interests."
      />

      {/* Day-by-day itinerary */}
      <section className="itinerary-section" aria-labelledby="itinerary-heading">
        <Container>
          <div className="text-center mb-5">
            <span className="section-eyebrow">Day-by-Day</span>
            <h2
              className="section-heading"
              id="itinerary-heading"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
            >
              The Journey, Unfolded
            </h2>
            <hr className="gold-rule centered" aria-hidden="true" />
          </div>

          <div className="itinerary-stack">
            {ITINERARY.map((day) => (
              <DayCard
                key={day.dayNumber}
                dayNumber={day.dayNumber}
                location={day.location}
                title={day.title}
                summary={day.summary}
                highlights={day.highlights}
                travelInfo={day.travelInfo}
                imageUrl={day.imageUrl}
                gradient={day.gradient}
                alt={day.alt}
                reverse={day.reverse}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Trip summary + CTA */}
      <section className="tour-summary-section" aria-labelledby="tour-summary-heading">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="mb-4 mb-lg-0">
              <span className="section-eyebrow on-dark" style={{ color: 'var(--gold-light)' }}>
                Trip at a Glance
              </span>
              <h2
                className="section-heading on-dark"
                id="tour-summary-heading"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}
              >
                Four Days, Three Worlds.
              </h2>
              <p className="section-body on-dark" style={{ maxWidth: 540 }}>
                This itinerary is a starting point — most travellers extend it
                with extra days in Hunza, a side trip to Skardu, or a deeper
                cultural week in Punjab. Tell us what excites you most and
                we'll re-shape the route around it.
              </p>
            </Col>

            <Col lg={5}>
              <ul className="tour-stats tour-stats-3">
                <li>
                  <span className="tour-stat-num">4</span>
                  <span className="tour-stat-label">Days</span>
                </li>
                <li>
                  <span className="tour-stat-num">3</span>
                  <span className="tour-stat-label">Cities</span>
                </li>
                <li>
                  <span className="tour-stat-num">3,300m</span>
                  <span className="tour-stat-label">Highest point</span>
                </li>
              </ul>
            </Col>
          </Row>

          <div className="text-center mt-5 pt-2">
            <Link to="/book" className="btn-hero-cta">
              Plan Your Version
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

export default SampleTour;
