import logo from "../../assets/logo/logo.png";
import DropdownManus from "./DropdownManus";
import Manus from "./Manus";

const Navbar = () => {
  return (
    <div className="px-5 md:px-10 lg:px-20 py-5 flex items-center justify-between bg-white bg-opacity-20 shadow-sm">
      {/* logo */}
      <img src={logo} alt="logo" className="w-32" />

      {/* manus of large devices */}
      <div className="hidden lg:flex items-center gap-5">
        <Manus />
      </div>

      {/* manus small and medium devices */}
      <div className="block lg:hidden">
        <DropdownManus />
      </div>
    </div>
  );
};

export default Navbar;
