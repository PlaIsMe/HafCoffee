import OwlCarousel from 'react-owl-carousel';
const TypedOwlCarousel: any = OwlCarousel;
import testimonial1 from '../image/testimonial-1.jpg';
import testimonial2 from '../image/testimonial-2.jpg';
import testimonial3 from '../image/testimonial-3.jpg';
import testimonial4 from '../image/testimonial-4.jpg';

const Testimonial = () => {
    const testimonials = [
        {
            name: 'Phong',
            profession: 'Profession',
            image: testimonial1,
            message:
                'Ôi ôi ôi ôi ôi ôi ôi ôi',
        },
        {
            name: 'Phong',
            profession: 'Profession',
            image: testimonial2,
            message:
                'Uia uia ui',
        },
        {
            name: 'Client Name',
            profession: 'Profession',
            image: testimonial3,
            message:
                'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita',
        },
        {
            name: 'Client Name',
            profession: 'Profession',
            image: testimonial4,
            message:
                'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita',
        },
    ];

    const options = {
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
        },
    };

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>
                        Cảm nhận
                    </h4>
                    <h1 className="display-4">Khách hàng nói gì về chúng tôi</h1>
                </div>

                <TypedOwlCarousel className="owl-theme testimonial-carousel" {...options}>
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial-item" key={index}>
                            <div className="d-flex align-items-center mb-3">
                                <img className="img-fluid" src={testimonial.image} alt="" />
                                <div className="ml-3">
                                    <h4>{testimonial.name}</h4>
                                    <i>{testimonial.profession}</i>
                                </div>
                            </div>
                            <p className="m-0">{testimonial.message}</p>
                        </div>
                    ))}
                </TypedOwlCarousel>
            </div>
        </div>
    );
};

export default Testimonial;
