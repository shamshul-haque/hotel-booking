import { Link, NavLink } from "react-router-dom";

const Manus = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-secondary active font-medium" : "font-medium"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/rooms"
          className={({ isActive }) =>
            isActive ? "text-secondary active font-medium" : "font-medium"
          }
        >
          Rooms
        </NavLink>
        <NavLink
          to="/my-bookings"
          className={({ isActive }) =>
            isActive ? "text-secondary active font-medium" : "font-medium"
          }
        >
          My Bookings
        </NavLink>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white font-medium"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Manus;
