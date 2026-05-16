import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import FloatingContactButtons from './components/FloatingContactButtons';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import Blog from './pages/Blog';
import GoogleAuthSuccess from './components/GoogleAuthSuccess';

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/google-auth/success" element={<GoogleAuthSuccess />} />
      </Routes>
      <Footer />
      <BackToTop />
      <FloatingContactButtons />
    </Router>
  );
}

export default App;