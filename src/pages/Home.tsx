import Carousel from "../components/Carousel";
import Menu from "../components/Menu";
import Offer from "../components/Offer";
import Instruction from "../components/Service";
import Testimonial from "../components/Testimonial";

function Home() {
  return (
    <>
      <Carousel />
      <Menu />
      <Instruction />
      <Offer />
      <Testimonial />
    </>
  );
}

export default Home;
