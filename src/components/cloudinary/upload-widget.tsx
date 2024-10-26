"use client";
import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

const UploadWidget = () => {
  const [imagePreview, setImagePreview] = useState<string>("");
  return (
    <section>
        <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      options={{ multiple: false, resourceType: "image" }}
      onSuccess={(data: any) => {
        const uploadedUrl = data?.info?.secure_url;
        setImagePreview(uploadedUrl);
      }}
      onError={(err) => alert("Error from Cloudinary")}
    >
      {({ open }) => {
        return (
          <button
            className="px-8 py-4 bg-yellow-600 rounded-full"
            onClick={() => open()}
          >
            Upload an Image
          </button>
        );
      }}
    </CldUploadWidget>
   <div className="mt-10">
   <Image
      className="mt-40"
      src={imagePreview}
      alt="Uploaded Image"
      width={300}
      height={300}
    />
   </div>
    </section>
  );
};

export default UploadWidget;
