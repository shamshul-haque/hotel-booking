import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const DropdownManus = () => {
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
    <div className="dropdown dropdown-end z-50">
      <label tabIndex={0} className="btn m-1">
        <AiOutlineMenu className="text-xl" />
      </label>
      <div
        tabIndex={0}
        className="dropdown-content p-5 w-40 shadow bg-base-100 rounded-box"
      >
        {user && (
          <div className="space-y-1">
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="w-10 h-10 rounded-full mx-auto"
            />
            <p className="font-medium text-center">{user?.displayName}</p>
          </div>
        )}
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
          {user ? (
            <Link
              to="/login"
              onClick={handleLogout}
              className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white font-medium"
            >
              Logout
            </Link>
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
    </div>
  );
};

export default DropdownManus;
