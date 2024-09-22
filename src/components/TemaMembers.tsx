import { FaPlus } from "react-icons/fa";
import { Button } from "./ui/button";

const TemaMembers = () => {
  return (
    <>
      <div className="flex flex-col text-center items-center mx-auto w-full lg:flex-row lg:items-center relative">
        <div className="text-2xl text-center lg:text-left w-[60%]">
          <p>Icon</p>
          <h2 className="text-3xl md:text-5xl font-bold my-2 md:my-0">
            Meet Our Professionals
          </h2>
        </div>
        <p className="w-[40%] text-gray-400 mt-4 lg:mt-0">
          Debitis voluptates quas, omnis. Tenetur eveniet! Amet totam earum,
          gravida quae non dignissimos bibendum porttitor hic fringilla quaerat.
          Accumsan risus.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-28 md:gap-x-14 lg:gap-x-28 lg:gap-y-0 mt-10 w-full">
        <TeamBlock />
        <TeamBlock />
        <TeamBlock />
        <TeamBlock />
      </div>
    </>
  );
};

export const TeamBlock = () => {
  return (
    <div className="h-[90%] md:h-[80%] border-[2px] border-orange-500 border-dashed rounded-full mx-auto">
      <img
        src="https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/content-blacksmith-in-safety-goggles-on-head-in-welding-shop.jpg"
        className="rounded-full h-full w-full mt-3 -ml-3 z-10"
      />
      <div className="bg-white text-black  rounded-[80px_80px_30px_30px] -mt-12 relative w-full">
        <Button className="bg-yellow-500  hover:bg-orange-500 h-12 w-12 rounded-full z-10 absolute -top-6 left-0 right-0 mx-auto">
          <FaPlus className="text-5xl" />
        </Button>
        <div className="w-60 px-2 py-4 text-center mx-auto">
          <h2 className="text-xl font-bold my-2">James Smith</h2>
          <p className="uppercase text-orange-400 hover:text-orange-500  cursor-pointer">
            HEAD TECHNICIAN
          </p>
        </div>
      </div>
    </div>
  );
};
export default TemaMembers;
