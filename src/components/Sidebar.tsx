import { AlignRight, Home, PhoneCall, Building2 } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { GoProjectSymlink } from "react-icons/go";
import { GrServices } from "react-icons/gr";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} className="bg-none">
          <AlignRight size={19} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full sm:w-[60%]">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle>Brotechvortexs</SheetTitle>
        </SheetHeader>
        <Separator className="my-2" />
        <SheetDescription className="flex-1">
          <SheetClose asChild>
            <Link
              to="/"
              className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
            >
              <Home />
              <span>Home</span>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="/"
              className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
            >
              <GrServices size={20} />
              <span>Services</span>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="/"
              className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
            >
              <GoProjectSymlink size={20} />
              <span>Projects</span>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="/"
              className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
            >
              <PhoneCall />
              <span>Contact</span>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="/"
              className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
            >
              <Building2 />
              <span>About</span>
            </Link>
          </SheetClose>
        </SheetDescription>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-2">
            <Avatar>
              <AvatarImage />
              <AvatarFallback>HK</AvatarFallback>
            </Avatar>
            <h1 className="font-bold">Brotechvortexs</h1>
          </div>

          <SheetClose asChild>
            <Button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 w-full text-white"
            >
              Logout
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
