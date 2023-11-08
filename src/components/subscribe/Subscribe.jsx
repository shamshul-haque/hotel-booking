import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { toast } from "react-toastify";
import subscribe from "../../assets/images/subscribe.jpg";

const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleSubscription = (e) => {
    e.preventDefault();
    e.currentTarget.reset();

    toast.info("Thank you for your subscription!", {
      position: "top-center",
      theme: "colored",
    });
  };

  return (
    <div className="rounded mt-10" data-aos="flip-right">
      <div
        className="hero rounded"
        style={{
          backgroundImage: `url(${subscribe})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-primary bg-opacity-80 rounded"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="py-10">
            <h1 className="text-base md:text-3xl font-bold dark:text-white">
              {`Don't`} miss out the exclusive offers and updates.
            </h1>
            <h2 className=" text-base md:text-3xl font-bold dark:text-white mb-10">
              Subscribe our newsletter today!
            </h2>
            <form onSubmit={handleSubscription} className="space-y-3">
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Please Provide Your Email Address"
                  className="outline-0 border p-2 rounded text-sm"
                  required
                />
              </div>
              <div className="form-control">
                <button className="w-40 mx-auto bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white font-medium">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
