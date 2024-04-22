import React from "react";
import { MdOutlineConnectWithoutContact, MdPostAdd } from "react-icons/md";
import { LiaSchoolSolid } from "react-icons/lia";
import { GoCommentDiscussion } from "react-icons/go";

const Features = () => {
  return (
    <div name="features" className=" w-fit h-fit bg-[#fefffd] py-[5rem]">
      <div className="text-center ">
        <p className="text-4xl font-bold text-center text-[#424242]">
          Features
        </p>
        <p className="text-2xl pt-4">Explore what else we can do for you</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  py-8 px-8 marker:selection: md:px-20">
        <div className="flex flex-col justify-center items-center px-5 card bg-[#e0fdd1]">
          <MdOutlineConnectWithoutContact className="text-6xl" />
          <div className="text-center pt-8">
            <p className="font-bold text-[1.5rem]">Connect with coursemates</p>
            <p className="text-lg pt-3">
              Have easy access to your coursemates inrespective of their levels.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-5 card bg-[#e0fdd1]">
          <LiaSchoolSolid className="text-6xl" />
          <div className="text-center pt-8">
            <p className="font-bold text-[1.5rem]">Access to study materials</p>
            <p className="text-lg pt-3">
              Have easy access to in-demand study materials uploaded by your
              coursemates
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-5 card bg-[#e0fdd1]">
          <MdPostAdd className="text-6xl" />
          <div className="text-center pt-8">
            <p className="font-bold text-[1.5rem]">View and post contents</p>
            <p className="text-lg pt-3">
              Share your thoughts related to your field of study through posts
              as well as view coursemate posts
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-5 card bg-[#e0fdd1] md:mr-0">
          <GoCommentDiscussion className="text-6xl" />
          <div className="text-center pt-8">
            <p className="font-bold text-[1.5rem]">Start a topic</p>
            <p className="text-lg pt-3">
              Start an open discussion on a topic with your fellow coursemates
              to share insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
