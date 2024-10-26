import React from "react";
import { FaInstagram } from "react-icons/fa";
import DevModal, { ModalTrigger }  from "./dev-cmp/modal";

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
      <DevModal
      title="Enter Email"
      defaultOpen={false}
      modalBtn={
        <button className="bg-[#ee3006] p-2 px-4 rounded-md hover:opacity-80">
          Add email
        </button>
      }
    >
      <div className="flex flex-col gap-3 w-full py-10 px-8 pt-0 mt-4">
      <form action="">
      <input type="email" placeholder="abcd@gmail.com" className="w-full rounded-full bg-white  px-6 py-2 border-2 border-black" />
      <button className="bg-red-600 text-white w-full rounded-full mt-6 py-2" type="submit">Submit</button>
      </form>

      </div>
    </DevModal>
    </div>
  );
};

export default InstaInput;
