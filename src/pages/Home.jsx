import { Helmet } from "react-helmet";
import FeaturedRooms from "../components/featuredRoomos/FeaturedRooms";
import Mapping from "../components/mapping/Mapping";
import Slider from "../components/slider/Slider";
import Subscribe from "../components/subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | The Luxe Haven</title>
      </Helmet>
      <Slider />
      <FeaturedRooms />
      <Subscribe />
      <Mapping />
    </div>
  );
};

export default Home;
