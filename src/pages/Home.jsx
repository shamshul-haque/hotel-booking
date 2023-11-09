import { Helmet } from "react-helmet";
import FeaturedRooms from "../components/featuredRooms/FeaturedRooms";
import Mapping from "../components/mapping/Mapping";
import Slider from "../components/slider/Slider";
import Subscribe from "../components/subscribe/Subscribe";
import UserTestimonials from "../components/userTestimonials/UserTestimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | The Luxe Haven</title>
      </Helmet>
      <Slider />
      <FeaturedRooms />
      <Subscribe />
      <UserTestimonials />
      <Mapping />
    </div>
  );
};

export default Home;
