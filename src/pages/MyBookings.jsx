import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const deleteItem = async () => {
          const res = await axios.delete(`/user/cancel-booking/${id}`);
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your item has been deleted.", "success");
          }
        };
        deleteItem();
      }
    });
  };

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
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white font-medium"
                >
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
