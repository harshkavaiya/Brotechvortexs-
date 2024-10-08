import { AudioWaveform, Earth, Play } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Service from "./Service";
import Expertise from "./Expertise";
import Projects from "./Projects";
import Process from "./Process";
import Team from "./Team";
import Avatar from "../assets/images/avatar.jpg";
import Avatar2 from "../assets/images/avatar2.jpg";

const Hero = () => {
  return (
    <>
      <div className="wavy-back max-w-full container text-white px-4 md:px-28 overflow-hidden">
        <div className="flex flex-col flex-wrap  md:flex-row md:gap-32 justify-center">
          {/* Left Section */}
          <div className="flex flex-col pt-20 md:items-start items-center  relative justify-between">
            {/* Icons */}
            <div className="flex mb-10 space-x-2">
              <AudioWaveform color="#F97316" />
              <Earth color="#FBBF24" />
              <AudioWaveform color="#F97316" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl md:font-extrabold text-center md:text-start w-full md:w-[500px] font-bold leading-tight">
              Modern & Digital IT Solutions For Your Tech Business
            </h1>

            {/* Left Image Frame */}
            <div className="w-96 h-[450px] md:h-[500px] mt-[72px] border-[#FBBF24] rounded-t-full bg-transparent border-x-4 border-t-4 border-b-0 relative">
              <div className="absolute left-5 bottom-0">
                <img
                  src={Avatar}
                  alt="Handyman"
                  className="rounded-t-full h-[450px] md:h-[495px] w-96 object-cover"
                />
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex p-2 items-center justify-center absolute flex-col w-72 md:w-60 h-[380px] md:h-[390px] bg-[#FF6D31] rounded-full border-8 right-18 md:-right-16 -bottom-80 md:bottom-16 border-[#0C0A1E]">
              <div className="flex items-center my-3 gap-1 flex-col text-black">
                <h1 className="font-bold text-4xl md:text-5xl">5K+</h1>
                <p className="font-semibold text-sm md:text-base">
                  Satisfied Clients
                </p>
              </div>
              <Separator />
              <div className="flex items-center my-3 gap-1 flex-col text-black">
                <h1 className="font-bold text-4xl md:text-5xl">120+</h1>
                <p className="font-semibold text-sm md:text-base">
                  Best Professionals
                </p>
              </div>
              <Separator />
              <div className="flex items-center my-3 gap-1 flex-col text-black">
                <h1 className="font-bold text-4xl md:text-5xl">50+</h1>
                <p className="font-semibold text-sm md:text-base">
                  Completed Projects
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col  items-center md:items-start justify-between mt-10 md:mt-0">
            {/* Right Image Frame */}
            <div className="w-[350px] h-[450px] md:w-full md:h-[500px] md:mt-0 mt-[300px] border-[#FBBF24] rounded-b-full bg-transparent border-x-4 border-t-0 border-b-4 relative">
              <div className="absolute -left-5 top-0">
                <img
                  src={Avatar2}
                  alt="Handyman"
                  className="rounded-b-full h-[450px] md:h-[495px] w-full object-cover"
                />
              </div>
            </div>

            {/* Description and Buttons */}
            <div className="flex flex-col gap-10 pt-10 md:my-10 md:pb-20 items-center md:items-start justify-center">
              <p className="w-96  text-gray-400 text-center md:text-start text-md">
                Fermentum possimus nostrud lacinia exercitationem eiusmod nisl
                conubia, beatae veritatis orci aspernatur? Augue ac, totam
                ligula vulputate beatae, nisl aliquid arcu ducimus curae
                hendrerit, rem.
              </p>
              <div className="flex justify-center md:justify-start items-center mb-8 gap-6">
                <Button className="bg-yellow-500 hover:bg-orange-500 text-lg uppercase rounded-sm">
                  Details
                </Button>
                <a
                  href="#"
                  className="h-12 w-12 flex items-center cursor-pointer justify-center rounded-full bg-black text-white z-10"
                >
                  <Play />
                </a>
                <p className="uppercase font-semibold text-lg">Watch video</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* best Expertise Page */}
      <Expertise />
      {/* best service page */}
      <Service />
      {/* Completed Projects
       */}
      <Projects />
      {/* process we follow */}
      <Process />
      {/* Meet Our Professionals */}
      <Team />
    </>
  );
};

export default Hero;
