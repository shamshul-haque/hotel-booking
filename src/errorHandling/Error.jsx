import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import not_found from "../assets/images/404.gif";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Error = () => {
  return (
    <div>
      <Navbar />
      <div className="px-5 md:px-10 lg:px-20">
        <Link to="/">
          <button className="pt-10 flex items-center gap-2 text-xl text-primary hover:text-secondary font-bold">
            <BiArrowBack />
            <span>Back to Home</span>
          </button>
        </Link>
        <h1 className="text-3xl font-bold text-center">Request not found!</h1>
        <img src={not_found} alt="not_found" className="w-2/4 mx-auto" />
      </div>
      <Footer />
    </div>
  );
};

export default Error;
