import { createRef, MutableRefObject, ReactNode, useRef } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GrServices } from "react-icons/gr";
import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

type MenuBlock = {
  src: String;
  icon: ReactNode;
  menu: String;
};
type DropMenuBlock = {
  icon: ReactNode;
  menu: String;
};
const Sidebar = () => {
  return (
    <div className="min-h-screen w-full flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
      <div className="fixed flex flex-col top-14 left-0 w-full sm:w-[60%] bg-white h-full border-r transition-all duration-500 ease-in-out">
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Menu
                </div>
              </div>
            </li>
            <li>
              <MenuBlock src={"/"} icon={<AiOutlineHome />} menu={"Home"} />
            </li>
            <li>
              <MenuBlock src={"/"} icon={<CgWebsite />} menu={"Projects"} />
            </li>
            <li>
              <DropMenuBlock icon={<GrServices />} menu={"Services"} />
            </li>
            <li>
              <MenuBlock src={"/"} icon={<AiOutlineHome />} menu={"About us"} />
            </li>
            <li>
              <MenuBlock src={"/"} icon={<FiPhoneCall />} menu={"Contact us"} />
            </li>
            <li>
              <MenuBlock
                src={"/"}
                icon={<HiOutlineClipboardDocumentList />}
                menu={"Blogs"}
              />
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Settings
                </div>
              </div>
            </li>
            <li>
              <MenuBlock src={"/"} icon={<FaRegUser />} menu={"Profile"} />
            </li>
            <li>
              <MenuBlock
                src={"/"}
                icon={<IoSettingsOutline />}
                menu={"Settings"}
              />
            </li>
            <li>
              <MenuBlock src={"/"} icon={<HiOutlineLogout />} menu={"Logout"} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const MenuBlock = ({ src, icon, menu }: MenuBlock) => {
  return (
    <div>
      <Link
        to={`${src}`}
        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-orange-500 pr-6"
      >
        <span className="inline-flex justify-center items-center ml-4">
          {icon}
        </span>
        <span className="ml-2 text-sm tracking-wide truncate">{menu}</span>
      </Link>
    </div>
  );
};

const DropMenuBlock = ({ icon, menu }: DropMenuBlock) => {
  let dropdownref = useRef();
  const handleDropDownMenu = (ref) => {
    if (ref.current.classList.contains("hidden")) {
      ref.current.classList.remove("hidden");
    } else {
      ref.current.classList.add("hidden");
    }
  };
  return (
    <div>
      <button
        onClick={() => handleDropDownMenu(dropdownref)}
        className="relative flex flex-row w-full items-center h-11 focus:outline-none hover:bg-orange-200 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-orange-500 pr-6"
      >
        <span className="inline-flex justify-center items-center ml-4">
          {icon}
        </span>
        <span className="ml-2 text-sm tracking-wide truncate">{menu}</span>
        <span className="ml-auto text-3xl font-medium text-gray-500">
          <RiArrowDropDownLine />
        </span>
        <div ref={dropdownref} aria-expanded="true" className="hidden">
          sd
        </div>
      </button>
    </div>
  );
};

export default Sidebar;
