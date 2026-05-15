import service1 from '../image/service-1.jpg';
import service2 from '../image/service-2.jpg';
import service3 from '../image/service-3.jpg';
import service4 from '../image/service-4.jpg';


const services = [
  {
    icon: 'fa-truck',
    title: 'Giao hàng toàn quốc',
    image: service1,
    description:
      'Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor',
  },
  {
    icon: 'fa-coffee',
    title: 'Cà phê sạch vkl',
    image: service2,
    description:
      'Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor',
  },
  {
    icon: 'fa-award',
    title: 'Chất lượng',
    image: service3,
    description:
      'Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor',
  },
  {
    icon: 'fa-table',
    title: 'Đặt hàng trực tuyến',
    image: service4,
    description:
      'Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor',
  },
];

const Service = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>
            Hướng dẫn sử dụng
          </h4>
          <h1 className="display-4">Fresh &amp; Organic Beans</h1>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-6 mb-5" key={index}>
              <div className="row align-items-center">
                <div className="col-sm-5">
                  <img className="img-fluid mb-3 mb-sm-0" src={service.image} alt={service.title} />
                </div>
                <div className="col-sm-7">
                  <h4>
                    <i className={`fa ${service.icon} service-icon`} /> {service.title}
                  </h4>
                  <p className="m-0">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
