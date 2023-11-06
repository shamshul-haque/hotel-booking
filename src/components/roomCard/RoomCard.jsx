import PropTypes from "prop-types";

const RoomCard = ({ room }) => {
  return (
    <div>
      <p>{room.Category}</p>
    </div>
  );
};

RoomCard.propTypes = {
  room: PropTypes.object,
};

export default RoomCard;
