import { Button } from "./ui/button";
import { FaPlus, FaQuoteRight } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import TemaMembers from "./TemaMembers";

type InputBlock = {
  type?: String;
  placeholder: String;
};
const Team = () => {
  return (
    <>
      <div className="bg-gray-100 h-fit">
        <div className="wavy-back text-white pt-20 pb-72 xl:px-40 px-10">
          <TemaMembers />
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

export const InputBlock = ({ type, placeholder }: InputBlock) => {
  return (
    <input
      type={`${type ? type : "text"}`}
      className="w-full md:w-[48%] my-2 px-5 py-5 rounded-sm text-black placeholder:text-gray-400 outline-none active:rounded-full focus:rounded-full"
      placeholder={`${placeholder}`}
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
