import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-3 max-w-xs mx-auto mb-5">
        <hr className="flex-1" />
        <span className="text-center">OR</span>
        <hr className="flex-1" />
      </div>
      <button className="w-full border hover:border-red-500 transition-all duration-300 p-2 rounded font-medium flex items-center justify-center gap-1">
        <FcGoogle className="text-2xl" />
        <span>Continue With Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
