import { useParams } from "react-router-dom";
import SitemapPath from "../components/SitemapPath";

const Services = () => {
  const { slug } = useParams();
  return (
    <div>
      <SitemapPath title={`Services`} child={`${slug}`} />
    </div>
  );
};

export default Services;
