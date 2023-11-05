import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const Manus = () => {
  const { user, logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success("Logout successfully!", {
          position: "top-center",
          theme: "colored",
        });
      })
      .catch((error) => {
        toast.error(error.code, {
          position: "top-center",
          theme: "colored",
        });
      });
  };

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
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="cursor-pointer">
              <img
                src={user?.photoURL}
                alt={user?.displayName}
                className="w-10 h-10 rounded-full"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-50 m-2 p-5 w-40 shadow bg-base-100 rounded-box"
            >
              <li className="font-medium text-center">{user?.displayName}</li>
              <li className=" text-center mt-3">
                <Link
                  to="/login"
                  onClick={handleLogout}
                  className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white font-medium"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white font-medium"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Manus;
