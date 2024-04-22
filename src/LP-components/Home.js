import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        name="home"
        className="w-full h-screen md:px-8 md:pt-8 bg-[#fefffd] border text-xl"
      >
        <div className="max-w-[1000px] mx-auto px-16 flex flex-col justify-center h-full text-white">
          <h1 className="text-4xl sm:text-6xl md:text-7xl  font-bold text-[#424242]">
            Connect with your fellow course mates
          </h1>
          <h2 className="hidden md:block text-xl sm:text-4xl md:text-5xl font-bold text-[#4c5566] ">
            In need of study materials? <br /> Sturum is here for you
          </h2>
          <p className="text-[#586079] py-4 max-w-[700px]">
            A platform to share your experiences and view your course mates
            experiences in your field of study through posts
          </p>
          <div>
            <Link to="/signup">
              <button className="bg-transparent hover:bg-green-500 text-black font-semibold hover:text-black py-2 px-4 border border-black hover:border-transparent rounded mx-0">
                Create an account
                <span className="group-hover:rotate-90 duration-300"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
