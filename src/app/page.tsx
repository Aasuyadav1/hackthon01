import Image from "next/image";
import ProductUploader from "@/components/product-uploader";
import UploadWidget from "@/components/cloudinary/upload-widget";
import Hero from "@/components/landing-cmp/hero";
import ProductDetails from "@/components/products/product-details";
import InfluencerCard from "@/components/influencers/influencer-card";
import Influencer from "@/components/influencers/influencer";
import InfluencerAdmin from "@/components/admin-dash/influencer-admin";
import InstaInput from "@/components/insta-input";
import InstaCard from "@/components/insta-card";
import Link from "next/link";

export default function Home() {
  return (
    //   <div className="grid place-content-center h-screen">
    //   {/* <UploadWidget/> */}
    //   <h1 className="text-4xl font-extrabold"> Upload your Brand details </h1>
    //   <div className="grid mt-10 place-content-center ">
    //   <ProductUploader/>
    //   <ImageTxtModal/>
    //   </div>
    // </div>
    <main className="h-dvh w-full">
    <header className="w-full flex items-center justify-between p-5 bg-slate-50 border-b">
    <h1 className="instagrad text-4xl font-extrabold text-transparent bg-clip-text">
            FLUENT Match
          </h1>

          <div className="space-x-4">
            <Link className="p-3 px-8 rounded-full font-semibold border-2 text-purple-500 border-purple-500" href={"/"}>Brand</Link>
            <Link className="p-3 px-8 rounded-full font-semibold border-2 bg-purple-500 border-purple-500 text-white" href={"/"}>Creator</Link>
          </div>
    </header>
      <Hero />
      {/* <ProductDetails /> */}
      <InfluencerCard/>
      <Influencer/>
      <InfluencerAdmin/>
      <InstaInput/>
      <InstaCard/>
    </main>
  );
}
