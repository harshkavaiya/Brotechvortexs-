import {
  AudioWaveform,
  ChartSpline,
  Earth,
  ReceiptText,
  Redo,
  SquareCheckBig,
} from "lucide-react";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Avatar from "../assets/images/IMG_20240921_221416.png";

type SliderBlock = {
  src: String;
};

const Process = () => {
  return (
    <div className="bg-gray-200 flex flex-col items-center md:px-40 px-10 min-h-screen pt-36">
      <div className="text-center w-full">
        <div className="flex items-center justify-center text-center flex-col">
          <div className="w-full h-[1px] bg-orange-500 opacity-60"></div>
          <span className="overflow-hidden bg-gray-200 font-bold md:font-semibold text-xl md:text-2xl -mt-3.5 md:-mt-5 px-2 z-20">
            30+ companies & clients trust our worker
          </span>
        </div>
      </div>
      {/* slider */}
      <div className="w-full flex items-center my-16">
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

      {/* Process Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="relative order-2 md:order-1 w-full md:w-96 flex justify-center md:block mt-7 md:mt-0">
          <div className="w-full md:w-64 h-[380px] md:h-[400px] mt-10 border-[#FC7F4B] rounded-t-full bg-transparent border-x-4 border-t-2 border-b-0">
            <div className="absolute left-5 bottom-0">
              <img
                src={Avatar}
                alt="Handyman"
                className="h-[430px] md:h-[450px] w-80"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex order-1 md:order-2 flex-col mt-4 px-4 relative">
          <div className="flex flex-col md:flex-row gap-5 md:gap-52 items-center">
            <div className="flex flex-col text-center md:text-left">
              <div className="flex mb-2 justify-center md:justify-start space-x-2">
                <AudioWaveform color="#F97316" className="w-10 h-10" />
                <Earth color="#FBBF24" className="w-10 h-10" />
                <AudioWaveform color="#F97316" className="w-10 h-10" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Process We Follow!
              </h1>
              <p className="text-gray-500 text-balance md:text-sm w-full md:w-96 mt-2">
                Velit nulla, nisl laboriosam ea ea saepe integer, varius, elit
                dapibus. Nostrum quibusdam dolorem porttitor.
              </p>
            </div>
            <div>
              <Button className="bg-yellow-500 w-40 h-12 text-base md:text-sm font-medium md:w-28 hover:bg-orange-500">
                HIRE US NOW
              </Button>
            </div>
          </div>

          {/* Process Steps */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 space-y-8 md:space-y-0 md:space-x-4 w-full">
            {/* Step 1 */}
            <div className="text-center mb-5 md:mb-0 flex flex-col items-center">
              <div className="bg-white shadow-xl flex flex-col items-center justify-center p-4 w-40 h-40 md:w-32 md:h-32 rounded-full mb-4">
                <ChartSpline className="w-14 h-14" />
                <h4 className="font-semibold text-base md:text-sm">STEP 01</h4>
              </div>
              <p className="text-gray-700 font-bold text-xl md:text-lg md:font-semibold mb-2">
                Detail Analysis
              </p>
              <p className="text-gray-400 text-sm">
                Velit nulla, nisl laboriosam ea ea saepe integer, varius.
              </p>
            </div>
            <Redo className="hidden md:block absolute bottom-32 inset-x-60 w-16 h-16 text-blue-600" />

            {/* Step 2 */}
            <div className="text-center mb-5 flex flex-col items-center">
              <div className="bg-white shadow-xl flex flex-col items-center justify-center p-4 w-40 h-40 md:w-32 md:h-32  rounded-full mb-4">
                <ReceiptText className="w-14 h-14" />
                <h4 className="font-semibold text-base md:text-sm">STEP 02</h4>
              </div>
              <p className="text-gray-700 font-bold text-xl md:text-lg md:font-semibold mb-2">
                Best Estimation
              </p>
              <p className="text-gray-400 text-sm">
                Velit nulla, nisl laboriosam ea ea saepe integer, varius.
              </p>
            </div>
            <Redo className="hidden md:block absolute bottom-32 inset-x-[510px] w-16 h-16 text-blue-600" />

            {/* Step 3 */}
            <div className="text-center flex flex-col items-center">
              <div className="bg-white shadow-xl flex flex-col items-center justify-center p-4 w-40 h-40 md:w-32 md:h-32  rounded-full mb-4">
                <SquareCheckBig className="w-14 h-14" />
                <h4 className="font-semibold text-base md:text-sm">STEP 03</h4>
              </div>
              <p className="text-gray-700 font-bold text-xl md:text-lg md:font-semibold mb-2">
                Get Project Done
              </p>
              <p className="text-gray-400 text-sm">
                Velit nulla, nisl laboriosam ea ea saepe integer, varius.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SliderBlock = ({ src }: SliderBlock) => {
  return (
    <div className="h-14 w-[30vw] sm:w-[20vw] md:w-32 lg:w-44 flex items-center justify-center">
      <img src={`${src}`} alt="img" className="w-full" />
    </div>
  );
};

export default Process;
