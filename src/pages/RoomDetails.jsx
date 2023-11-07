import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const RoomDetails = () => {
  const { id } = useParams();
  const axios = useAxios();

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

  return (
    <div className="bg-white rounded shadow-md flex flex-col md:flex-row items-center gap-10 my-10">
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
          <p>
            <span className="font-bold">Available Seats:</span>
            <span className="bg-primary px-2 text-white rounded ml-1">
              {item.data.available_seats}
            </span>
          </p>
        </div>
        <form className="flex justify-center gap-5">
          <input
            type="date"
            name="date"
            placeholder="Password"
            className="outline-0 border p-2 rounded text-sm"
            required
          />
          <button className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white font-medium">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoomDetails;
