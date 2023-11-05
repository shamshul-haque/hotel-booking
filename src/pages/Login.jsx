import { Link } from "react-router-dom";
import SocialLogin from "../components/socialLogin/SocialLogin";

const Login = () => {
  return (
    <div className="mx-4 md:mx-8 lg:mx-16">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-sm border rounded p-5">
          <h1 className="text-2xl font-bold text-center uppercase">Login</h1>
          <form className="mt-5 space-y-5">
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
            <span>{`Don't Have Account?`}</span>{" "}
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
