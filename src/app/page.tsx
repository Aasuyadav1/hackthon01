import Image from "next/image";
import ProductUploader from "@/components/product-uploader";
import UploadWidget from "@/components/cloudinary/upload-widget";
import Hero from "@/components/landing-cmp/hero";
import ProductDetails from "@/components/products/product-details";
<<<<<<< HEAD
import InfluencerCard from "@/components/influencers/influencer-card";
=======
import Influencer from "@/components/influencers/influencer";
import InfluencerAdmin from "@/components/admin-dash/influencer-admin";
import InstaInput from "@/components/insta-input";
import InstaCard from "@/components/insta-card";
>>>>>>> 9bde63aba009bc100d88b5072bf0388425372ad3

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
      <ProductDetails />
<<<<<<< HEAD
      <InfluencerCard/>
=======
      <Influencer/>
      <InfluencerAdmin/>
      <InstaInput/>
      <InstaCard/>
>>>>>>> 9bde63aba009bc100d88b5072bf0388425372ad3
    </main>
  );
}
