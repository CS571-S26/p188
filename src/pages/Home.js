import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import TestimonialCard from '../components/TestimonialCard';

/* ================================================================
   DATA
   To replace a gradient placeholder with a real photo, set imageUrl.
   Example:  imageUrl: '/images/hunza.jpg'
   ================================================================ */

const HERO_SLIDES = [
  {
    id: 1,
    region: 'Gilgit-Baltistan',
    headline: 'Into the Karakoram.',
    subtext: "Where the world's greatest mountain ranges converge.",
    // imageUrl: '/images/hero-karakoram.jpg',   ← swap in your photo here
    gradient:
      'linear-gradient(165deg, #08131F 0%, #0E2D40 30%, #183A50 55%, #0E2820 80%, #060E09 100%)',
    alt: 'Karakoram mountain range at dusk, Gilgit-Baltistan',
  },
  {
    id: 2,
    region: 'Lahore, Punjab',
    headline: 'Ancient Forts. Living Culture.',
    subtext: 'Five millennia of civilization, still breathing today.',
    // imageUrl: '/images/hero-lahore.jpg',
    gradient:
      'linear-gradient(160deg, #150805 0%, #3D1A08 28%, #6B3510 52%, #4A2008 76%, #0F0603 100%)',
    alt: 'Badshahi Mosque and Lahore Fort at golden hour',
  },
  {
    id: 3,
    region: 'Thar Desert, Sindh',
    headline: 'Where the Desert Sings.',
    subtext: 'Golden dunes, ancient caravans, and endless skies.',
    // imageUrl: '/images/hero-thar.jpg',
    gradient:
      'linear-gradient(170deg, #0C0A04 0%, #2B2008 26%, #4A360A 50%, #6B4A15 66%, #3A2508 84%, #100D04 100%)',
    alt: 'Thar Desert dunes at sunset, Sindh',
  },
  {
    id: 4,
    region: 'Skardu, Gilgit-Baltistan',
    headline: 'Adventure at the Roof of the World.',
    subtext: 'Crystal lakes, ancient glaciers, and skies untouched by light.',
    // imageUrl: '/images/hero-skardu.jpg',
    gradient:
      'linear-gradient(155deg, #040C07 0%, #0A1F14 28%, #142B1E 55%, #1A3828 76%, #081410 100%)',
    alt: 'Skardu valley and Shangrila Lake, Gilgit-Baltistan',
  },
];

const CATEGORIES = [
  {
    id: 'cultural',
    label: 'Living Heritage',
    title: 'Cultural Heritage',
    tagline: 'Mughal forts, Sufi shrines, and 5,000 years of history.',
    // imageUrl: '/images/cat-cultural.jpg',
    gradient:
      'linear-gradient(155deg, #1A0805 0%, #4A1A08 40%, #8B3A14 70%, #3D1208 100%)',
    alt: 'Lahore Fort and Badshahi Mosque illuminated at night',
  },
  {
    id: 'nature',
    label: 'Wild & Majestic',
    title: 'Nature & Adventure',
    tagline: 'K2 base camps, glaciers, and the Hunza Valley at bloom.',
    // imageUrl: '/images/cat-nature.jpg',
    gradient:
      'linear-gradient(155deg, #030C06 0%, #0A2214 40%, #143A22 70%, #081C0E 100%)',
    alt: 'Hunza Valley with blossoming apricot trees and Rakaposhi peak',
  },
  {
    id: 'shopping',
    label: 'Artisan & Bazaar',
    title: 'Bazaars & Shopping',
    tagline: 'Handmade textiles, gemstones, and centuries of craft.',
    // imageUrl: '/images/cat-shopping.jpg',
    gradient:
      'linear-gradient(155deg, #0F0408 0%, #3A0E1A 40%, #6B1A28 70%, #2B0810 100%)',
    alt: "Colourful spice market in Peshawar's old city bazaar",
  },
  {
    id: 'sightseeing',
    label: 'Icons & Landmarks',
    title: 'Sightseeing',
    tagline: 'UNESCO World Heritage Sites and living monuments.',
    // imageUrl: '/images/cat-sightseeing.jpg',
    gradient:
      'linear-gradient(155deg, #05080F 0%, #0E1A38 40%, #1A3060 70%, #0A1228 100%)',
    alt: 'Mohenjo-daro ruins silhouetted against a warm sky',
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
  return (
    <>
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
                    <h1 className="hero-headline">{slide.headline}</h1>
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
            <p className="manifesto-label" id="manifesto-heading">
              Pakistan Tours
            </p>
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
