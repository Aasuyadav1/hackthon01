import Image from "next/image";
import ProductUploader from "@/components/product-uploader";
import UploadWidget from "@/components/cloudinary/upload-widget";
import Hero from "@/components/landing-cmp/hero";
import ProductDetails from "@/components/products/product-details";
<<<<<<< HEAD
import InfluencerCard from "@/components/influencers/influencer-card";
=======
>>>>>>> 445f25743d7f1d33f95d9b0fbb9c1b07ecbec651
import Influencer from "@/components/influencers/influencer";
import InfluencerAdmin from "@/components/admin-dash/influencer-admin";
import InstaInput from "@/components/insta-input";
import InstaCard from "@/components/insta-card";

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
