import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';

function AppNavbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [expanded,  setExpanded]  = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  /* Turn solid after 80px of scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  /* Transparent: only on home page, before scroll, with menu closed */
  const isTransparent = isHome && !scrolled && !expanded;

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={`app-navbar ${isTransparent ? 'is-transparent' : 'is-solid'}`}
      expanded={expanded}
      onToggle={setExpanded}
      aria-label="Main navigation"
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="navbar-brand-custom"
          onClick={() => setExpanded(false)}
        >
          <i className="bi bi-compass brand-icon" aria-hidden="true" />
          Pakistan Tours
        </Navbar.Brand>

        {/* Mobile toggle */}
        <Navbar.Toggle
          aria-controls="main-nav"
          aria-label="Toggle navigation menu"
        />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-1">

            <Nav.Link
              as={NavLink}
              to="/"
              end
              className="nav-link-custom"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/explore"
              className="nav-link-custom"
              onClick={() => setExpanded(false)}
            >
              Explore
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/tour"
              className="nav-link-custom"
              onClick={() => setExpanded(false)}
            >
              Sample Tour
            </Nav.Link>

            <div className="ms-lg-2">
              <Link
                to="/book"
                className="btn-book-now"
                onClick={() => setExpanded(false)}
                aria-label="Book a consultation"
              >
                Book Now
              </Link>
            </div>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
