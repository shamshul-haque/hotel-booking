import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        if (result.user) {
          navigate(from, {
            replace: true,
          });
        }
        toast.success("Login successfully!", {
          position: "top-center",
          theme: "colored",
        });
      })
      .catch((error) => {
        toast.success(error.code, {
          position: "top-center",
          theme: "colored",
        });
      });
  };

  return (
    <div className="mt-5">
      <div className="flex items-center gap-3 max-w-xs mx-auto mb-5">
        <hr className="flex-1" />
        <span className="text-center">OR</span>
        <hr className="flex-1" />
      </div>
      <button
        onClick={handleGoogleLogin}
        className="w-full border hover:border-secondary transition-all duration-500 p-2 rounded font-medium flex items-center justify-center gap-1"
      >
        <FcGoogle className="text-2xl" />
        <span>Continue With Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
