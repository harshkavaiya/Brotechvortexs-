import {
  AudioWaveform,
  ChartSpline,
  Earth,
  ReceiptText,
  Redo,
  SquareCheckBig,
} from "lucide-react";
import { Button } from "./ui/button";

const Process = () => {
  return (
    <div className="bg-gray-50 flex flex-col items-center md:px-32 px-10 min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center my-8 text-center md:text-left">
        <div
          className="hidden md:block flex-grow w-64 bg-orange-400"
          style={{
            height: "1px",
            transform: "scaleY(0.4)",
            transformOrigin: "center",
          }}
        ></div>
        <span className="md:px-2 text-xl md:text-base font-bold md:font-semibold text-gray-800">
          30+ companies & clients trust our work
        </span>
        <div
          className="hidden md:block flex-grow w-64 bg-orange-400"
          style={{
            height: "1px",
            transform: "scaleY(0.4)",
            transformOrigin: "center",
          }}
        ></div>
      </div>

      {/* Logo Section */}
      <header className="flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-8 mb-20 md:mb-10 space-y-4 md:space-y-0">
        <div className="flex space-x-10 md:space-x-9 justify-center">
          <img
            src="https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/logo_digimark.png"
            alt="Logo 1"
            className="h-8"
          />
          <img
            src="https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/logo_digimark.png"
            alt="Logo 2"
            className="h-8"
          />
          <img
            src="https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/logo_digimark.png"
            alt="Logo 3"
            className="h-8 hidden md:block"
          />
        </div>
      </header>

      {/* Process Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="relative order-2 md:order-1 w-full md:w-96 flex justify-center md:block mt-7 md:mt-0">
          <div className="w-full md:w-64 h-[380px] md:h-[400px] mt-10 border-[#FC7F4B] rounded-t-full bg-transparent border-x-4 border-t-2 border-b-0">
            <div className="absolute left-5 bottom-0">
              <img
                src="https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/handsome-plumber-in-overalls-and-tool-bell-looking-at-camera-in-kitchen.png"
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

export default Process;
