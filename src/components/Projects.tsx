import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Link } from "react-router-dom";
import { PiPipeLight } from "react-icons/pi";
import { GiPaintRoller } from "react-icons/gi";

type ProjectBlock = {
  src: String;
  icon: Element;
  title: String;
  desc: String;
  link: String;
};

const Projects = () => {
  return (
    <div className="bg-gray-200 h-fit">
      <div className="bg-black text-white py-20 xl:px-40 px-10">
        <div className="flex flex-col items-center mx-auto w-full md:flex-row relative">
          <div className="text-2xl text-center md:text-left">
            <p>Icon</p>
            <h2 className="text-3xl md:text-4xl font-bold md:w-[80%] my-2 md:my-0">
              Take A Glance At Our Recent Completed Projects
            </h2>
          </div>
          <Button className="mt-4 md:mt-0 bg-yellow-500 hover:bg-orange-500 md:absolute bottom-0 right-0">
            MORE PORTFOLIO
          </Button>
        </div>
        <div className="flex flex-wrap justify-center my-7 gap-x-4">
          <RacioBlock />
          <RacioBlock />
          <RacioBlock />
        </div>
      </div>
      <div className="flex flex-wrap justify-center -mt-40 gap-y-44 lg:gap-y-40 gap-x-10 py-20 xl:px-40 px-10">
        <ProjectBlock
          src={
            "https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/plumber-in-uniform-at-showcase-in-plumbering-store.jpg"
          }
          icon={<PiPipeLight className="rotate-90" />}
          title={`Plumbing Activity`}
          desc={`Cursus sagittis laborini osam, henderit nos.`}
          link={`/`}
        />
        <ProjectBlock
          src={
            "https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/construction-engineer-with-foreman-worker-checking.jpg"
          }
          icon={<HiOutlineLightBulb />}
          title={`Indoor Electrical`}
          desc={`Cursus sagittis laborini osam, henderit nos.`}
          link={`/`}
        />
        <ProjectBlock
          src={
            "https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/painting-the-walls.jpg"
          }
          icon={<GiPaintRoller />}
          title={`Exterior Painting`}
          desc={`Cursus sagittis laborini osam, henderit nos.`}
          link={`/`}
        />
      </div>
    </div>
  );
};

const RacioBlock = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-center md:gap-x-4 relative  max-w-lg md:max-w-xs my-6 md:my-2 lg:my-0">
      <div className="relative size-32 md:size-40">
        <svg
          className="size-full -rotate-90"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current text-gray-200"
            stroke-width="0.5"
          ></circle>

          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current text-[#f86c35]"
            stroke-width="0.5"
            stroke-dasharray="100"
            stroke-dashoffset="65"
            stroke-linecap="round"
          ></circle>
        </svg>

        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <span className="text-center text-xl font-bold text-white ">35%</span>
        </div>
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-xl  font-bold">Best Tech Used</h2>
        <p className="mt-2 text-gray-300">
          Gravida commodi unde ipsam culpa impedit.
        </p>
      </div>
    </div>
  );
};

const ProjectBlock = ({ src, icon, title, desc, link }: ProjectBlock) => {
  return (
    <div className="relative max-w-sm md:max-w-xs">
      <img className="rounded-[30px] w-full" src={`${src}`} alt="img" />
      <div className="absolute h-[80px] w-[74px] bg-orange-500 top-0 left-6 rounded-b-full text-white text-[50px] flex items-center justify-center">
        {icon}
      </div>
      <div className="absolute -bottom-24 left-0 right-0">
        <div className=" bg-white rounded-[30px_30px_100px_100px] shadow-sm shadow-gray-400 w-[90%] h-36 text-black mx-auto flex items-center flex-col p-3 text-center">
          <h2 className="font-bold text-[24px]">{title}</h2>
          <p className="w-[70%] my-2">{desc}</p>
          <Button className="bg-yellow-500  hover:bg-orange-500 h-14 w-14 absolute -bottom-7 rounded-full">
            <Link to={`${link}`}>
              <MoveRight size={20} strokeWidth={3} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
