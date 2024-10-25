import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstaInput = () => {
  return (
    <div
      className={`w-full h-full bg-[url('/hero/insta.jpeg')] grid place-content-center tracking-wide`}
    >
      <div className="max-w-2xl mx-auto">
      <h2 className="flex gap-2 items-center" >
        <FaInstagram
          className="text-6xl text-[#F05161]
"
        />
        <span className="text-4xl font-medium">Enter Your Instagram ID</span>
      </h2>
      <div className="mt-6">
        <input type="text" name="" id="" className="w-full py-4 px-4 rounded-full bg-white border-4 focus:outline-0 focus:ring-2 ring-[#F05161] border-[#F05161]" placeholder="https://www.instagram.com/aasu_yadav_59/" />
      </div>
      <p className="text-xl mt-4 ">We will automatically fetch your insta details </p>
      </div>
    </div>
  );
};

export default InstaInput;
