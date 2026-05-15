import carousel1 from '../image/carousel-1.jpg';
import carousel2 from '../image/carousel-2.jpg';

const Carousel = () => {  
  return (
    <div className="container-fluid p-0 mb-5">
      <div id="blog-carousel" className="carousel slide overlay-bottom" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src={carousel1} alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-primary font-weight-medium m-0">Cà phê</h2>
              <h1 className="display-1 text-white m-0">NGUYÊN CHẤT</h1>
              <h2 className="text-white m-0">5 gu vị chọn lọc</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src={carousel2} alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-primary font-weight-medium m-0">Đậm đà gu việt</h2>
              <h1 className="display-1 text-white m-0">ROBUSTA</h1>
              <h2 className="text-white m-0">Mạnh mẽ - Nguyên bản</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src={carousel1} alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-primary font-weight-medium m-0">Thơm thanh tự nhiên</h2>
              <h1 className="display-1 text-white m-0">ARABICA</h1>
              <h2 className="text-white m-0">Êm nhẹ - Hậu thanh</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src={carousel2} alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-primary font-weight-medium m-0">Cân bằng mỗi ngày</h2>
              <h1 className="display-1 text-white m-0">BLEND</h1>
              <h2 className="text-white m-0">Tròn vị - Dễ uống</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src={carousel1} alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-primary font-weight-medium m-0">Đậm lực tỉnh táo</h2>
              <h1 className="display-1 text-white m-0">CULI ROBUSTA</h1>
              <h2 className="text-white m-0">Mạnh vị - Hậu sâu</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src={carousel2} alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-primary font-weight-medium m-0">Ngọt dịu tự nhiên</h2>
              <h1 className="display-1 text-white m-0">ROBUSTA HONEY</h1>
              <h2 className="text-white m-0">Êm mượt - Ít gắt</h2>
            </div>
          </div>
        
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#blog-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#blog-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
