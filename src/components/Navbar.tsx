import { Link } from "react-router-dom";
import Navitems from "./Navitems";
import { AlignRight, Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className=" pl-3 border-b-2">
      <div className="flex items-center justify-between h-14">
        <div>
          <Link to="/">
            <h1 className="font-bold md:font-extrabold text-2xl">
              Brotechvortexs
            </h1>
          </Link>
        </div>
        <div className="md:flex items-center gap-0">
          <Navitems />

          <div className="border-x-2 p-4 cursor-pointer">
            <Search size={19} />
          </div>

          <div className="flex items-center gap-1 py-4 px-2 cursor-pointer bg-blue-500">
            <AlignRight size={19} />
            <h2>Menus</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
