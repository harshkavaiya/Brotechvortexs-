import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import "./Projects.css";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Link } from "react-router-dom";
import { PiPipeLight } from "react-icons/pi";
import { GiPaintRoller } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

type ProjectBlock = {
  src: String;
  icon: React.ElementType;
  title: String;
  desc: String;
  link: String;
};
type SliderBlock = {
  src: String;
};
const Projects = () => {
  return (
    <div className="bg-gray-300 ">
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
      <div className="flex flex-wrap justify-center -mt-40 gap-y-44 lg:gap-y-40 gap-x-10 py-20 xl:px-40 mb-10 px-10">
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
      <div className="py-20 text-center xl:px-40 px-10">
        <div className="flex items-center justify-center text-center flex-col">
          <div className="w-full h-[1px] bg-orange-500 opacity-60"></div>
          <span className="overflow-hidden bg-gray-300 font-semibold sm:text-lg md:text-2xl -mt-3.5 md:-mt-5 px-2 z-20">
            30+ companies & clients trust our worker
          </span>
        </div>
      </div>
      {/* slider */}
      <div className="xl:px-40 mb-10 px-10 flex items-center">
        <Swiper
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            "@1.50": {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SliderBlock
              src={`https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/logo_digimark.png`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderBlock
              src={`https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/logo_fixcom.png`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderBlock
              src={`https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/logo_markeezo.png`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderBlock
              src={`https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/logo_audioplus.png`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderBlock
              src={`https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/Logo_buzzify.png`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderBlock
              src={`https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/logo_markeezo.png`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderBlock
              src={`https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/Logo_buzzify.png`}
            />
          </SwiperSlide>
        </Swiper>
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
      <div className="">
        <h2 className="text-xl text-center md:text-left font-bold">
          Best Tech Used
        </h2>
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

const SliderBlock = ({ src }: SliderBlock) => {
  return (
    <div className="h-14 w-[30vw] sm:w-[20vw] md:w-32 lg:w-44 flex items-center justify-center">
      <img src={`${src}`} alt="img" className="w-full"/>
    </div>
  );
};
export default Projects;
