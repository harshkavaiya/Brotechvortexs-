import { useState } from "react";
import { Button } from "../../components/ui/button";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUsers } from "react-icons/hi2";
import { BiMessageSquareDetail } from "react-icons/bi";
import { VscFeedback } from "react-icons/vsc";
import { IoMdNotificationsOutline, IoIosArrowForward } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  let navigate = useNavigate();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const menuItems = [
    { icon: RxDashboard, text: "Dashboard", link: "/" },
    { icon: CgWebsite, text: "Project", link: "/Project" },
    { icon: VscFeedback, text: "Client Feedback", link: "/" },
    { icon: BiMessageSquareDetail, text: "Client Messages", link: "/" },
    { icon: IoMdNotificationsOutline, text: "Notifications", link: "/" },
    { icon: HiOutlineUsers, text: "Users Management", link: "/" },
    { icon: IoSettingsOutline, text: "Settings", link: "/" },
  ];

  return (
    <div
      className={`z-10 h-screen bg-background transition-all duration-300 ease-in-out ${
        isExpanded ? "md:w-64" : "w-20"
      }`}
    >
      <div className="flex h-full bg-slate-200 flex-col justify-between p-3">
        <div>
          {/* Logo Section */}
          <div className="mb-8 flex h-16 items-center justify-center">
            <div
              className="h-10 w-10 rounded-full bg-primary"
              aria-label="Logo placeholder"
            />
          </div>

          {/* Menu Items */}
          <nav>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Button
                    variant="secondary"
                    onClick={() => navigate(`/Admin${item.link}`)}
                    className="w-full justify-start hover:bg-slate-300 px-4"
                    aria-label={item.text}
                  >
                    <item.icon className="h-5 w-5" />
                    {isExpanded && <span className="ml-4">{item.text}</span>}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Toggle Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
          className="self-end"
        >
          <IoIosArrowForward
            className={`h-4 w-4 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
