import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RoomCard = ({ item }) => {
  return (
    <div className="bg-primary rounded text-white text-center">
      <h2 className="font-bold pt-3">{item.name}</h2>
      <p>$ {item.price_per_night} /night</p>
      <Link to={`/roomDetails/${item._id}`}>
        <abbr title="Click to see details">
          <img
            src={item.img}
            alt={item.name}
            className="h-44 w-full mt-2 p-1 rounded-lg hover:scale-90 transition-all duration-500"
          />
        </abbr>
      </Link>
    </div>
  );
};

RoomCard.propTypes = {
  item: PropTypes.object,
};

export default RoomCard;
