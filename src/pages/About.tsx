import AboutSection from "../components/AboutSection";
import Contact from "../components/Contact";
import PageHeader from "../components/PageHeader";

function About() {
  return (
    <>
      <PageHeader title="Về chúng tôi" />
      <div id="about">
        <AboutSection />
      </div>
      <Contact />
    </>
  );
}

export default About;
