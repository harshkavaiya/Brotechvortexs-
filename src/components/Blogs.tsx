import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { CircleArrowRight } from "lucide-react";
import { FaUser } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";

type BlogBlock = {
  src: String;
  title: String;
  desc: String;
  link: String;
};
const Blogs = () => {
  return (
    <div className="bg-gray-200 xl:px-40 px-10 pt-10 pb-32">
      <div className="flex flex-col lg:flex-row py-20 gap-2 w-full relative">
        <div className="flex flex-col text-center lg:text-left lg:w-[45%]">
          <p>icon</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Checkout Recent News & Blogs
          </h2>
        </div>
        <div className="lg:w-[75%] flex flex-col md:flex-row md:items-end items-center">
          <div className="pt-6">
            <p className="text-center md:text-left text-gray-500 ml-5 text-wrap md:w-[70%]">
              Velit nulla, nisl laboriosam ea ea saepe integer, varius, elit
              dapibus. Nostrum quibusdam dolorem. Orci donec proident porttitor.
            </p>
          </div>
          <Button className=" bg-yellow-500 hover:bg-orange-500 uppercase md:right-0 px-8 py-6 mt-8 md:mt-0">
            View All Blogs
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-y-8 lg:gap-y-0 lg:flex-row  lg:gap-10 lg:h-[70vh] overflow-hidden">
        <div className="w-full h-80 md:h-full lg:w-[45%] relative overflow-hidden rounded-[50px]">
          <div className="w-full opacity-60 bg-black blur-2xl bottom-0 absolute "></div>
          <div className="text-white h-2/4  md:h-1/3 z-20 absolute bottom-0 p-2 md:px-10">
            <h2 className="text-xl md:text-2xl font-bold sm:mt-10 lg:mt-10">
              Why You Should Select The Best Handyman Company?
            </h2>
            <div className="flex items-center gap-1 my-3">
              <FaUser />
              <p>byxperteam.</p>
              <IoTimeSharp className="ml-2" />
              <p> August 5, 2024</p>
            </div>
          </div>

          <img
            src="https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/08/two-positive-handsome-young-male-engineers-in-hard.jpg"
            className=" w-full h-full object-cover"
          />
        </div>
        <div className="w-full  lg:w-[55%]">
          <BlogBlock
            src={
              "https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/08/professional-repairman-fixing-air-conditioner-hang.jpg"
            }
            title={"Best Repairing Is Our Main Concern"}
            desc={
              "Provident ipsa harum ab arcu quo veritatis modi platea excepteur habitant..."
            }
            link={"/"}
          />
          <BlogBlock
            src={
              "https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/08/guy-standing-under-a-solar-station-with-a-coil.jpg"
            }
            title={"Ready Equipments For Fixing The Work"}
            desc={
              "Provident ipsa harum ab arcu quo veritatis modi platea excepteur habitant..."
            }
            link={"/"}
          />
        </div>
      </div>
    </div>
  );
};

const BlogBlock = ({ src, title, desc, link }: BlogBlock) => {
  return (
    <div className="bg-white flex flex-col md:flex-row rounded-[50px] lg:h-[47%] p-3 mb-8">
      <img
        src={`${src}`}
        className="rounded-[50px] w-full md:w-[53%] h-64 md:h-full"
      />
      <div className="flex flex-col items-start justify-center px-4 py-6 gap-y-2 md:gap-y-5">
        <h2 className="font-bold text-lg md:text-xl">{title}</h2>
        <p className="text-gray-400">{desc}</p>
        <Link
          to={`${link}`}
          className="hover:text-red-900 flex items-center gap-2 font-semibold uppercase text-[#FBBF24]"
        >
          Learn More <CircleArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};
export default Blogs;
