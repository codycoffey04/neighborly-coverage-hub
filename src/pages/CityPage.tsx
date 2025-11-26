import { useParams } from "react-router-dom";
import { cityData } from "@/data/cityData";
import { CityPageTemplate } from "@/components/city/CityPageTemplate";
import NotFound from "./NotFound";

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  if (!citySlug || !cityData[citySlug]) {
    return <NotFound />;
  }
  
  const city = cityData[citySlug];
  
  return <CityPageTemplate city={city} />;
};

export default CityPage;
