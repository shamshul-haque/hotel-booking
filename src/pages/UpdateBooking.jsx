import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";

const UpdateBooking = () => {
  const [selectDate, setSelectDate] = useState(new Date());

  return (
    <div className="w-full max-w-sm mx-auto border rounded my-10 p-5">
      <h1 className="text-center font-bold text-xl">
        Update Your Booking Date
      </h1>
      <form onSubmit="" className="mt-5 space-y-5">
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
