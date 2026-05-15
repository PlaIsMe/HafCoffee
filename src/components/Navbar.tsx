import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="container-fluid p-0 nav-bar">
      <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
        <Link to="/" className="navbar-brand px-lg-4 m-0">
          <h1 className="m-0 display-4 text-uppercase text-white">HaMai Coffee</h1>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div className="navbar-nav ml-auto p-4">
            <Link to="/" className={`nav-item nav-link ${isActive('/') ? 'active' : ''}`}><i className="fa-solid fa-house"></i> Trang chủ</Link>
            <Link to="/products" className={`nav-item nav-link ${isActive('/products') ? 'active' : ''}`}><i className="fa-solid fa-mug-hot"></i> Sản phẩm</Link>
            <Link to="/about" className={`nav-item nav-link ${isActive('/about') ? 'active' : ''}`}><i className="fa-solid fa-circle-info"></i> Về chúng tôi</Link>
            <Link to="/blog" className={`nav-item nav-link ${isActive('/blog') ? 'active' : ''}`}><i className="fa-solid fa-blog"></i> Blog</Link>
            <div className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" data-toggle="dropdown"><i className="fa-solid fa-user"></i> Tài khoản</div>
              <div className="dropdown-menu text-capitalize">
                  <Link to="/login" className="dropdown-item">Đăng nhập</Link>
                  <Link to="/register" className="dropdown-item">Đăng ký</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
