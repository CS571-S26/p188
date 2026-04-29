import { useEffect, useState } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import TestimonialCard from '../components/TestimonialCard';
import ReviewForm from '../components/ReviewForm';

/* localStorage key for visitor-submitted reviews */
const REVIEWS_KEY = 'pakistanTours_reviews_v1';

/* Helpers — read / write reviews to localStorage safely */
function loadReviews() {
  try {
    const raw = window.localStorage.getItem(REVIEWS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    // localStorage may throw in private mode / SSR — fail soft
    return [];
  }
}

function saveReviews(reviews) {
  try {
    window.localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
  } catch {
    /* silent — quota exceeded or unavailable */
  }
}

/* Avatar colour rotation for visitor reviews */
const AVATAR_CLASSES = ['tc-avatar-green', 'tc-avatar-gold', 'tc-avatar-terra'];

/* ================================================================
   DATA
   Images are sourced from Wikimedia Commons (CC-licensed). The
   Special:FilePath redirect resolves to the actual hosted image,
   so the URL stays stable even if the file moves.
   To swap in a local photo, just replace the imageUrl with e.g.
     imageUrl: '/images/hero-karakoram.jpg'
   ================================================================ */
const wcImg = (filename, width = 2400) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=${width}`;

const HERO_SLIDES = [
  {
    id: 1,
    region: 'Gilgit-Baltistan',
    headline: 'Into the Karakoram.',
    subtext: "Where the world's greatest mountain ranges converge.",
    /* 3840×2160 native — sharp at full-screen on 4K displays */
    imageUrl: wcImg('Hunza_Valley_Gilgit_Baltistan_Pakistan_3.JPG'),
    gradient:
      'linear-gradient(165deg, #08131F 0%, #0E2D40 30%, #183A50 55%, #0E2820 80%, #060E09 100%)',
    alt: 'Hunza Valley in the Karakoram, Gilgit-Baltistan',
  },
  {
    id: 2,
    region: 'Lahore, Punjab',
    headline: 'Ancient Forts. Living Culture.',
    subtext: 'Five millennia of civilization, still breathing today.',
    imageUrl: wcImg('Badshahi_Mosque_Lahore_2014.JPG'),
    gradient:
      'linear-gradient(160deg, #150805 0%, #3D1A08 28%, #6B3510 52%, #4A2008 76%, #0F0603 100%)',
    alt: 'Badshahi Mosque, Lahore',
  },
  {
    id: 3,
    region: 'Thar Desert, Sindh',
    headline: 'Where the Desert Sings.',
    subtext: 'Golden dunes, ancient caravans, and endless skies.',
    imageUrl: wcImg('Sand_dunes_of_thar_desert.jpg'),
    gradient:
      'linear-gradient(170deg, #0C0A04 0%, #2B2008 26%, #4A360A 50%, #6B4A15 66%, #3A2508 84%, #100D04 100%)',
    alt: 'Sand dunes of the Thar Desert, Sindh',
  },
  {
    id: 4,
    region: 'Fairy Meadows, Gilgit-Baltistan',
    headline: 'A Meadow at the Foot of a Giant.',
    subtext: 'Alpine grasslands beneath Nanga Parbat — the eighth-highest mountain on Earth.',
    imageUrl: wcImg('Fairy_Meadows_and_Nanga_Parbat_11.JPG'),
    gradient:
      'linear-gradient(155deg, #050E08 0%, #0F2415 28%, #1A3A22 55%, #213E2A 76%, #0A1810 100%)',
    alt: 'Fairy Meadows alpine grassland with Nanga Parbat in the distance',
  },
];

const CATEGORIES = [
  {
    id: 'cultural',
    label: 'Living Heritage',
    title: 'Cultural Heritage',
    tagline: 'Mughal forts, Sufi shrines, and 5,000 years of history.',
    imageUrl: wcImg('Badshahi_Mosque_night_view.JPG'),
    gradient:
      'linear-gradient(155deg, #1A0805 0%, #4A1A08 40%, #8B3A14 70%, #3D1208 100%)',
    alt: 'Badshahi Mosque illuminated at night, Lahore',
    to: '/explore?filter=Cultural',
  },
  {
    /* Repurposed: was "Nature & Adventure" — now spotlighted as Fairy Meadows */
    id: 'fairy-meadows',
    label: 'Iconic Destination',
    title: 'Fairy Meadows',
    tagline: 'Alpine grasslands at the foot of Nanga Parbat — the eighth-highest peak.',
    imageUrl: wcImg('Fairy_Meadows_and_Nanga_Parbat_34.JPG'),
    gradient:
      'linear-gradient(155deg, #030C06 0%, #0A2214 40%, #143A22 70%, #081C0E 100%)',
    alt: 'Fairy Meadows alpine grassland with Nanga Parbat behind',
    to: '/explore?filter=Nature',
  },
  {
    id: 'shopping',
    label: 'Artisan & Bazaar',
    title: 'Bazaars & Shopping',
    tagline: 'Handmade textiles, gemstones, and centuries of craft.',
    imageUrl: wcImg('Board_Bazaar_Peshawar.jpg'),
    gradient:
      'linear-gradient(155deg, #0F0408 0%, #3A0E1A 40%, #6B1A28 70%, #2B0810 100%)',
    alt: 'Board Bazaar in Peshawar',
    to: '/explore?filter=Shopping',
  },
  {
    id: 'sightseeing',
    label: 'Icons & Landmarks',
    title: 'Sightseeing',
    tagline: 'UNESCO World Heritage Sites and living monuments.',
    imageUrl: wcImg('Mohenjodaro_-_view_of_the_stupa_mound.JPG'),
    gradient:
      'linear-gradient(155deg, #05080F 0%, #0E1A38 40%, #1A3060 70%, #0A1228 100%)',
    alt: 'Stupa mound at Mohenjo-daro, an ancient Indus Valley civilization site',
    to: '/explore?filter=Sightseeing',
  },
];

const FEATURES = [
  {
    icon: 'bi-people',
    title: 'Local Expertise',
    description:
      'Our guides are from the regions they lead. Every recommendation comes from lived experience — not a guidebook.',
  },
  {
    icon: 'bi-map',
    title: 'Tailored Itineraries',
    description:
      'We design each trip around your interests, travel pace, and group. No two journeys are ever the same.',
  },
  {
    icon: 'bi-shield-check',
    title: 'Seamless Planning',
    description:
      'Logistics, permits, accommodation, local connections — we handle every detail so you travel worry-free.',
  },
  {
    icon: 'bi-gem',
    title: 'Authentic Experiences',
    description:
      'Dinners in local homes, off-trail treks, artisan workshops. We go well beyond the tourist trail.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'Our family had visited Pakistan before, but never like this. Every destination was curated perfectly, and the local knowledge made all the difference.',
    name: 'Ahmed Malik',
    location: 'Karachi, Pakistan',
    initials: 'AM',
    avatarClass: 'tc-avatar-green',
  },
  {
    quote:
      'I was nervous about solo travel in a new country. They planned every detail, connected me with wonderful people, and made me feel genuinely welcome throughout.',
    name: 'Sarah Johnson',
    location: 'London, UK',
    initials: 'SJ',
    avatarClass: 'tc-avatar-gold',
  },
  {
    quote:
      'The Hunza Valley itinerary was beyond anything I could have planned myself — the timing of the cherry blossoms, the hidden guesthouses. Truly exceptional.',
    name: 'Omar Hussain',
    location: 'Toronto, Canada',
    initials: 'OH',
    avatarClass: 'tc-avatar-terra',
  },
];

/* ================================================================
   COMPONENT
   ================================================================ */
function Home() {
  /* Visitor-submitted reviews, loaded from localStorage on mount */
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    setUserReviews(loadReviews());
  }, []);

  const handleNewReview = (review) => {
    const next = [review, ...userReviews];
    setUserReviews(next);
    saveReviews(next);
  };

  return (
    <>
      {/* Single page-level h1 — visually hidden but read by screen readers
          and search engines. Slide headlines are demoted to a styled <p>
          so the carousel doesn't pollute the heading tree with 4 h1s. */}
      <h1 className="visually-hidden">
        Pakistan Tours — Curated Journeys Through Pakistan
      </h1>

      {/* ══════════════════════════════════════════════════════════
          HERO — Full-viewport crossfade carousel
      ══════════════════════════════════════════════════════════ */}
      <section aria-label="Hero — Pakistan Tours">
        <Carousel
          id="hero-carousel"
          fade
          controls={false}
          pause={false}
          interval={6500}
        >
          {HERO_SLIDES.map((slide) => (
            <Carousel.Item key={slide.id}>
              {/* ── Background: gradient OR real photo ────────── */}
              <div
                className="slide-bg"
                style={
                  slide.imageUrl
                    ? {
                        backgroundImage: `url(${slide.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : { background: slide.gradient }
                }
                role="img"
                aria-label={slide.alt}
              />

              {/* ── Dark overlay for text legibility ─────────── */}
              <div className="slide-overlay" aria-hidden="true" />

              {/* ── Text caption ──────────────────────────────── */}
              <Carousel.Caption as="div">
                <Container>
                  <div className="hero-caption-inner">
                    <p className="hero-eyebrow">{slide.region}</p>
                    {/* Visually styled like a heading. Intentionally NOT a
                        heading element: the carousel renders all 4 slides
                        in the DOM at once, which would create 4 duplicate
                        h-tags and confuse screen-reader heading navigation.
                        The page-level h1 lives outside the carousel. */}
                    <p className="hero-headline">{slide.headline}</p>
                    <p className="hero-subtext">{slide.subtext}</p>
                    <Link to="/book" className="btn-hero-cta">
                      Book a Consultation
                    </Link>
                  </div>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Scroll nudge */}
        <a
          href="#manifesto"
          className="hero-scroll-hint"
          aria-label="Scroll to explore"
        >
          <i className="bi bi-chevron-down" aria-hidden="true"></i>
          <span>Explore</span>
        </a>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MANIFESTO — Brand statement
      ══════════════════════════════════════════════════════════ */}
      <section id="manifesto" className="manifesto-section" aria-labelledby="manifesto-heading">
        <Container>
          <div className="text-center">
            <h2 className="manifesto-label" id="manifesto-heading">
              Pakistan Tours
            </h2>
            <p className="manifesto-quote">
              The world's most dramatic landscapes, its most{' '}
              <em>ancient civilizations</em>, its most vibrant markets — all in
              one country. Let us be your guide to a journey that changes how
              you see the world.
            </p>
            <div className="manifesto-meta">
              <span className="manifesto-line" aria-hidden="true" />
              <span className="manifesto-byline">Est. Lahore, Pakistan</span>
              <span className="manifesto-line" aria-hidden="true" />
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CATEGORIES — Four ways to explore Pakistan
      ══════════════════════════════════════════════════════════ */}
      <section className="categories-section" aria-labelledby="cat-heading">
        <Container>
          {/* Section header — left-aligned, editorial */}
          <Row className="align-items-end mb-5">
            <Col lg={7}>
              <span className="section-eyebrow">What We Offer</span>
              <h2
                className="section-heading"
                id="cat-heading"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                Four Ways to Experience Pakistan
              </h2>
              <hr className="gold-rule" aria-hidden="true" />
            </Col>
            <Col lg={5} className="d-none d-lg-flex justify-content-end align-items-end">
              <p className="section-body mb-0" style={{ maxWidth: 320, textAlign: 'right' }}>
                Tell us which calls to you, and we'll build the rest around your vision.
              </p>
            </Col>
          </Row>

          {/* Cards grid */}
          <Row className="g-3">
            {CATEGORIES.map((cat) => (
              <Col lg={3} md={6} xs={12} key={cat.id}>
                <CategoryCard
                  title={cat.title}
                  tagline={cat.tagline}
                  label={cat.label}
                  gradient={cat.gradient}
                  imageUrl={cat.imageUrl}
                  alt={cat.alt}
                  to={cat.to}
                />
              </Col>
            ))}
          </Row>

          {/* CTA below */}
          <div className="text-center mt-5 pt-2">
            <Link to="/book" className="btn-primary-dark me-3">
              Plan My Journey
            </Link>
            <span
              className="section-body"
              style={{ fontSize: '0.9rem', verticalAlign: 'middle' }}
            >
              Free consultation · No commitment
            </span>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FEATURES — Why choose us
      ══════════════════════════════════════════════════════════ */}
      <section className="features-section" aria-labelledby="features-heading">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={5} className="mb-4 mb-lg-0">
              <span className="section-eyebrow">Why Pakistan Tours</span>
              <h2
                className="section-heading"
                id="features-heading"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
              >
                Travel with People<br />Who Know.
              </h2>
              <hr className="gold-rule" aria-hidden="true" />
              <p className="section-body mt-4" style={{ maxWidth: 380 }}>
                We're not a booking engine. We're a team of passionate local
                experts who live and breathe Pakistan — and want you to
                experience it the way only insiders can.
              </p>
            </Col>

            <Col lg={7}>
              <div className="features-grid" role="list">
                {FEATURES.map((f) => (
                  <div className="feature-item" key={f.title} role="listitem">
                    <i className={`bi ${f.icon} feature-icon`} aria-hidden="true"></i>
                    <h3 className="feature-title">{f.title}</h3>
                    <p className="feature-desc">{f.description}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TESTIMONIALS — Traveller stories
      ══════════════════════════════════════════════════════════ */}
      <section className="testimonials-section" aria-labelledby="testimonials-heading">
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center mb-5">
            <span className="section-eyebrow">Traveller Stories</span>
            <h2
              className="section-heading on-dark"
              id="testimonials-heading"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
            >
              Journeys That Stay With You
            </h2>
            <hr className="gold-rule centered" aria-hidden="true" />
          </div>

          <Row className="g-4 justify-content-center">
            {/* Visitor-submitted reviews appear first (most recent) */}
            {userReviews.map((r, idx) => (
              <Col lg={4} md={6} xs={12} key={r.id}>
                <TestimonialCard
                  quote={r.quote}
                  name={r.name}
                  location={r.location}
                  initials={r.initials}
                  avatarClass={AVATAR_CLASSES[idx % AVATAR_CLASSES.length]}
                />
              </Col>
            ))}
            {/* Curated baseline testimonials */}
            {TESTIMONIALS.map((t) => (
              <Col lg={4} md={6} xs={12} key={t.name}>
                <TestimonialCard
                  quote={t.quote}
                  name={t.name}
                  location={t.location}
                  initials={t.initials}
                  avatarClass={t.avatarClass}
                />
              </Col>
            ))}
          </Row>

          {/* ── Review form — collect new visitor stories ──────── */}
          <Row className="justify-content-center mt-5 pt-4">
            <Col lg={8} md={10} xs={12}>
              <ReviewForm onSubmit={handleNewReview} />
            </Col>
          </Row>

          {/* Closing CTA */}
          <div className="text-center mt-5 pt-2">
            <Link to="/book" className="btn-hero-cta">
              Start Your Story
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Home;
