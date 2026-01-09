import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Supply } from './components/Supply';
import { Training } from './components/Training';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/supply" element={<Supply />} />
            <Route path="/training" element={<Training />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
