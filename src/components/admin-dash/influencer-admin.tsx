import React from "react";
import Image from "next/image";

const InfluencerAdmin = () => {
  return (
    <div className="max-w-7xl px-10">
      <h1 className="text-4xl font-bold text-center">Welcome Bhuvan</h1>

      <div className="grid grid-cols-4 mt-10 gap-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-sm border border-[#4463DB] rounded-lg px-3 py-3"
          >
            <Image
              src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww"
              alt="product"
              width={1000}
              height={1000}
              className="max-w-[350px] w-full aspect-square rounded-lg "
            />
            <h1 className="text-2xl font-bold px-2 mt-2">Sneaker</h1>
            <div className="grid grid-cols-2 gap-2 mt-4 font-semibold">
                <button className="bg-green-200 text-green-700 px-6 py-2 rounded-full">Accept</button>
                <button className="bg-red-200 text-red-700 px-6 py-2 rounded-full">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfluencerAdmin;
