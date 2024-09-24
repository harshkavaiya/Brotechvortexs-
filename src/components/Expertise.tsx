import { CircleArrowRight, Hammer, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import Cretivity from "../assets/images/creative.jpg";
import CynerSecurity from "../assets/images/cyber.jpg";
import SoftDevlop from "../assets/images/softdev.jpg";
import UI_UX from "../assets/images/uiux.jpg";

type Block = {
  src: String;
  title: String;
  desc: String;
  link: String;
};

const Expertise = () => {
  return (
    <>
      <div className="bg-gray-200 overflow-hidden ">
        <div className="w-full text-center pt-20">
          <div className="flex items-center justify-center text-[#f86c35]">
            <Hammer size={30} strokeWidth={2} />
          </div>
          <div>
            <h2 className="font-bold text-[44px] my-2">Our Best Expertise</h2>
            <p className="w-[35%] mx-auto">
              Velit nulla, nisl laboriosam ea ea saepe integer, varius, elit
              dapibus. Nostrum quibusdam dolorem. Orci donec proident porttitor.
            </p>
          </div>
          <div className=" flex flex-col gap-y-20 items-center xl:grid xl:grid-cols-2 lg:mx-10 xl:mx-20 my-20 lg:gap-10 xl:gap-16 mx-4">
            <Block
              src={UI_UX}
              title={"UI/UX Design"}
              desc={
                "Gravida commodi unde ipsam culpa occaecati impedit, nisl ea mollis pariatur natus."
              }
              link={"/"}
            />
            <Block
              src={SoftDevlop}
              title={"Software development"}
              desc={
                "Gravida commodi unde ipsam culpa occaecati impedit, nisl ea mollis pariatur natus."
              }
              link={"/"}
            />
            <Block
              src={Cretivity}
              title={"Creativity"}
              desc={
                "Gravida commodi unde ipsam culpa occaecati impedit, nisl ea mollis pariatur natus."
              }
              link={"/"}
            />
            <Block
              src={CynerSecurity}
              title={"Cybersecurity"}
              desc={
                "Gravida commodi unde ipsam culpa occaecati impedit, nisl ea mollis pariatur natus."
              }
              link={"/"}
            />
          </div>
        </div>
        <div className="flex justify-center w-full mb-20">
          <div className="flex items-center flex-col w-[90%] gap-y-5 px-10 py-6 md:gap-y-0 md:flex-row border-2 font-semibold border-dashed border-gray-400 md:w-fit rounded-full md:px-10 md:py-2 gap-x-8 text-xl">
            Call us for schedule :
            <span className="flex items-center justify-center text-md sm:text-xl text-[#f86c35] hover:text-red-900 transition duration-200 cursor-pointer gap-4">
              <Phone /> 91+ 9090909090
            </span>
            <Button className="bg-yellow-500 hover:bg-orange-500">
              MORE SERVICE
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const Block = ({ src, title, desc, link }: Block) => {
  return (
    <div className="block relative rounded-[180px] h-[550px] sm:h-[670px] md:h-80 lg:h-64 md:rounded-[130px] lg:rounded-full bg-white border border-gray-300  px-10 w-fit lg:mx-5 xl:mx-10 shadow-md shadow-gray-300">
      <div className="absolute flex justify-center right-0 left-0 md:-top-4 md:mx-0 mx-auto md:-left-5 w-[76vw] sm:h-[60vh] h-[40vh] md:w-72 md:h-72 lg:w-60 lg:h-60 rounded-full md:rounded-full border-[2px] border-dashed border-[#FBBF24] md:overflow-hidden">
        <img
          className="rounded-full sm:-top-1 absolute -top-1 h-[40vh] sm:h-[61vh] md:h-full md:-top-2 object-cover"
          src={`${src}`}
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center md:flex-row md:my-auto h-full">
        <div className="md:w-[40%] h-[60%] sm:h-[70%]"></div>
        <div className="md:w-[60%] h-[30%] sm:h-[30%] w-full lg:ml-12 xl:ml-14 md:ml-8 text-center md:text-left md:flex md:justify-center md:flex-col">
          <h3 className="text-2xl font-bold md:-mt-5 -mt-6 sm:-mt-10 lg:-mt-4 xl:mt-0 mb-5">
            {title}
          </h3>
          <p className=" text-gray-500 mb-4 sm:mb-6">{desc}</p>
          <div className="w-full flex items-center justify-center md:block">
            <Link
              to={`${link}`}
              className="flex md:justify-start items-center justify-center gap-2 outline-none hover:animate-bounce hover:text-red-900  font-semibold uppercase text-[#FBBF24]"
            >
              Learn more <CircleArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Expertise;
