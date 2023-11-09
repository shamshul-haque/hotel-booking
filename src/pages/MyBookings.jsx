import { useQuery } from "@tanstack/react-query";
import moment from "moment/moment";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const MyBookings = () => {
  const { user } = useAuth();
  const axios = useAxios();

  const getBooking = async () => {
    return await axios.get(`/user/bookings?email=${user?.email}`);
  };

  const {
    data: bookings,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBooking,
  });

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center">
        <span className="loading loading-bars w-40 py-40"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full flex justify-center items-center">
        <p>Something Wrong: {error}!</p>
      </div>
    );
  }

  const handleDelete = (id, bookingDate) => {
    const newDate = new Date();
    const dayDifference = Math.floor(
      (new Date(bookingDate) - newDate) / (1000 * 60 * 60 * 24)
    );
    console.log(dayDifference);

    if (dayDifference > 1) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const deleteItem = async () => {
            const res = await axios.delete(`/user/cancel-booking/${id}`);
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
              refetch();
            }
          };
          deleteItem();
        }
      });
    } else {
      Swal.fire("Cannot Delete", "Cancellation time expired!", "error");
    }
  };

  return (
    <div className="py-10 w-full md:w-9/12 mx-auto">
      <Helmet>
        <title>My Booking | The Luxe Haven</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center uppercase">
        My Booking List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {bookings?.data?.map((item) => (
          <div key={item._id} className="bg-white shadow-xl p-5 rounded-xl">
            <img
              src={item.image}
              alt="booked image"
              className="h-40 w-full rounded"
            />
            <div className="py-4 space-y-1">
              <p className="text-xs md:text-base font-bold text-center">
                {item.name}
              </p>
              <p className="text-xs md:text-base text-center">
                <span className="font-bold">Booking for:</span>{" "}
                {moment(item.date).format("MMM Do YY")}
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-2">
              <div>
                <Link to={`/update-bookings/${item._id}`}>
                  <button className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white text-xs md:text-base md:font-medium w-full">
                    Update Date
                  </button>
                </Link>
              </div>
              <div>
                <Link to={`/add-review/${item._id}`}>
                  <button className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white text-xs md:text-base md:font-medium w-full">
                    Add Review
                  </button>
                </Link>
              </div>
              <div>
                <button
                  onClick={() => handleDelete(item._id, item.date)}
                  className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white text-xs md:text-base md:font-medium w-full"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
