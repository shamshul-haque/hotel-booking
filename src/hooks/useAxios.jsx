import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
  // baseURL: "https://hotel-booking-server-five.vercel.app/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logoutUser()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => {
              toast.error(error.code, {
                position: "top-center",
                theme: "colored",
              });
            });
        }
      }
    );
  }, [logoutUser, navigate]);

  return instance;
};

export default useAxios;
