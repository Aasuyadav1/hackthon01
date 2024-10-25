import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const Influencer = () => {
  return (
    <div className="max-w-7xl px-10">
       <h1 className="text-4xl font-bold">Found Influencers</h1>
       <p className="text-xl mt-2">Influencers fit for your brand</p>
      <div className="grid grid-cols-4 mt-16 gap-10 items-center ">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="p-3 w-fit rounded-md shadow-sm border-2 border-orange-300 bg-white">
          <div className="w-full">
            <div className="relative overflow-hidden w-fit h-fit">
              <Image
                src="https://plus.unsplash.com/premium_photo-1676998930980-fc6d4922c0b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="influencer image"
                height={1000}
                width={1000}
                className="max-w-[250px] w-full aspect-square rounded-md"
              />
              <div className="absolute bottom-0 bg-gradient-to-b from-[#ffffff42] to-[#ffffff71] w-full left-0 py-2 px-1 group">
                <h1 className="text-xl font-bold text-center text-white line-clamp-1 cursor-pointer">
                  Bhuvan Bam{" "}
                  {
                    <FaChevronRight className="w-fit inline group-hover:translate-x-1 transition-all" />
                  }
                </h1>
              </div>
            </div>

            <button className="flex items-center gap-2 mt-4 w-full bg-orange-300 text-orange-700 py-2 px-6 rounded-full text-lg font-bold border-orange-700 border-4">
              <FaInstagram className="text-2xl" />
              <hr className="h-full text-orange-700" />
              Send Request
            </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Influencer;
