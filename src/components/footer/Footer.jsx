import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoPinterest,
  BiLogoTwitter,
  BiLogoYoutube,
  BiSolidPhoneCall,
} from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import footer_bg from "../../assets/images/footer_bg.jpg";
import footer_logo from "../../assets/logo/footer_logo.png";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${footer_bg})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-primary bg-opacity-90">
          <div className="px-5 md:px-10 lg:px-20 py-5 md:py-10 lg:py-20 text-white">
            <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-20">
              <div className="flex-1" data-aos="flip-right">
                <img
                  src={footer_logo}
                  alt="footer_logo"
                  className="w-48 mx-auto md:mx-0"
                />
                <p className="text-lg text-justify pt-3">
                  In 2023, The Luxe Haven emerged as a tranquil escape in{" "}
                  {`Cox's `}
                  Bazar, with a backdrop that evokes the serene beauty of the
                  Swiss Alps. We extend a warm welcome to The Luxe Haven,{" "}
                  {`Cox's`} Bazar.
                </p>
              </div>
              <div className="flex-1 mt-5 text-center" data-aos="zoom-in">
                <h2 className="text-3xl font-bold">About Us</h2>
                <div className="flex flex-col mt-5 md:mt-10 space-y-3">
                  <Link
                    to="/contact"
                    className="hover:text-secondary transition-all duration-500"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/faqs"
                    className="hover:text-secondary transition-all duration-500"
                  >
                    FAQ
                  </Link>
                  <Link
                    to="#"
                    className="hover:text-secondary transition-all duration-500"
                  >
                    Career
                  </Link>
                </div>
              </div>
              <div className="flex-1 mt-5" data-aos="flip-left">
                <h2 className="text-3xl font-bold text-center">Reach Out</h2>
                <div className="mt-5 md:mt-10 space-y-3">
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-2xl" />
                    <p>Sea Beach, Soghundha Point, {`Cox's`} Bazar</p>
                  </div>
                  <div className="flex items-center gap-3 hover:text-secondary transition-all duration-500">
                    <AiTwotoneMail className="text-2xl" />
                    <Link to="mailto:information@luxehaven.com">
                      information@luxehaven.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-3 hover:text-secondary transition-all duration-500">
                    <BiSolidPhoneCall className="text-2xl" />
                    <Link to="tel:+880 1406680846">+880 1406680846</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-10 lg:px-20 py-5 bg-black text-white flex flex-col md:flex-row justify-between gap-5">
        <small className="text-center md:text-start">
          Copyright © 2023 The Luxe Haven! All Rights Reserved
        </small>
        <div className="flex items-center justify-center gap-5 text-3xl">
          <Link
            to="#"
            className="hover:text-secondary transition-all duration-500"
          >
            <BiLogoFacebook />
          </Link>
          <Link
            to="#"
            className="hover:text-secondary transition-all duration-500"
          >
            <BiLogoTwitter />
          </Link>
          <Link
            to="#"
            className="hover:text-secondary transition-all duration-500"
          >
            <BiLogoInstagram />
          </Link>
          <Link
            to="#"
            className="hover:text-secondary transition-all duration-500"
          >
            <BiLogoPinterest />
          </Link>
          <Link
            to="#"
            className="hover:text-secondary transition-all duration-500"
          >
            <BiLogoYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
