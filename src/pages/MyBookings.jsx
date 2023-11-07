import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const MyBookings = () => {
  const { user } = useAuth();
  const axios = useAxios();

  const getBooking = async () => {
    return await axios.get(`/user/bookings?email=${user?.email}`);
  };

  const {
    data: bookings,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["details"],
    queryFn: getBooking,
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
    <div className="overflow-x-auto ">
      <table className="table w-2/3 mx-auto">
        <thead>
          <tr className="text-xs md:text-bases text-center">
            <th>Photo</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.data.map((item) => (
            <tr key={item._id} className="text-xs md:text-sm text-center">
              <td>
                <img
                  src={item.image}
                  alt="bbb"
                  className="w-32 rounded mx-auto"
                />
              </td>
              <td>{item.date}</td>
              <td className="">
                <button className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white font-medium">
                  Update Date
                </button>
                <button className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white font-medium">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
