import { createBrowserRouter } from "react-router-dom";
import Error from "../errorHandling/Error";
import MainLayout from "../layouts/MainLayout";
import AddReview from "../pages/AddReview";
import Contact from "../pages/Contact";
import FAQs from "../pages/FAQs";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyBookings from "../pages/MyBookings";
import Register from "../pages/Register";
import RoomDetails from "../pages/RoomDetails";
import Rooms from "../pages/Rooms";
import UpdateBooking from "../pages/UpdateBooking";
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
        path: "/roomDetails/:id",
        element: <RoomDetails />,
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
        path: "/update-bookings/:id",
        element: (
          <PrivateRoutes>
            <UpdateBooking />
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-review/:id",
        element: (
          <PrivateRoutes>
            <AddReview />
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
      {
        path: "/faqs",
        element: <FAQs />,
      },
    ],
  },
]);

export default router;
