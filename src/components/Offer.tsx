import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom">
      <div className="container py-5">
        <h1 className="display-3 text-primary mt-3">FREE SHIP</h1>
        <h1 className="text-white mb-3">Ưu đãi đặc biệt</h1>
        <h4 className="text-white font-weight-normal mb-4 pb-3">
          Khi mua số lượng lớn sản phẩm
        </h4>
        <Link to="/product">
          <button className="btn btn-primary font-weight-bold px-3">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i> Đặt hàng ngay
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Offer;