import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="w-full flex h-screen">
      {/* Navbar */}
      <header className="h-full">
        <Sidebar />
      </header>
      {/* Main content area */}
      <main className="overflow-y-scroll h-full w-full p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
