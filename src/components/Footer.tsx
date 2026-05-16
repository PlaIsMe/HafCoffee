import logoBorder from '../image/logo_border.png';

const Footer = () => {
    return (
        <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
            <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: '3px' }}>
                        Liên hệ
                    </h4>
                    <p><i className="fa fa-map-marker-alt mr-2"></i>2G đường Liên Khu 2-10, phường Bình Hưng Hoà, Thành phố Hồ Chí Minh</p>
                    <p><i className="fa fa-phone-alt mr-2"></i>0345378502</p>
                    <p className="m-0"><i className="fa fa-envelope mr-2"></i>hafcoffeevn@gmail.com</p>
                </div>

                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: '3px' }}>
                        Theo dõi chúng tôi
                    </h4>
                    <p>Cập nhật sản phẩm mới, ưu đãi và mẹo pha cà phê nguyên chất mỗi ngày.</p>
                    <div className="d-flex justify-content-start">
                        <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-lg btn-outline-light btn-lg-square" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: '3px' }}>
                        Giờ hoạt động
                    </h4>
                    <div>
                        <h6 className="text-white text-uppercase">THỨ 2 - THỨ 6</h6>
                        <p>8.00 AM - 8.00 PM</p>
                        <h6 className="text-white text-uppercase">THỨ 7 - CHỦ NHẬT</h6>
                        <p>2.00 PM - 8.00 PM</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-5 d-flex align-items-center justify-content-center">
                    <img
                        src={logoBorder}
                        alt="logo border"
                        className="img-fluid"
                        style={{ maxHeight: '180px', objectFit: 'contain' }}
                    />
                </div>
            </div>

            <div className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5"
                style={{ borderColor: 'rgba(256, 256, 256, .1)' }}>
                <p className="mb-2 text-white">
                    Copyright 2026 &copy; <a className="font-weight-bold" href="#">hafcoffee</a>
                </p>
                {/* <p className="m-0 text-white">
                    Designed by <a className="font-weight-bold" href="https://htmlcodex.com">HTML Codex</a>
                </p> */}
            </div>
        </div>
    );
};

export default Footer;