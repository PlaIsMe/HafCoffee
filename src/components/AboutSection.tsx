import aboutImg from '../image/about.png';

const AboutSection = () => (
  <div className="container-fluid py-5">
    <div className="container">
      <div className="section-title">
        <h4 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>About Us</h4>
        <h1 className="display-4">Serving Since 1950</h1>
      </div>
      <div className="row">
        <div className="col-lg-4 py-0 py-lg-5">
          <h1 className="mb-3">Our Story</h1>
          <h5 className="mb-3">Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</h5>
          <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et...</p>
          <a href="#" className="btn btn-secondary font-weight-bold py-2 px-4 mt-2">Learn More</a>
        </div>
        <div className="col-lg-4 py-5 py-lg-0" style={{ minHeight: '500px' }}>
          <div className="position-relative h-100">
            <img className="position-absolute w-100 h-100" src={aboutImg} style={{ objectFit: 'cover' }} />
          </div>
        </div>
        <div className="col-lg-4 py-0 py-lg-5">
          <h1 className="mb-3">Our Vision</h1>
          <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea...</p>
          <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet</h5>
          <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet</h5>
          <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet</h5>
          <a href="#" className="btn btn-primary font-weight-bold py-2 px-4 mt-2">Learn More</a>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSection;