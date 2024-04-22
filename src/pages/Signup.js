import { Link } from "react-router-dom";
import Navbar from "../LP-components/Navbar";

const Signup = () => {
  return (
    <div>
      <Navbar currentPage="login" />
      <div className="pt-[4.5rem]">
        <div className="flex justify-center items-center">
          <form className="w-[500px] h-fit bg-[#d1ffba] my-[2rem] mx-6 py-5 px-5 rounded-lg pb-8">
            <h1 className="text-2xl font-bold text-center text-[#424242] pb-6">
              Sign up
            </h1>

            <label htmlFor="department">Department:</label>
            <select
              className="outline-green-600"
              autoComplete="off"
              id="department"
              name="option/_list"
            >
              <option value="Meteorology and Climate Change">
                Meteorology and Climate Change
              </option>
              <option value="Marine Geology">Marine Geology</option>
              <option value="Marine Enviromental and Pollution">
                Marine Enviromental and Pollution
              </option>
              <option value="Marine Transport and Logistics">
                Marine Transport and Logistics
              </option>
              <option value="Fisheries and Aquaculture">
                Fisheries and Aquaculture
              </option>
              <option value="Marine Economics and Finance">
                Marine Economics and Finance
              </option>
              <option value="Port Management">Port Management</option>
            </select>
            <br />
            <label htmlFor="name">Name:</label>
            <input autoComplete="off" id="name" type="text" />
            <br />
            <label htmlFor="email">Email:</label>
            <input autoComplete="off" id="email" type="email" />
            <br />
            <label htmlFor="password">Password:</label>
            <input autoComplete="off" id="password" type="password" />

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-black font-bold py-2.5 px-4 rounded mx-0 w-full mt-6 cursor-pointer"
            >
              Sign up
            </button>

            <p className="mt-5">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold ml-2 hover:text-green-600 cursor-pointer"
              >
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
