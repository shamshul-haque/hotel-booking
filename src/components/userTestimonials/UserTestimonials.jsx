import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useAxios from "../../hooks/useAxios";

const UserTestimonials = () => {
  const axios = useAxios();

  const userTestimonials = async () => {
    return await axios.get("/user/review");
  };

  const {
    data: testimonials,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["testimonials"],
    queryFn: userTestimonials,
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

  console.log(testimonials);

  return (
    <div className="pt-10">
      <h1 className="text-3xl font-bold uppercase text-center">
        User Testimonials
      </h1>
      <div className="mt-5">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 1000, disableOnInteraction: true }}
          loop
        >
          {testimonials?.data?.map((item) => (
            <SwiperSlide key={item?._id}>
              <div className="mx-3 border p-5 rounded flex flex-col md:flex-row items-center gap-10">
                <img
                  src={item?.image}
                  alt={item?.name}
                  className=" h-40 rounded"
                />
                <div className="space-y-1">
                  <h2 className="font-bold uppercase">{item.username}</h2>
                  <p>{item.comment}</p>
                  <p>
                    <ReactStars
                      count={item?.rating}
                      value={item?.rating}
                      size={24}
                      fullIcon={<i className="fa fa-star"></i>}
                    />
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

UserTestimonials.propTypes = {
  count: PropTypes.number,
  value: PropTypes.number,
};

export default UserTestimonials;
