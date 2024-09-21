import { Button } from "./ui/button";
import { FaPlus, FaQuoteRight } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";

const Team = () => {
  return (
    <>
      <div className="bg-gray-100 h-fit">
        <div className="bg-black text-white py-20 xl:px-40 px-10">
          <div className="flex flex-col text-center items-center mx-auto w-full lg:flex-row lg:items-center relative">
            <div className="text-2xl text-center lg:text-left w-[60%]">
              <p>Icon</p>
              <h2 className="text-3xl md:text-5xl font-bold my-2 md:my-0">
                Meet Our Professionals
              </h2>
            </div>
            <p className="w-[40%] text-gray-400 mt-4 lg:mt-0">
              Debitis voluptates quas, omnis. Tenetur eveniet! Amet totam earum,
              gravida quae non dignissimos bibendum porttitor hic fringilla
              quaerat. Accumsan risus.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-28 md:gap-x-14 lg:gap-x-28 lg:gap-y-0 mt-10 mb-56 w-full">
            <TeamBlock />
            <TeamBlock />
            <TeamBlock />
            <TeamBlock />
          </div>
        </div>
        <div className="-mt-32 xl:px-40 px-10">
          <div className="bg-orange-500 rounded-[60px] md:rounded-[80px] py-10 px-4 lg:py-20 lg:px-16 text-white flex flex-col lg:flex-row">
            <div className="lg:w-1/2 px-4 py-2">
              <p>icon</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Have A Work For Us. Contact Now!
              </h2>
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                sint voluptate asperiores consequuntur natus laudantium ipsum
                alias dicta, laboriosam ab recusandae? Quos cupiditate
                dignissimos delectus soluta obcaecati esse. Debitis, quaerat.
              </p>
              <div className="flex items-center flex-col text-center md:text-left md:flex-row gap-x-6 border-[3px] border-dashed border-gray-300 rounded-[50px] py-3 px-6">
                <BiPhoneCall className="bg-black text-white text-7xl p-4 rounded-full" />
                <div className="font-semibold text-lg">
                  <p className="my-1">CALL US ANYTIME 24*7</p>
                  <p className="">(+91) 9191919191</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 px-2 py-2 flex flex-col">
              <div className="flex flex-wrap gap-x-4">
                <InputBlock />
                <InputBlock />
                <InputBlock />
                <InputBlock />
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
        <div className="xl:px-40 px-10 py-28">
          <div className="text-center">
            <p className="mb-2">icon</p>
            <h2 className="text-5xl font-bold mb-5">What Client's Says ?</h2>
            <p className="md:w-[50%] mx-auto mb-20">
              Velit nulla, nisl laboriosam ea ea saepe integer, varius, elit
              dapibus. Nostrum quibusdam dolorem. Orci donec proident porttitor.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            <CommentBlock />
            <CommentBlock />
            <CommentBlock />
          </div>
          <div className="w-full flex justify-center mt-20">
            <Button className="bg-orange-500 hover:bg-orange-900 rounded-md px-8 py-6 text-white mx-auto uppercase">
              View More Reviews
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const TeamBlock = () => {
  return (
    <div className="h-[90%] border-[2px] border-orange-500 border-dashed rounded-full mx-auto">
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

const InputBlock = () => {
  return (
    <input
      type="text"
      className="w-full md:w-[48%] my-2 px-5 py-5 rounded-sm text-black placeholder:text-gray-400 outline-none active:rounded-full focus:rounded-full"
      placeholder="Enter Your Name"
    />
  );
};

const CommentBlock = () => {
  return (
    <div className="relative bg-white rounded-3xl shadow-[11px_24px_28px_3px_#cbd5e0] px-10 py-5">
      <img
        src="https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/pretty-cheerful-african-american-girl-invites-you.jpg"
        className="w-16 h-16 absolute -top-8 -left-8 rounded-full"
      />
      <p className="text-left">
        Velit nulla, nisl laboriosam ea ea saepe integer, varius, elit dapibus.
        Nostrum quibusdam dolorem. Orci donec proident porttitor.
      </p>
      <FaQuoteRight className="absolute -bottom-4 right-8 text-4xl text-yellow-500 opacity-70" />
    </div>
  );
};
export default Team;
