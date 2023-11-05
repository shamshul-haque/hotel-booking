import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
const DropdownManus = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn m-1">
        <AiOutlineMenu className="text-xl" />
      </label>
      <div
        tabIndex={0}
        className="dropdown-content p-5 shadow bg-base-100 rounded-box"
      >
        <div className="flex flex-col">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-secondary active font-medium border-b py-1"
                : "font-medium border-b py-1"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/rooms"
            className={({ isActive }) =>
              isActive
                ? "text-secondary active font-medium border-b py-1"
                : "font-medium border-b py-1"
            }
          >
            Rooms
          </NavLink>
          <NavLink
            to="/my-bookings"
            className={({ isActive }) =>
              isActive
                ? "text-secondary active font-medium"
                : "font-medium border-b py-1"
            }
          >
            My Bookings
          </NavLink>
        </div>
        <div className="mt-5 flex justify-center">
          <Link
            to="/login"
            className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownManus;
