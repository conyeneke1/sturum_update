import Navbar from "../LP-components/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navbar currentPage="login" />
      <div className="flex justify-center items-center pt-[5.2rem]">
        <form className="w-[500px] h-fit bg-[#d1ffba] my-[5rem] mx-6 py-5 px-5 rounded-lg pb-8 shadow-lg">
          <h1 className="text-2xl font-bold text-center text-[#424242] pb-6">
            Log in
          </h1>

          <label htmlFor="email">Email:</label>
          <input autoComplete="off" id="email" type="email" />
          <br />
          <label htmlFor="password">Password:</label>
          <input autoComplete="off" id="password" type="password" />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-black font-bold py-2.5 px-4 rounded mx-0 w-full mt-6"
          >
            Log in
          </button>

          <p className="mt-5">
            You don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold ml-2 hover:text-green-600 cursor-pointer"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
