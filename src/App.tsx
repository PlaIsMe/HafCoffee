import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import Blog from './pages/Blog';
import GoogleAuthSuccess from './components/GoogleAuthSuccess';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;