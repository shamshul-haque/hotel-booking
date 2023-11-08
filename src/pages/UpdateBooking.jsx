import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Helmet } from "react-helmet";
import { FaCalendarAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const UpdateBooking = () => {
  const [selectDate, setSelectDate] = useState(new Date());
  const axios = useAxios();
  const { id } = useParams();
  console.log(id);

  const handleUpdateDate = async () => {
    return await axios.put(`/api/v1/user/manage-booking/${id}`, {
      date: selectDate,
    });
  };

  return (
    <div className="w-full max-w-sm mx-auto border rounded my-10 p-5">
      <Helmet>
        <title>Update Bookings | The Luxe Haven</title>
      </Helmet>
      <h1 className="text-center font-bold text-xl">
        Update Your Booking Date
      </h1>
      <form onSubmit={handleUpdateDate} className="mt-5 space-y-5">
        <label className="flex items-center justify-between border border-primary hover:border-secondary rounded cursor-pointer p-2">
          <ReactDatePicker
            selected={selectDate}
            onChange={(date) => setSelectDate(date)}
            className="outline-0 border-none"
          />
          <FaCalendarAlt />
        </label>
        <div className="form-control">
          <button className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white font-medium">
            Confirm Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBooking;
