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
              <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
              <h1 className="display-1 text-white m-0">COFFEE</h1>
              <h2 className="text-white m-0">* SINCE 1950 *</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src={carousel2} alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
              <h1 className="display-1 text-white m-0">COFFEE</h1>
              <h2 className="text-white m-0">* SINCE 1950 *</h2>
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
