import React from "react";
import AboutSturum from "../assets/AboutSturum.jpg";

const About = () => {
  return (
    <div name="about" className="w-fit h-fit py-[5rem] border">
      <div className="bg-white p-8">
        <p className="text-4xl font-bold text-center text-[#424242]">About</p>
        <div className="lg:flex w-fit lg:h-full md:mx-10 block shadow-lg my-8 bg-[#e0fdd1] rounded-lg">
          <div className="lg:w-[50%] w-[100%]">
            <img
              className="h-[100%] rounded-t-lg sm:rounded-l-lg"
              src={AboutSturum}
              alt="About Sturum"
            />
          </div>
          <div className="flex flex-col justify-center items-center lg:w-[50%] w-[100%] bg-[#e0fdd1] py-8 px-16 text-center rounded-b-lg sm:rounded-r-lg ">
            <p className="text-[#1d2349] text-3xl font-medium pb-6">
              What is the purpose of Sturum?
            </p>
            <p className="text-[#161a36] leading-7 text-[1.2rem]">
              Sturum is a platform that performs the functionality of a
              <span className="font-bold"> BLOG</span> as well as a
              <span className="font-bold"> FORUM</span> for all students across
              the world. This platform helps you to connect with students in
              your field of study. It gives you the opportunity to post and view
              any content relating to your field of study, as well as providing
              in-demand study materials relevant to your field.
              <br />
              <span className="font-bold">Sturum is the best.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
