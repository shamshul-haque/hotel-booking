import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    toast.info(
      "We received your message. Our customer executive will contact with you very soon!",
      {
        position: "top-center",
        theme: "colored",
      }
    );
  };
  return (
    <div className="py-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-black">
        Contact With Us
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 mt-5">
        <div className="flex-1 w-full space-y-10">
          <div className="bg-white shadow-lg rounded p-10 flex items-center gap-5">
            <BsFillTelephoneFill className="text-2xl text-primary" />
            <Link to="tel:+880 1406680846">+880 1406680846</Link>
          </div>
          <div className="bg-white shadow-lg rounded p-10 flex items-center gap-5">
            <AiFillMail className="text-2xl text-primary" />
            <Link to="mailto:information@luxehaven.com">
              information@luxehaven.com
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded p-10 flex items-center gap-5">
            <GoLocation className="text-2xl text-primary" />
            <div className="">
              <p>Sea Beach, Soghundha Point, {`Cox's`} Bazar</p>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full bg-white shadow-lg rounded">
          <div className="flex flex-col items-center">
            <div className="w-full border rounded p-5">
              <h1 className="text-2xl font-bold text-center">
                Write Your Message
              </h1>
              <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                <div className="form-control">
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    className="outline-0 border p-2 rounded"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="outline-0 border p-2 rounded"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="email"
                    placeholder="Physical Address"
                    className="outline-0 border p-2 rounded"
                    required
                  />
                </div>
                <div className="form-control">
                  <textarea
                    name="message"
                    cols="20"
                    rows="3"
                    placeholder="Write Message"
                    className="outline-0 border p-2 rounded"
                    required
                  ></textarea>
                </div>
                <div className="form-control w-20">
                  <button className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white font-medium">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
