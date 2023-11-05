import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto font-barlow">
      <Navbar />
      <div className="px-5 md:px-10 lg:px-20">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
