import React from "react";
import Image from "next/image";
import { GiDuration, GiHumanTarget, GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { LuLeaf, LuShapes } from "react-icons/lu";
import { BiTargetLock } from "react-icons/bi";
import { TbGenderMale } from "react-icons/tb";
import { IoColorPaletteOutline } from "react-icons/io5";
import { PiMaskHappy } from "react-icons/pi";
import Link from "next/link";

const ProductDetails = ({data, preview}:{data:[{label:string, value:string}],preview:string}) => {
  const Icons = {
    "Category": <LuShapes/>,
    "Sub category": <BiTargetLock/>,
    "Age Group": <GiHumanTarget/>,
    "Gender": <TbGenderMale/>,
    "Tier": <GiDuration/>,
    "Color Schemes": <IoColorPaletteOutline/>,
    "Eco friendly": <LuLeaf/>,
    "Interests":<PiMaskHappy/>
  };

  return (
    <section className="p-10 max-w-7xl relative mx-auto">
      <h1 className="text-4xl font-bold">Product Details</h1>
      <p className="text-xl mt-2">Details are AI Generated</p>
      <div className="absolute -top-14 -right-16 -z-10">
          <Image
            src="/hero/Frame.png"
            alt="hero"
            width={350}
            height={350}
            className="blur-2xl -z-10"
          />
        </div>
      <div className="flex mt-10 w-full gap-28">
        <div>
          <Image
            src={preview}
            width={1000}
            height={1000}
            className="max-w-[450px] w-full aspect-square rounded-lg border-2 border-ACCENT"
          />
     {data.map((detail, idx) => (
            detail.label === "Sub category" && (
              <Link
                key={idx}
                href={`/creators/${detail.value}`}
                className="instagrad text-white translate-y-12 p-3 px-4 m-12 w-full rounded-full overflow-hidden"
              >
             
                    Search Influencer
              </Link>
            )
          ))}

        </div>
        <div className="grid gap-x-16 gap-y-8 grid-cols-2 z-10">
          {data.map((detail, idx) => (
            <div className="shadow-xl px-6 rounded-xl flex justify-center items-center py-2 gap-6 border-2 z-10 bg-white">
              <span key={idx} className="text-6xl">
                {Icons[detail.label]}
              </span>
              <div>
                <h2 className="text-xl font-semibold">{detail.label}</h2>
                {detail.label === "Color Schemes" && <div style={{background:detail.value}} className="w-32 h-6 rounded-md"></div>}
                <p className="text-lg font-medium opacity-80">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-14 -left-16 -z-10">
          <Image
            src="/hero/Frame.png"
            alt="hero"
            width={350}
            height={350}
            className="blur-2xl"
          />
        </div>
    </section>
  );
};

export default ProductDetails;
