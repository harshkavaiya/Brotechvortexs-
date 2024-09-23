import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Separator } from "./ui/separator";
import { AppWindow } from "lucide-react";
import { CgWebsite } from "react-icons/cg";
import { HiDevicePhoneMobile } from "react-icons/hi2";

const Navitems = () => {
  return (
    <NavigationMenu className="mr-3">
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem className="bg-white rounded-md">
          <Link to="/">
            <NavigationMenuLink className="block px-4 py-2 hover:bg-slate-200 rounded-md">
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Services */}
        <NavigationMenuItem className="hover:bg-slate-200 rounded-md">
          <NavigationMenuTrigger className="px-4 py-2 hover:bg-slate-100 rounded-md">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-flow-row gap-3 p-4 w-[300px] ">
              <Link to="/Services/Business Website Design">
                <li className="flex items-center gap-1">
                  <AppWindow size={19} />
                  Business Website Design
                </li>
              </Link>
              <Separator />

              <Link to="/Services/Mobile Apps Development">
                <li className="flex items-center gap-1">
                  <HiDevicePhoneMobile size={19} />
                  Mobile Apps Development
                </li>
              </Link>
              <Separator />

              <Link to="/Services/Website Design & Development">
                <li className="flex items-center gap-1">
                  <CgWebsite size={19} />
                  Website Design & Development
                </li>
              </Link>
              <Separator />
              <Link to="/Services/Portfolio">
                <li className="flex items-center gap-1">
                  <CgWebsite size={19} />
                  Portfolio
                </li>
              </Link>
              <Separator />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Projects */}
        <NavigationMenuItem className="bg-white rounded-md">
          <Link to="/Project">
            <NavigationMenuLink className="block px-4 py-2 hover:bg-slate-200 rounded-md">
              Project
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* Contact */}
        <NavigationMenuItem className="bg-white rounded-md">
          <Link to="/Contactus">
            <NavigationMenuLink className="block px-4 py-2 hover:bg-slate-200 rounded-md">
              Contact us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* about */}
        <NavigationMenuItem className="bg-white rounded-md">
          <Link to="/Aboutus">
            <NavigationMenuLink className="block px-4 py-2 hover:bg-slate-200 rounded-md">
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navitems;
