import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useAxios from "../../hooks/useAxios";

const FeaturedRooms = () => {
  const axios = useAxios();

  const featuredRooms = async () => {
    return await axios.get("/rooms");
  };

  const {
    data: featured,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["featured"],
    queryFn: featuredRooms,
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
    <div className="text-center">
      <h1 className="text-3xl font-bold uppercase">Our Featured Rooms</h1>
      <div className="mt-5 hidden md:block">
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 1000, disableOnInteraction: true }}
          loop
        >
          {featured?.data?.map((item) => (
            <SwiperSlide key={item?._id}>
              <div className="mx-3 border p-5 rounded">
                <img
                  src={item?.img}
                  alt={item?.name}
                  className="w-full h-40 rounded"
                />
                <p className="font-bold py-3">{item.name}</p>
                <Link to={`/roomDetails/${item._id}`}>
                  <button className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white text-xs md:text-base md:font-medium">
                    Visit Room
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-5 block md:hidden">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 1000, disableOnInteraction: true }}
          loop
        >
          {featured?.data?.map((item) => (
            <SwiperSlide key={item?._id}>
              <div className="mx-3 border p-5 rounded">
                <img
                  src={item?.img}
                  alt={item?.name}
                  className="w-full h-40 rounded"
                />
                <p className="font-bold py-3">{item.name}</p>
                <Link to={`/roomDetails/${item._id}`}>
                  <button className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white text-xs md:text-base md:font-medium">
                    Visit Room
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedRooms;
