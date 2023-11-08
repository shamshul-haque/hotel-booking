import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SocialLogin from "../components/socialLogin/SocialLogin";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const Login = () => {
  const { loginUser, logoutUser } = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    e.currentTarget.reset();

    try {
      const user = await loginUser(email, password);
      const res = await axios.post("/auth/access-token", {
        email: user?.user?.email,
      });

      if (res.data.success) {
        toast.success("Login successfully!", {
          position: "top-center",
          theme: "colored",
        });
        if (user) {
          navigate(from, {
            replace: true,
          });
        }
      } else {
        logoutUser();
      }
    } catch (error) {
      toast.error(error.code, {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  return (
    <div className="py-10">
      <Helmet>
        <title>Login | The Luxe Haven</title>
      </Helmet>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-sm border rounded p-5">
          <h1 className="text-2xl font-bold text-center uppercase">Login</h1>
          <form onSubmit={handleLogin} className="mt-5 space-y-5">
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="outline-0 border p-2 rounded text-sm"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="outline-0 border p-2 rounded text-sm"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="flex gap-1">
                <input type="checkbox" name="terms" />
                <span className="text-sm">Remember Me</span>
              </p>
              <Link to="#" className="text-sm text-secondary hover:underline">
                Forgot Password
              </Link>
            </div>
            <div className="form-control">
              <button className="bg-primary hover:bg-secondary transition-all duration-500 p-2 rounded uppercase text-white font-medium">
                Login
              </button>
            </div>
          </form>
          <p className="text-sm text-center pt-5">
            <span>{`Don't Have Account?`} </span>
            <Link
              to="/register"
              className="text-secondary hover:underline font-medium"
            >
              Create
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
