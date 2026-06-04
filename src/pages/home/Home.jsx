import CallToAction from "../../components/home/CallToAction";
import FAQ from "../../components/home/FAQ";
import Features from "../../components/home/Features";
import FeaturesList from "../../components/home/FeaturesList";
import Hero from "../../components/home/Hero";
import Partnerships from "../../components/home/Partnerships";
import Services from "../../components/home/Services";
import Testimonials from "../../components/home/Testimonials";

const Home = () => {
  return (
    <div className="w-full max-w-11/12 mx-auto">
      <Hero></Hero>
      <Features></Features>
      <Services></Services>
      <Partnerships></Partnerships>
      <FeaturesList></FeaturesList>
      <CallToAction></CallToAction>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
