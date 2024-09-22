import { GrFormNext } from "react-icons/gr";
import { Link } from "react-router-dom";

type Sitemap = {
  title: String;
  child?: String;
};

const SitemapPath = ({ title, child }: Sitemap) => {
  return (
    <div className="wavy-back h-[45vh] text-white flex flex-col items-center justify-center">
      <h2 className="text-2xl text-center sm:text-4xl md:text-6xl font-bold">
        {" "}
        {child ? child : title}
      </h2>
      <div className="mt-10  text-md sm:text-lg md:text-xl font-semibold flex items-center gap-x-1 md:gap-x-2">
        <Link
          to={"/"}
          className="hover:text-orange-500 cursor-pointer transition-colors duration-500"
        >
          Home
        </Link>
        <GrFormNext className="mt-1 text-xl md:text-3xl" />
        <span className="hover:text-orange-500 cursor-default transition-colors duration-500">
          {title}
        </span>
        {child && <GrFormNext className="mt-1 text-xl md:text-3xl" />}
        {child && (
          <span className="hover:text-orange-500 transition-colors duration-500 cursor-default">
            {child}
          </span>
        )}
      </div>
    </div>
  );
};

export default SitemapPath;
