import { FiPhoneCall } from "react-icons/fi";
import SitemapPath from "../components/SitemapPath";
import { IoMailOpenOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { ReactNode } from "react";
import { InputBlock } from "../components/Team";
import { Button } from "../components/ui/button";
import { AudioWaveform, Earth } from "lucide-react";
import Avatar from "../assets/images/IMG_20240921_221416.png";

type InfoType = {
  icon: ReactNode;
  title: String;
  desc: String;
};
const Contactus = () => {
  return (
    <div>
      <SitemapPath title={"Contactus"} />
      {/* Company Info */}
      <div className=" xl:px-40 px-10 py-28 bg-orange-100">
        <div className="text-center w-full mb-10">
          <div className="flex items-center justify-center text-center flex-col">
            <div className="w-full h-[1px] bg-orange-500 opacity-60"></div>
            <span className="overflow-hidden bg-orange-100  font-bold text-xl md:text-5xl -mt-3.5 md:-mt-7 px-2 z-20">
              Our company information
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-14 mt-20">
          <InfoBlock
            icon={<FiPhoneCall />}
            title={"Phone Number:"}
            desc={"Phone: (+231) 567-7788, Mobile : (+117) 334-5007"}
          />
          <InfoBlock
            icon={<IoMailOpenOutline />}
            title={"Email Address:"}
            desc={"abc_info@domain.com, company@xyz.com"}
          />
          <InfoBlock
            icon={<SlLocationPin />}
            title={"Location Address:"}
            desc={"35th street, San Andreas, Milestone, 13th Westroad"}
          />
        </div>
      </div>

      {/* Contact us */}
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-x-10 xl:px-40 px-10 py-36 bg-gray-200">
        {/* Left Section */}
        <div className="order-2 md:order-1 relative w-full md:w-[40%] flex justify-center md:block mt-7 md:mt-0">
          <div className="w-fit flex justify-center mx-auto h-[480px] md:h-[600px] mt-14 border-[#FC7F4B] rounded-t-[130px] md:rounded-t-full bg-transparent border-x-4 border-t-2 border-b-0">
            <img
              src={Avatar}
              alt="img"
              className="h-[600px] md:h-[700px] -mt-20 ml-10"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="order-1 md:order-2 relative w-full md:w-[60%]">
          <div className="flex  flex-col md:flex-row gap-5 items-center">
            <div className="flex flex-col text-center md:text-left">
              <div className="flex mb-2 justify-center md:justify-start space-x-2">
                <AudioWaveform color="#F97316" className="w-10 h-10" />
                <Earth color="#FBBF24" className="w-10 h-10" />
                <AudioWaveform color="#F97316" className="w-10 h-10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Contact Us For More Info And Get A Free Quotes !!
              </h2>
              <p className="text-gray-500 text-balance md:text-sm w-full md:w-96 mt-2 mb-5">
                Velit nulla, nisl laboriosam ea ea saepe integer, varius, elit
                dapibus. Nostrum quibusdam dolorem porttitor.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-x-4">
              <InputBlock placeholder={"Your Name"} />
              <InputBlock placeholder={"Your Email"} />
              <InputBlock placeholder={"Your Phone no"} />
              <InputBlock placeholder={"Service You need"} />
            </div>
            <textarea
              className="my-2 px-5 py-5 outline-none rounded-sm text-black"
              placeholder="Tell us more about queries.."
              rows={5}
            />
            <Button className="bg-yellow-400  hover:bg-orange-900 rounded-md w-[70%] md:w-[45%] py-6 text-white">
              BOOK APPOINTMENT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoBlock = ({ icon, title, desc }: InfoType) => {
  return (
    <div className="w-full md:w-[40%] lg:w-[28%] relative bg-white rounded-3xl border border-gray-200 px-10 py-5 flex justify-center mx-auto">
      <div className="w-[70px] h-[70px] absolute -top-9 md:-top-7 md:-left-11 rounded-full bg-orange-500 flex items-center justify-center text-white text-4xl p-1">
        {icon}
      </div>
      <div className="text-center md:text-left mt-5 md:mt-0 text-wrap">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export default Contactus;
