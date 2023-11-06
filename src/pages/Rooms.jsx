import useAxios from "../hooks/useAxios";

const Rooms = () => {
  const axios = useAxios();

  axios.get("/rooms");
  return (
    <div>
      <p>Rooms</p>
    </div>
  );
};

export default Rooms;
