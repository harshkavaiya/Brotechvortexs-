import { Link } from "react-router-dom";
import Navitems from "./Navitems";
import { AlignRight, PhoneCall, Search } from "lucide-react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="px-3 w-full fixed bg-white border-b-2 z-50">
      <div className="flex items-center justify-between h-14">
        {/* Logo */}
        <div>
          <Link to="/">
            <h1 className="font-bold md:font-extrabold text-2xl">
              Brotechvortexs
            </h1>
          </Link>
        </div>

        {/* Navigation and Search */}
        <div className="flex items-center gap-0">
          {/* Navitems will be visible only on medium screens and above */}
          <div className="hidden md:flex items-center gap-0">
            <Navitems />
          </div>
          <div className="border-x-2 p-4 mx-3 cursor-pointer">
            <Search size={20} />
          </div>

          {/* Menu Icon (mobile) */}
          <div className="md:hidden">
            <Sidebar />
          </div>

          {/* call Icon (big screen)*/}
          <div className="hidden md:flex h-10 items-center gap-1 py-4 px-2 rounded-xl cursor-pointer bg-">
            <PhoneCall size={19} />
            <p>Call Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
