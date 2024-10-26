import React from "react";
import Image from "next/image";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

const ProductDetails = () => {
  const details = [
    {
      label: "Category",
      icon: <GiPerspectiveDiceSixFacesRandom />,
      value: "Clothing",
    },
    {
      label: "Age Group",
      icon: <GiPerspectiveDiceSixFacesRandom />,
      value: "18+",
    },
    {
      label: "Age Group",
      icon: <GiPerspectiveDiceSixFacesRandom />,
      value: "18+",
    },
    {
      label: "Age Group",
      icon: <GiPerspectiveDiceSixFacesRandom />,
      value: "18+",
    },
    {
      label: "Age Group",
      icon: <GiPerspectiveDiceSixFacesRandom />,
      value: "18+",
    },
    {
      label: "Age Group",
      icon: <GiPerspectiveDiceSixFacesRandom />,
      value: "18+",
    },
    {
      label: "Age Group",
      icon: <GiPerspectiveDiceSixFacesRandom />,
      value: "18+",
    },
    {
      label: "Age Group",
      icon: <GiPerspectiveDiceSixFacesRandom />,
      value: "18+",
    },
  ];
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
            src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww"
            alt="product"
            width={1000}
            height={1000}
            className="max-w-[450px] w-full aspect-square rounded-lg border-2 border-ACCENT"
          />
          <button className="instagrad mt-8 p-1 w-full rounded-full overflow-hidden">
            <div style={{backgroundColor: "white"}} className="w-full h-full rounded-full py-2 px-4 bg-white">
              <span className="instagrad font-bold text-transparent bg-clip-text text-xl">Search Influncer</span>
            </div>
          </button>
        </div>
        <div className="grid gap-x-16 gap-y-8 grid-cols-2 z-10">
          {details.map((detail, idx) => (
            <div className="shadow-xl px-6 rounded-xl flex justify-center items-center py-2 gap-6 border-2 z-10 bg-white">
              <span key={idx} className="text-6xl">
                {detail.icon}
              </span>
              <div>
                <h2 className="text-xl font-semibold">{detail.label}</h2>
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
