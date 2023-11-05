import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-20 font-barlow">
      <Outlet />
    </div>
  );
};

export default MainLayout;
