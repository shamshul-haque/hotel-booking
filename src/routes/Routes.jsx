import { createBrowserRouter } from "react-router-dom";
import Error from "../errorHandling/Error";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyBookings from "../pages/MyBookings";
import Register from "../pages/Register";
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
    ],
  },
]);

export default router;
