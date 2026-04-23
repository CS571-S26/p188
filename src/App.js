import { HashRouter, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExplorePage from './pages/ExplorePage';
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
            <Route path="/book"    element={<BookConsultation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
