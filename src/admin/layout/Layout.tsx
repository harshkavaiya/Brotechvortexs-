import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="flex min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <header className="">
        <Sidebar />
      </header>

      {/* Main content area */}
      <main className="flex-1 w-full mt-14">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
