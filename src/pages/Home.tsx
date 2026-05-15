import AboutSection from "../components/AboutSection";
import Carousel from "../components/Carousel";
import Menu from "../components/Menu";
import Offer from "../components/Offer";
import Reservation from "../components/Reservation";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";

function Home() {
  return (
    <>
      <Carousel />
      <AboutSection />
      <Service />
      <Offer />
      <Menu />
      <Reservation />
      <Testimonial />
    </>
  );
}

export default Home;
