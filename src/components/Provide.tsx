import { AudioWaveform, Earth } from "lucide-react";
import Card from "./ServicesCard";

const Provide = () => {
  return (
    <div className="flex wavy-back text-white flex-col w-full items-center p-5 md:pt-20">
      <div className="flex flex-col md:w-[80%] w-full items-center md:flex-row md:gap-20 justify-between  text-center">
        <div className="flex flex-col">
          <div className="flex justify-center md:justify-start">
            <AudioWaveform color="#F97316" className="w-8 h-8" />
            <Earth color="#FBBF24" className="w-8 h-8" />
            <AudioWaveform color="#F97316" className="w-8 h-8" />
          </div>
          <h1 className="text-3xl mb-5 font-bold">What We Provide</h1>
        </div>
        <p className="text-gray-500">
          We Run all kinds of IT services that vow your success
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 mt-10">
        <Card names={"IT Consultancy"} iconno={1} />
        <Card names={"Web Development"} iconno={2} />
        <Card names={"web Design"} iconno={3} />
      </div>
    </div>
  );
};

export default Provide;
