import { useQuery } from "@tanstack/react-query";
import RoomCard from "../components/roomCard/RoomCard";
import useAxios from "../hooks/useAxios";

const Rooms = () => {
  const axios = useAxios();

  const getRooms = async () => {
    return await axios.get("/rooms");
  };

  const {
    data: rooms,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["room"],
    queryFn: getRooms,
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
    <div>
      {rooms?.data.map((item) => (
        <RoomCard key={item._id} room={item} />
      ))}
    </div>
  );
};

export default Rooms;
