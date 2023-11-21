import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet";
import reception from "../assets/images/reception.jpg";
import RoomCard from "../components/roomCard/RoomCard";
import useAxios from "../hooks/useAxios";

const Rooms = () => {
  const axios = useAxios();
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState("");
  // const [min, setMin] = useState();
  // const [max, setMax] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
  };

  const getRooms = async () => {
    // return await axios.get(`/rooms?sort=${asc ? "asc" : "desc"}`);
    return await axios.get(
      `/rooms?sort=${asc ? "asc" : "desc"}&search=${search}`
    );
  };

  const {
    data: rooms,
    isLoading,
    isError,
    error,
  } = useQuery({
    // queryKey: ["rooms", asc],
    queryKey: ["rooms", asc, search],
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
    <div className="py-10">
      <Helmet>
        <title>Rooms | The Luxe Haven</title>
      </Helmet>
      <img
        src={reception}
        alt="reception"
        className="h-[80vh] w-full rounded"
      />
      <div className="text-center my-5 space-y-1">
        <h1 className="text-xl md:text-2xl font-bold uppercase">
          Welcome to Luxe Haven
        </h1>
        <p className="lg:px-32 text-sm md:text-base">
          Step into the world of pure indulgence at Luxe Haven. Our hotel
          redefines luxury with exquisite accommodations, impeccable service,
          and a haven of tranquility. Experience the epitome of opulence.
        </p>
      </div>
      <div className="mb-5 text-center">
        <div>
          <form onSubmit={handleSearch}>
            <input type="text" name="search" className="border " />
            <button className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white font-medium">
              Search
            </button>
          </form>
        </div>
        <div>
          <button
            onClick={() => setAsc(!asc)}
            className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white font-medium"
          >
            {asc ? "Low to High" : "High to Low"}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {rooms?.data.map((item) => (
          <RoomCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
