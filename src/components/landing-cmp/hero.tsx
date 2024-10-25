import React from "react";
import ProductUploader from "../product-uploader";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 mx-auto h-full w-full grid-cols-1 ">
      <div className="flex items-center relative overflow-hidden">
        <div className="absolute -top-14 -right-16">
          <Image
            src="/hero/Frame.png"
            alt="hero"
            width={350}
            height={350}
            className="blur-2xl"
          />
        </div>
        <div className="px-10">
        <h1 className="text-4xl tracking-wide font-extrabold md:leading-[80px] md:text-7xl p-1 bg-gradient-to-b from-gray-900 to-gray-600 text-transparent bg-clip-text">
          <span className="">Get the right</span> <br />
          Influencer for <br /> your{" "}
          <span className="instagrad font-extrabold text-transparent bg-clip-text">
            BRAND
          </span>
        </h1>
        <p className="max-w-[450px] leading-[30px] tracking-wide mt-8 p-1 text-xl hover:cursor-pointer group">Try uploading your product image to discover influencers {<FaChevronRight className="w-fit inline group-hover:translate-x-1 transition-all"/> }
        </p>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image src="/hero/springle.png" alt="hero" className="" width={200} height={200} />
        </div>
      </div>
      <div>
        <ProductUploader />
      </div>
    </section>
  );
};

export default Hero;
