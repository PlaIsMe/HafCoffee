const FloatingContactButtons = () => {
  return (
    <div className="floating-contact-buttons">
      <a href="tel:0345378502" className="btn btn-lg btn-primary btn-lg-square" aria-label="Gọi điện">
        <i className="fa fa-phone-alt"></i>
      </a>
      <a href="https://zalo.me/0345378502" target="_blank" rel="noreferrer" className="btn btn-lg btn-primary btn-lg-square" aria-label="Zalo">
        <i className="fa fa-comment"></i>
      </a>
      <a href="https://facebook.com/hafcoffeevn" target="_blank" rel="noreferrer" className="btn btn-lg btn-primary btn-lg-square" aria-label="Facebook">
        <i className="fab fa-facebook-f"></i>
      </a>
    </div>
  );
};

export default FloatingContactButtons;
