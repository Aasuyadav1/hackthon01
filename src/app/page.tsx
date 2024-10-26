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

export default function Home() {
  return (
    <main className="h-dvh w-full">
      <Hero />
    </main>
  );
}
