import FeaturedRooms from "../components/featuredRoomos/FeaturedRooms";
import Mapping from "../components/mapping/Mapping";
import Slider from "../components/slider/Slider";
import Subscribe from "../components/subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedRooms />
      <Subscribe />
      <Mapping />
    </div>
  );
};

export default Home;
