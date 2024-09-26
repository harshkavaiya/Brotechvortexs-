import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="fixed left-0 top-0 flex">
      {/* Navbar */}
      <header className="ml-4">
        <Sidebar />
      </header>
      {/* Main content area */}
      <main className="overflow-y-scroll mt-5 px-2 w-full p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
