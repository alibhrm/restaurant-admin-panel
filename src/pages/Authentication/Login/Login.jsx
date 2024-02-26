import { useForm } from "react-hook-form";
import { IoKeyOutline } from "react-icons/io5";
const Login = () => {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  return (
    <>
      <div className="absolute top-6 right-10 flex items-center space-x-4">
        <span>Dont have an account?</span>
        <button type="button" className="bg-zinc-800 text-white py-2 px-8 rounded">Request an Access</button>
      </div>
      <div className="w-full lg:w-1/2 bg-white p-5 flex flex-col justify-center rounded-lg lg:rounded-l-none">
        <h3 className="pt-4 text-2xl px-8 font-extrabold">
          Sign in to Avo Burger Admin!
        </h3>
        <p className="pt-4 text-xl text-gray-700 px-8 ">
          Please enter Your Details Below!
        </p>
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              for="email"
            >
              Your Email Address
            </label>
            <input
              className="border border-gray-400 appearance-none rounded w-full px-3 py-3 focus:border-teal-600 focus:outline-none "
              id="email"
              type="email"
              placeholder="Enter your Email"
              autofocus
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                for="password"
              >
                Your Password
              </label>
              <a
                className="inline-block text-sm text-gray-500 align-baseline hover:text-teal-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <input
              className="border border-gray-400 appearance-none rounded w-full px-3 py-3 focus:border-teal-600 focus:outline-none"
              id="password"
              type="password"
              placeholder="Enter Your Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "minimum character length is 8",
                },
                maxLength: {
                  value: 20,
                  message: "maximum character length is 20",
                },
              })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {JSON.stringify(errors.password.message)}
              </span>
            )}
          </div>
          <div className="mb-4">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              id="checkbox_id"
            />
            <label className="text-sm" for="checkbox_id">
              Remember Me
            </label>
          </div>
          <div className="mb-6 flex justify-end">
            <button
              className="px-4 py-2 font-bold flex items-center text-white bg-gradient-to-r from-teal-500 to-lime-300 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              <IoKeyOutline />
              Sign In To Admin
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
