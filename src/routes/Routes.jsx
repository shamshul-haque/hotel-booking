import { createBrowserRouter } from "react-router-dom";
import Error from "../errorHandling/Error";
import MainLayout from "../layouts/MainLayout";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyBookings from "../pages/MyBookings";
import Register from "../pages/Register";
import RoomDetails from "../pages/RoomDetails";
import Rooms from "../pages/Rooms";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/roomDetails",
        element: (
          <PrivateRoutes>
            <RoomDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoutes>
            <MyBookings />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
