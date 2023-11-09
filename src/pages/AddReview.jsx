import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const AddReview = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const { id } = useParams();

  const handleReview = async (e) => {
    e.preventDefault();
    const form = e.target;
    const rating = parseInt(form.rating.value);
    const comment = form.comment.value;
    form.reset();
    const username = user?.displayName;
    const image = user?.photoURL;
    const randomId = id;
    const timestamp = new Date();

    const reviews = {
      randomId,
      rating,
      comment,
      username,
      image,
      timestamp,
    };

    try {
      await axios.post("/user/review", reviews);
      toast.success("Thanks for your review!", {
        position: "top-center",
        theme: "colored",
      });
    } catch {
      console.log("error");
    }
  };
  return (
    <div className="w-full max-w-sm mx-auto border rounded p-5 my-10">
      <h1 className="text-xl font-bold text-center">
        WE APPRECIATE YOUR REVIEW!
      </h1>
      <p className="text-center">
        Your review will help us to improve our web hosting quality products,
        and customer services.
      </p>
      <form onSubmit={handleReview} className="mt-5 space-y-3 ">
        <div className="form-control">
          <select name="rating" className="outline-0 border p-2 rounded">
            <option value="type">Rate our overall services</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div className="form-control">
          <textarea
            name="comment"
            cols="20"
            rows="3"
            placeholder="Write your feedback"
            className="outline-0 border p-2 rounded"
            required
          ></textarea>
        </div>
        <div className="form-control text-center w-20">
          <button className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white font-medium">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
