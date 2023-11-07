import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  return (
    <div className="bg-primary rounded text-white text-center">
      <h2 className="text-xl font-bold pt-3">{room.name}</h2>
      <p>$ {room.price_per_night} /night</p>
      <Link to="/roomDetails">
        <abbr title="Click to see details">
          <img
            src={room.img}
            alt={room.name}
            className="h-44 w-full mt-2 p-1 rounded-lg hover:scale-90 transition-all duration-500"
          />
        </abbr>
      </Link>
    </div>
  );
};

RoomCard.propTypes = {
  room: PropTypes.object,
};

export default RoomCard;
