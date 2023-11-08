import { useQuery } from "@tanstack/react-query";
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

  const handleDelete = (id) => {
    // const currentDate = new Date();
    // const bookingDate = bookings?.data?.find((date) => date.date);
    // const dayDifference = Math.floor(
    //   (currentDate - bookingDate.date) / (1000 * 60 * 60 * 24)
    // );
    // console.log(currentDate);
    // console.log(bookingDate.date);
    // console.log(dayDifference);

    const dateStr1 = "2023-11-8"; //cancel date
    const dateStr2 = "2023-11-11"; //booking date
    const date1 = new Date(dateStr1);
    const date2 = new Date(dateStr2);
    const dayDifference = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
    console.log(date1);
    console.log(date2);
    console.log(dayDifference);

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
  };

  return (
    <div className="py-10 w-full lg:w-2/3 mx-auto">
      {bookings?.data?.map((item) => (
        <div
          key={item._id}
          className="flex items-center justify-between gap-5 mt-5"
        >
          <img
            src={item.image}
            alt="booked image"
            className="w-20 md:w-40 rounded"
          />
          <div>
            <p className="text-xs md:text-base font-bold text-center">
              {item.name}
            </p>
            <p className="text-xs md:text-base text-center">
              Booking for: {item.date}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Link to={`/update-bookings/${item._id}`}>
              <button className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white text-xs md:text-base md:font-medium">
                Update Date
              </button>
            </Link>
            <button
              onClick={() => handleDelete(item._id)}
              className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white text-xs md:text-base md:font-medium"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
