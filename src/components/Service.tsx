import { Earth, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";

const Service = () => {
  return (
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Side */}

      <div className="order-2 md:order-1 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  relative">
          <div className="relative ml-11 mt-11 w-48  rounded-tl-3xl overflow-hidden">
            <img
              src="https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/at-construction-site-senior-engineer-and-supervisor.jpg"
              alt="Construction workers reviewing plans"
            />
          </div>
          <div className="relative w-60 rounded-tr-3xl overflow-hidden">
            <img
              src="https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/at-construction-site-senior-engineer-and-supervisor.jpg"
              alt="Workers with tools"
            />
          </div>
          <div className="relative w-60 rounded-bl-3xl overflow-hidden">
            <img
              src="https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/at-construction-site-senior-engineer-and-supervisor.jpg"
              alt="Electrician working on a panel"
            />
          </div>
          <div className="relative mr-10 mb-11 w-48 rounded-br-3xl overflow-hidden">
            <img
              src="https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/at-construction-site-senior-engineer-and-supervisor.jpg"
              alt="Construction worker with hammer"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-orange-500 borderr rounded-full p-3 h-36 w-36 text-white flex flex-col items-center gap-3 justify-center">
              <Earth size={35} />
              <p className="text-center text-sm">Trusted Company Since 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="order-1 md:order-2">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
          Leading Company Giving Best Services
        </h2>
        <p className="text-gray-600 mb-6">
          Velit nulla, nisl laboriosam ea ea saepe integer, varius, elit
          dapibus. Nostrum quibusdam dolorem. Orci donec proident porttitor
          veniam maiores donec error convallis.
        </p>

        {/* Quote */}
        <div className="border-y border-yellow-200 p-4 mb-6">
          <p className="font-bold text-orange-500 ">
            Providing extra ordinary services to clients is our main priority
            and aim !!
          </p>
        </div>

        {/* Bullet Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 mb-6">
          <ul className="space-y-0 md:space-y-2 font-semibold">
            <li className="flex items-center space-x-2">
              <span className="text-black text-lg font-semibold">-</span>
              <span>Ferum purus, consectetur</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-black text-lg font-semibold">-</span>
              <span>Sociosqu cursus modi</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-black text-lg font-semibold">-</span>
              <span>Accumsan accumsus lib</span>
            </li>
          </ul>
          <ul className="space-y-0 md:space-y-2 font-semibold">
            <li className="flex items-center space-x-2">
              <span className="text-black text-lg font-semibold">-</span>
              <span>Mollit earum facilisi</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-black text-lg font-semibold">-</span>
              <span>Culpa exceptuer aliquam</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-black text-lg font-semibold">-</span>
              <span>Purus consequat acuman</span>
            </li>
          </ul>
        </div>

        {/* Rating Section */}
        <div className="flex flex-col justify-center space-x-2 mb-6">
          {/* Replace with your avatars */}
          <div className="flex flex-row">
            <Avatar>
              <AvatarImage
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="User 1"
              />
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt="User 2"
              />
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://randomuser.me/api/portraits/women/3.jpg"
                alt="User 3"
              />
            </Avatar>
          </div>
          <div className="flex items-center">
            <Star className="text-yellow-400" />
            <Star className="text-yellow-400" />
            <Star className="text-yellow-400" />
            <Star className="text-yellow-400" />
            <Star className="text-yellow-400" />
            <p className="text-sm text-gray-600">(5k+ Positive Rating)</p>
          </div>
        </div>

        {/* Learn More Button */}
        <Button className="bg-yellow-500 hover:bg-orange-500">
          LEARN MORE
        </Button>
      </div>
    </div>
  );
};

export default Service;
