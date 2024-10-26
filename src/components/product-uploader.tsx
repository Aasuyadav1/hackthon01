"use client";
import React, { useState, useCallback, useEffect } from "react";
import { Upload, Check, X, Camera, Loader2 } from "lucide-react";
import Image from "next/image";
import { ImageTxtModal } from "./image-txt-modal";

const ProductUploader = ({setState}) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [filterHover, setFilterHover] = useState(false);
  const [revealAnimation, setRevealAnimation] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    handleFile(file);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    handleFile(file);
  };

  const handleFile = async (file?: File) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      setPreview(reader.result as string);
      setUploading(true);
      setError(null);

      // Start the reveal animation after a short delay
      setTimeout(() => {
        setRevealAnimation(true);
        setTimeout(async () => {
          setUploading(false);
          setUploadComplete(true);

          // Run the image text analysis
          const analysisResult = await ImageTxtModal(
            file,
            `When I upload a product image, analyze it and generate a JSON object with the following structure and possible enum values:

{
  "main_category:"",
  sub_category:"",
  age_group:"",
  gender:"",
  tier:"", // Options: ["BUDGET", "MID_RANGE", "PREMIUM", "LUXURY"],,
  color_scheme:"", //accurate color scheme in hexcodes
  interests:"", //Options :["TECH_SAVVY", "FITNESS", "FASHION", "OUTDOOR"] 
}

Requirements:
1. Analyze the visual elements and details in the product image
2. Provide values for all fields based on the visible characteristics
3. Include confidence scores (0-1) for classifications when relevant
4. Add relevant keywords based on the product style and features
5. Follow the enum restrictions for categorical fields
6. Overall give me a accurate niche
`
          );
          setResult(analysisResult); // Set the analysis result

          setTimeout(() => {
            setUploadComplete(false);
            setRevealAnimation(false);
          }, 2000);
        }, 1500);
      }, 500);
    };
    reader.readAsDataURL(file);
  };
useEffect(()=>{
  setState("Result")
})

  return (
    <div className="instagrad p-[0.375rem] h-full w-full grid place-content-center">
      <div className="w-[400px] h-[450px] border bg-white rounded-xl">
        <div
          className={`relative transition-all duration-500 ease-out
          ${dragActive ? "scale-98" : "scale-100"}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            onChange={handleChange}
            accept="image/*"
            disabled={uploading}
          />

          <div className="p-6 space-y-6">
            {preview ? (
              // Preview Container with Reveal Animation
              <div
                className="relative group"
                onMouseEnter={() => setFilterHover(true)}
                onMouseLeave={() => setFilterHover(false)}
              >
                <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                  {/* Black and white base image */}
                  <Image
                    src={preview}
                    alt="Preview"
                    height={500}
                    width={500}
                    className={`w-full h-full object-cover transition-all duration-500 filter ${
                      uploading && "blur-md"
                    }
                    ${filterHover ? "scale-105" : "scale-100"}`}
                  />
                  {/* Colored overlay image */}
                  <div className="absolute inset-0">
                    <Image
                      src={preview}
                      alt="Preview Colored"
                      height={500}
                      width={500}
                      className={`w-full h-full object-cover transition-all duration-500
                      ${filterHover ? "scale-105" : "scale-100"}`}
                      style={{
                        clipPath: revealAnimation
                          ? "inset(0 0 0 0)"
                          : "inset(0 100% 0 0)",
                        transition: "clip-path 1.5s ease-in-out",
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              // Upload Prompt
              <div
                className={`border-2 border-dashed rounded-lg p-20 transition-all duration-300
              ${dragActive ? "border-[#833ab4] bg-blue-50" : "border-gray-200"}
              ${error ? "border-red-500 bg-red-50" : ""}`}
              >
                <div className="space-y-4 text-center">
                  <div className="relative mx-auto w-20 h-20">
                    <div
                      className={`absolute inset-0 rounded-full bg-blue-100 animate-ping opacity-20
                    ${dragActive ? "scale-110" : "scale-0"}`}
                    ></div>
                    <div className="relative w-full h-full rounded-full bg-[#833ab4]/10 flex items-center justify-center">
                      <Camera className="w-10 h-10 text-[#833ab4]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-base font-medium text-gray-900">
                      Drag photos here
                    </p>
                    <p className="text-sm text-gray-500">or click to select</p>
                  </div>
                </div>
              </div>
            )}

            {/* Upload Button */}
            <button
              className={`w-full py-3 rounded-full font-medium transition-all duration-500
              relative overflow-hidden group
              ${
                uploading
                  ? "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"
                  : uploadComplete
                  ? "bg-gradient-to-r from-[#b665ec] to-[#833ab4]"
                  : "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:from-blue-600 hover:to-purple-600"
              }
              text-white shadow-lg hover:shadow-xl`}
              disabled={uploading || (!preview && !dragActive)}
            >
              {uploading && (
                <div className="absolute bottom-0 inset-x-0 h-1 bg-white/30 animate-progress"></div>
              )}
              <div className="relative flex items-center justify-center">
                {uploading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="ml-2">Uploading...</span>
                  </>
                ) : uploadComplete ? (
                  <>
                    <Check className="w-5 h-5 animate-bounce" />
                    <span className="ml-2">Uploaded!</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="ml-2">Upload</span>
                  </>
                )}
              </div>
            </button>

            {error && (
              <div className="flex items-center justify-center text-red-500 text-sm animate-shake">
                <X className="w-4 h-4 mr-1" />
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Add custom keyframes for animations */}
        <style jsx>{`
          @keyframes progress {
            0% {
              width: 0;
            }
            100% {
              width: 100%;
            }
          }
          @keyframes shake {
            0%,
            100% {
              transform: translateX(0);
            }
            25% {
              transform: translateX(-5px);
            }
            75% {
              transform: translateX(5px);
            }
          }
          .animate-progress {
            animation: progress 2s linear;
          }
          .animate-shake {
            animation: shake 0.5s ease-in-out;
          }
          .scale-98 {
            transform: scale(0.98);
          }
        `}</style>
      </div>
      {result && (
        <p className="text-center mt-4 text-gray-800">
          Analysis Result: {result}
        </p>
      )}
    </div>
  );
};

export default ProductUploader;
