import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../image/logo_long_border.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsCollapsed(true);
  }, [location.pathname, location.hash]);

  const isActive = (path: string) => location.pathname === path;
  const toggleCollapse = () => setIsCollapsed(prev => !prev);
  const closeNavbar = () => setIsCollapsed(true);

  return (
    <div className="container-fluid p-0 nav-bar">
      <nav className={`navbar navbar-expand-lg bg-none navbar-dark${scrolled ? ' navbar-scrolled' : ' py-3'}`}>
        <Link to="/" className="navbar-brand px-lg-4 m-0">
          <img src={logo} alt="HafCoffee" className="navbar-logo img-fluid" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-between${isCollapsed ? '' : ' show'}`} id="navbarCollapse">
          <div className={`navbar-nav ml-auto${scrolled ? '' : ' p-4'}`}>
            <Link to="/" onClick={closeNavbar} className={`nav-item nav-link ${isActive('/') ? 'active' : ''}`}><i className="fa-solid fa-house"></i> Trang chủ</Link>
            <Link to="/products#menu" onClick={closeNavbar} className={`nav-item nav-link ${isActive('/products') ? 'active' : ''}`}><i className="fa-solid fa-mug-hot"></i> Sản phẩm</Link>
            <Link to="/about#about" onClick={closeNavbar} className={`nav-item nav-link ${isActive('/about') ? 'active' : ''}`}><i className="fa-solid fa-circle-info"></i> Về chúng tôi</Link>
            <Link to="/blog" onClick={closeNavbar} className={`nav-item nav-link ${isActive('/blog') ? 'active' : ''}`}><i className="fa-solid fa-blog"></i> Blog</Link>
            {/* <div className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" data-toggle="dropdown"><i className="fa-solid fa-user"></i> Tài khoản</div>
              <div className="dropdown-menu text-capitalize">
                  <Link to="/login#login-form" className="dropdown-item">Đăng nhập</Link>
                  <Link to="/register#register-form" className="dropdown-item">Đăng ký</Link>
              </div>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
