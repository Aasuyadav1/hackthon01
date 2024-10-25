import Image from "next/image";
import ProductUploader from "@/components/product-uploader";
import ImageTxtModal from "@/components/image-txt-modal";
import UploadWidget from "@/components/cloudinary/upload-widget";

export default function Home() {
  return (
    <div className="grid place-content-center h-screen">
    {/* <UploadWidget/> */}
    <h1 className="text-4xl font-extrabold"> Upload your Brand details </h1>
    <div className="grid mt-10 place-content-center ">
    <ProductUploader/>
    <ImageTxtModal/>
    </div>
  </div>
  );
}
