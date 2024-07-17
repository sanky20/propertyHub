import Hero from "../components/Hero";
import InfoBoxes from "../components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
import FeaturedPropeties from "@/components/FeaturedPropeties";
const HomePage = async () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeaturedPropeties />
      <HomeProperties />
    </>
  );
};

export default HomePage;
