import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import room1 from "../../assets/images/room1.jpg";
import room3 from "../../assets/images/room3.jpg";

const Slider = () => {
  return (
    <div className="py-10">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={true}
        loop
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${room1})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="h-[80vh] flex items-center"
          >
            <div className="text-center text-white space-y-5">
              <h2 className="text-2xl font-bold text-white p-5 md:p-0">
                WELCOME TO LUXE HAVEN
              </h2>
              <p className="px-20 pb-10 hidden md:block">
                Step into the world of pure indulgence at Luxe Haven. Our hotel
                redefines luxury with exquisite accommodations, impeccable
                service, and a haven of tranquility. Experience the epitome of
                opulence.
              </p>
              <Link to="/rooms">
                <button className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white font-medium">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${room3})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="h-[80vh] flex items-center"
          >
            <div className="text-center space-y-5">
              <h2 className="text-2xl font-bold text-white p-5 md:p-0">
                Select Your Room Today!
              </h2>
              <p className="px-20 pb-10 hidden md:block">
                Step into the world of pure indulgence at Luxe Haven. Our hotel
                redefines luxury with exquisite accommodations, impeccable
                service, and a haven of tranquility. Experience the epitome of
                opulence.
              </p>
              <Link to="/rooms">
                <button className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white font-medium">
                  Select Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
