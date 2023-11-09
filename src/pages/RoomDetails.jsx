import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { FaCalendarAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Review from "../components/reviews/Review";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const RoomDetails = () => {
  const { id } = useParams();
  const axios = useAxios();
  const { user } = useAuth();
  const [selectDate, setSelectDate] = useState(new Date());

  const getRoomDetails = async () => {
    return await axios.get(`/rooms/${id}`);
  };

  const {
    data: item,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["details"],
    queryFn: getRoomDetails,
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

  const handleBooking = async (e) => {
    e.preventDefault();
    const date = new Date(selectDate);
    console.log(date);
    const email = user?.email;
    const image = item?.data?.img;
    const name = item?.data?.name;
    const bookingDetails = { date, email, image, name };

    try {
      await axios.post("/user/create-booking", bookingDetails);
      toast.success("Booking successful!", {
        position: "top-center",
        theme: "colored",
      });
    } catch {
      console.log("error");
    }
  };

  return (
    <div className="py-10">
      <Helmet>
        <title>Room Details | The Luxe Haven</title>
      </Helmet>
      <div className="bg-white rounded shadow-md flex flex-col md:flex-row items-center gap-10 mb-10">
        <div className="flex-1">
          <img
            src={item?.data?.img}
            alt={item?.data?.name}
            className="rounded-l"
          />
        </div>
        <div className="flex-1 ">
          <div className="p-5 space-y-1">
            <h1 className="text-2xl font-bold">{item?.data?.name}</h1>
            <p>
              <span className="font-bold">Price Per Night: </span>$
              {item?.data?.price_per_night}
            </p>
            <p>
              <span className="font-bold">Room Size: </span>
              {item?.data?.room_size}
            </p>
            <p>
              <span className="font-bold">Description: </span>
              {item?.data?.desc}
            </p>
            <p>
              <span className="font-bold">Special Offers: </span>
              {item?.data?.special_offers}
            </p>
          </div>
          <div className="flex justify-center gap-5">
            <label className="flex items-center border border-primary hover:border-secondary rounded cursor-pointer px-3">
              <DatePicker
                selected={selectDate}
                onChange={(date) => setSelectDate(date)}
                className="outline-0 border-none"
              />
              <FaCalendarAlt />
            </label>
            {!user ? (
              <Link to="/login">
                <button className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white font-medium">
                  Book Now
                </button>
              </Link>
            ) : (
              <button
                onClick={handleBooking}
                className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white font-medium"
              >
                Book Now
              </button>
            )}
          </div>
        </div>
      </div>
      <Review />
    </div>
  );
};

export default RoomDetails;
