import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExplorePage from './pages/ExplorePage';
import SampleTour from './pages/SampleTour';
import BookConsultation from './pages/BookConsultation';

function App() {
  return (
    <HashRouter>
      <div className="d-flex flex-column min-vh-100">
        <AppNavbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/"        element={<Home />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/tour"    element={<SampleTour />} />
            <Route path="/book"    element={<BookConsultation />} />
            {/* Fallback — any unknown URL goes home */}
            <Route path="*"        element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
