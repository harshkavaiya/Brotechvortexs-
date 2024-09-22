import SitemapPath from "../components/SitemapPath";
import TemaMembers from "../components/TemaMembers";

const Aboutus = () => {
  return (
    <div>
      <SitemapPath title={"About us"} />
      <div className="py-32 bg-pink-100 xl:px-40  px-10">
        <TemaMembers />
      </div>
    </div>
  );
};

export default Aboutus;
