import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useSearchParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import RegionCard from '../components/RegionCard';

/* ================================================================
   REGION DATA
   Images are sourced from Wikimedia Commons (CC-licensed). The
   Special:FilePath redirect resolves to the actual hosted image,
   so the URL stays stable even if the file moves.
   ================================================================ */
const wcImg = (filename, width = 1400) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=${width}`;

const REGIONS = [
  {
    id: 'gilgit-baltistan',
    name: 'Gilgit-Baltistan',
    description:
      "Home to five of the world's fourteen eight-thousanders, Gilgit-Baltistan is the ultimate destination for mountain lovers and adventure seekers.",
    highlights: ['K2 & Nanga Parbat base camps', 'Hunza & Naltar Valleys', 'Fairy Meadows & Deosai Plains'],
    tags: ['Nature', 'Adventure'],
    imageUrl: wcImg('Fairy_Meadows_and_the_view_of_Nanga_Parbat.jpg'),
    gradient: 'linear-gradient(150deg, #071522 0%, #0E2D40 40%, #183A50 70%, #0A1E10 100%)',
    alt: 'Fairy Meadows with Nanga Parbat in the background',
  },
  {
    id: 'lahore-punjab',
    name: 'Lahore & Punjab',
    description:
      'The cultural heart of Pakistan — Lahore overflows with Mughal monuments, vibrant bazaars, and a food scene that demands multiple visits.',
    highlights: ['Lahore Fort & Badshahi Mosque', 'Walled City & Food Street', 'Anarkali & Liberty Bazaar'],
    tags: ['Cultural', 'Shopping'],
    imageUrl: wcImg('Minaret_of_Badshahi_Mosque,_Lahore.JPG'),
    gradient: 'linear-gradient(150deg, #150805 0%, #3D1A08 40%, #6B3510 70%, #3A1205 100%)',
    alt: 'Minaret of Badshahi Mosque, Lahore',
  },
  {
    id: 'sindh',
    name: 'Sindh & Karachi',
    description:
      "Pakistan's oldest civilizations and its most cosmopolitan city share the same province — from Mohenjo-daro's 5,000-year-old ruins to Karachi's buzzing port life.",
    highlights: ['Mohenjo-daro UNESCO Site', 'Thar Desert & salt flats', "Karachi's Clifton & Saddar"],
    tags: ['Cultural', 'Sightseeing'],
    imageUrl: wcImg('Great_bath_view_Mohenjodaro.JPG'),
    gradient: 'linear-gradient(150deg, #0F0805 0%, #2E1A08 40%, #5C3510 70%, #2A1408 100%)',
    alt: 'The Great Bath at Mohenjo-daro, Sindh',
  },
  {
    id: 'kpk',
    name: 'Khyber Pakhtunkhwa',
    description:
      'Where the Silk Road once passed, KPK blends ancient Gandharan Buddhist heritage with emerald Swat Valley scenery and legendary Pashtun hospitality.',
    highlights: ['Swat Valley & Malam Jabba', "Peshawar's Qissa Khwani Bazaar", 'Gandhara Archaeological Sites'],
    tags: ['Cultural', 'Nature', 'Shopping'],
    imageUrl: wcImg('Kabal_Swat_valley.JPG'),
    gradient: 'linear-gradient(150deg, #060D06 0%, #112211 40%, #1E3A1E 70%, #0A1A0A 100%)',
    alt: 'Swat Valley landscape near Kabal, Khyber Pakhtunkhwa',
  },
  {
    id: 'azad-kashmir',
    name: 'Azad Kashmir',
    description:
      'Turquoise rivers, forested mountain ridges, and valleys so lush they earn the title "Switzerland of Pakistan" — Azad Kashmir rewards the unhurried traveller.',
    highlights: ['Neelum Valley & Sharda', 'Rawalakot & Banjosa Lake', 'Muzaffarabad river rafting'],
    tags: ['Nature', 'Adventure'],
    imageUrl: wcImg('Neelum_Valley_Winters_Azad_Kashmir_Pakistan.JPG'),
    gradient: 'linear-gradient(150deg, #050C0A 0%, #0E2420 40%, #183E35 70%, #08180E 100%)',
    alt: 'Neelum Valley in winter, Azad Kashmir',
  },
  {
    id: 'islamabad',
    name: 'Islamabad & Rawalpindi',
    description:
      "Pakistan's meticulously planned capital pairs mountain-backed scenery with history — a gateway city that surprises visitors with its calm beauty and rich surroundings.",
    highlights: ['Faisal Mosque & Margalla Hills', 'Rawalpindi Old City Bazaars', 'Taxila Buddhist ruins (UNESCO)'],
    tags: ['Sightseeing', 'Cultural'],
    imageUrl: wcImg('Night_view_of_Faisal_Masjid.JPG'),
    gradient: 'linear-gradient(150deg, #080C12 0%, #151E2E 40%, #202E40 70%, #0A0E18 100%)',
    alt: 'Faisal Mosque illuminated at night, Islamabad',
  },
];

const ALL = 'All';
const FILTER_OPTIONS = [ALL, 'Nature', 'Adventure', 'Cultural', 'Shopping', 'Sightseeing'];

/* ================================================================
   COMPONENT
   ================================================================ */
function ExplorePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize from URL (?filter=Nature) — falls back to "All" if missing/invalid
  const urlFilter = searchParams.get('filter');
  const initialFilter = FILTER_OPTIONS.includes(urlFilter) ? urlFilter : ALL;
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  // If the URL changes (e.g. user clicks a different category card), sync state
  useEffect(() => {
    const next = FILTER_OPTIONS.includes(urlFilter) ? urlFilter : ALL;
    setActiveFilter(next);
  }, [urlFilter]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (filter === ALL) {
      setSearchParams({}, { replace: true });
    } else {
      setSearchParams({ filter }, { replace: true });
    }
  };

  const visibleRegions =
    activeFilter === ALL
      ? REGIONS
      : REGIONS.filter((r) => r.tags.includes(activeFilter));

  return (
    <>
      <PageBanner
        eyebrow="Discover Pakistan"
        title="Explore by Region"
        subtitle="Six distinct regions, each with its own character. Filter by the type of experience you're looking for, then book a free consultation to plan the details."
      />

      <div className="explore-section">
        <Container>

          {/* Section heading — keeps the heading tree in order
              (h1 in PageBanner → h2 here → h3 inside RegionCard) */}
          <h2 className="visually-hidden" id="regions-heading">
            All Regions
          </h2>

          {/* ── Filter bar ─────────────────────────────────── */}
          <div
            className="filter-bar"
            role="toolbar"
            aria-label="Filter regions by experience type"
          >
            {FILTER_OPTIONS.map((filter) => (
              <button
                key={filter}
                className={`filter-btn${activeFilter === filter ? ' active' : ''}`}
                onClick={() => handleFilterClick(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* ── Region cards ───────────────────────────────── */}
          {visibleRegions.length > 0 ? (
            <>
              <Row className="g-4">
                {visibleRegions.map((region) => (
                  <Col lg={4} md={6} xs={12} key={region.id}>
                    <RegionCard
                      name={region.name}
                      description={region.description}
                      highlights={region.highlights}
                      tags={region.tags}
                      gradient={region.gradient}
                      imageUrl={region.imageUrl}
                      alt={region.alt}
                    />
                  </Col>
                ))}
              </Row>

              {/* CTA */}
              <div className="text-center mt-5 pt-3">
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-muted)',
                    marginBottom: '1.2rem',
                  }}
                >
                  See a region that calls to you?
                </p>
                <Link to="/book" className="btn-primary-dark">
                  Plan a Visit
                </Link>
              </div>
            </>
          ) : (
            /* Empty state — shouldn't happen with current data, but good practice */
            <div className="explore-empty" role="status" aria-live="polite">
              <i className="bi bi-map" aria-hidden="true"></i>
              <p>No regions match this filter yet — check back soon!</p>
              <button
                className="filter-btn"
                onClick={() => handleFilterClick(ALL)}
              >
                Show all regions
              </button>
            </div>
          )}
        </Container>
      </div>
    </>
  );
}

export default ExplorePage;
