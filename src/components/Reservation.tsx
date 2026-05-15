const Reservation = () => {
  return (
    <div className="container-fluid my-5">
      <div className="container">
        <div className="reservation position-relative overlay-top overlay-bottom">
          <div className="row align-items-center">
            {/* Left Side Content */}
            <div className="col-lg-6 my-5 my-lg-0">
              <div className="p-5">
                <div className="mb-4">
                  <h1 className="display-3 text-primary">30% OFF</h1>
                  <h1 className="text-white">For Online Reservation</h1>
                </div>
                <p className="text-white">
                  Các điều khoản ghi ở đây ...
                </p>
                <ul className="list-inline text-white m-0">
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet
                  </li>
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet
                  </li>
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side Form */}
            <div className="col-lg-6">
              <div
                className="text-center p-5"
                style={{ background: 'rgba(51, 33, 29, .8)' }}
              >
                <h1 className="text-white mb-4 mt-5">Xác nhận đơn hàng</h1>
                <form className="mb-5">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control bg-transparent border-primary p-4"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control bg-transparent border-primary p-4"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control bg-transparent border-primary p-4"
                      placeholder="Date"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control bg-transparent border-primary p-4"
                      placeholder="Time"
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="custom-select bg-transparent border-primary px-4"
                      style={{ height: '49px' }}
                    >
                      <option defaultValue="selected">Person</option>
                      <option value="1">Person 1</option>
                      <option value="2">Person 2</option>
                      <option value="3">Person 3</option>
                      <option value="4">Person 4</option>
                    </select>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary btn-block font-weight-bold py-3"
                      type="submit"
                    >
                      Đặt ngay
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* End Right Side */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
