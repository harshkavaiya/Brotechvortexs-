import { Link } from "react-router-dom";
import { Button } from "./ui/button";

type MenuItem = {
  title: String;
  link: String;
};
const Footer = () => {
  return (
    <>
      <div className="bg-black text-white py-20 xl:px-40 px-10">
        <div className="flex flex-wrap justify-center gap-y-10 lg:gap-y-0 lg:flex-row gap-x-6">
          <div className="lg:w-[31%] border-[2px] border-dashed border-orange-500 p-10 gap-y-5 flex text-center lg:text-left flex-col rounded-3xl">
            <h1 className="text-2xl font-bold uppercase">Brotechvortexs</h1>
            <p className="text-gray-400 text-[16px] font-semibold">
              Volutpat turpis distinctio voluptatibus, libero viverra risus
              quisque dictumst. Voluptatem delectus facilisi, eiusm hact.
            </p>
            <p>icons</p>
          </div>
          <div className="w-full sm:w-[46%] lg:w-[31%]">
            <div className="text-center md:text-left">
              <p className="text-xl font-bold">Useful & Quick Links</p>
              <p>icon</p>
            </div>
            <div className="flex flex-col sm:flex-row md:pt-6 items-center text-center md:text-left">
              <div className="w-1/2">
                <MenuItem link={"/"} title={"About us"} />
                <MenuItem link={"/"} title={"About us"} />
                <MenuItem link={"/"} title={"About us"} />
                <MenuItem link={"/"} title={"About us"} />
                <MenuItem link={"/"} title={"About us"} />
                <MenuItem link={"/"} title={"About us"} />
              </div>
              <div className="w-1/2">
                <MenuItem link={"/"} title={"About us"} />
                <MenuItem link={"/"} title={"About us"} />
                <MenuItem link={"/"} title={"About us"} />
                <MenuItem link={"/"} title={"About us"} />
                <MenuItem link={"/"} title={"About us"} />
                <MenuItem link={"/"} title={"About us"} />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[51%] lg:w-[31%] flex flex-col  gap-1 text-center md:text-left">
            <p className="text-xl font-bold mb-2">Subscribe Our Newsletter</p>
            <p className="mb-4">icon</p>
            <p className="text-gray-400 text-[16px] font-semibold">
              Lacus deleniti dolorum necessitatibus lacus, esse in magnam saepe,
              cubilia.
            </p>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="my-2 w-full h-10 px-4 py-[27px] rounded-md mb-3"
            />
            <Button className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-700 w-full px-4 py-5 uppercase ">
              Sign Up now
            </Button>
          </div>
        </div>
      </div>
      <div className=" bg-yellow-500 lg:px-40 px-10 py-4 relative text-gray-700 text-center md:text-left">
        <div className="flex flex-col md:flex-row relative items-center w-full">
          <p>
            Copyright © 2024{" "}
            <span className="font-bold  text-black mx-1">Brotechvortexs</span>.
            All right reserved.
          </p>
          <div className="text-[13px]">
            <Link to={`/`} className="mx-4 text-black">
              Support
            </Link>
            |
            <Link to={`/`} className="mx-4 text-black">
              Privacy Policy
            </Link>
            |
            <Link to={`/`} className="mx-4 text-black">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const MenuItem = ({ link, title }: MenuItem) => {
  return (
    <div className="my-1.5">
      <Link
        to={`${link}`}
        className="hover:text-[#FFA726] text-gray-400 text-[16px] font-semibold"
      >
        {title}
      </Link>
    </div>
  );
};
export default Footer;
