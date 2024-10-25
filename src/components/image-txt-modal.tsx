'use client';

import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const ImageTxtModal: React.FC = () => {
  const [result, setResult] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);

  const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
  const genAI = new GoogleGenerativeAI(API_KEY);

  const fileToGenerativePart = (file: File): Promise<{ inlineData: { data: string, mimeType: string } }> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve({
        inlineData: {
          data: (reader.result as string).split(',')[1],
          mimeType: file.type
        },
      });
      reader.readAsDataURL(file);
    });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const files = event.target.files;
    if (files && files[0]) {
      setImage(files[0]);
    }
  };

  const runAnalysis = async (): Promise<void> => {
    if (!image) {
      setResult('Please upload an image before analyzing.');
      return;
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = ` Here's the enhanced prompt with enums for standardized responses:

"Analyze this product image and provide the following information in a structured JSON format:
{
  "product_name": "",
  "category": {
    "type": ["FASHION", "ELECTRONICS", "BEAUTY", "HOME", "SPORTS", "FOOD", "TOYS", "ACCESSORIES", "AUTOMOTIVE", "BOOKS", "HEALTH", "PET", "BABY", "OFFICE", "GARDEN", "DIY", "ART", "MUSIC", "OTHER"],
    "subcategory": {
      "fashion": ["CLOTHING", "FOOTWEAR", "BAGS", "JEWELRY", "ACCESSORIES", "WATCHES"],
      "electronics": ["SMARTPHONE", "LAPTOP", "AUDIO", "GAMING", "ACCESSORIES", "CAMERAS"],
      "beauty": ["SKINCARE", "MAKEUP", "HAIRCARE", "FRAGRANCE", "TOOLS"],
      "home": ["FURNITURE", "DECOR", "KITCHEN", "BATHROOM", "LIGHTING"],
      "sports": ["EQUIPMENT", "CLOTHING", "ACCESSORIES", "NUTRITION"],
      "accessories": ["TECH", "FASHION", "SPORTS", "HOME"]
    }
  },
  "target_demographics": {
    "age_range": ["0-12", "13-17", "18-24", "25-34", "35-44", "45-54", "55+", "ALL_AGES"],
    "gender": ["MALE", "FEMALE", "UNISEX", "NON_BINARY", "ALL"],
    "interests": ["TECH_SAVVY", "FITNESS", "FASHION", "OUTDOOR", "GAMING", "LUXURY", "ECO_CONSCIOUS", "CREATIVE", "PROFESSIONAL", "STUDENT", "PARENT", "TRAVELER", "WELLNESS"]
  },
  "brand_aesthetic": ["MINIMALIST", "LUXURY", "CASUAL", "SPORTY", "PROFESSIONAL", "VINTAGE", "MODERN", "EDGY", "CLASSIC", "TRENDY", "ARTISTIC", "TRADITIONAL", "CONTEMPORARY"],
  "key_features": {
    "physical": ["LIGHTWEIGHT", "DURABLE", "COMPACT", "ADJUSTABLE", "WATERPROOF", "PORTABLE", "WIRELESS", "FOLDABLE"],
    "functional": ["MULTI_PURPOSE", "EASY_TO_USE", "ERGONOMIC", "CUSTOMIZABLE", "SMART_ENABLED", "ECO_FRIENDLY"],
    "design": ["SLEEK", "COLORFUL", "PATTERNED", "INNOVATIVE", "PREMIUM_MATERIALS", "HANDCRAFTED"],
    "technical": ["HIGH_PERFORMANCE", "LONG_BATTERY", "FAST_CHARGING", "HIGH_RESOLUTION", "NOISE_CANCELLING"]
  },
  "product_images": {
    "main_view": ["FRONT", "SIDE", "BACK", "TOP", "BOTTOM", "3D", "360_VIEW"],
    "other_angles": ["FRONT", "SIDE", "BACK", "TOP", "BOTTOM", "DETAIL", "LIFESTYLE", "SCALE_REFERENCE"],
    "quality": ["HD", "4K", "STANDARD", "PROFESSIONAL", "USER_GENERATED"],
    "setting": ["STUDIO", "LIFESTYLE", "ENVIRONMENTAL", "DEMONSTRATION", "COMPARISON"]
  }
}
  
Rules:
1. Each field must return either a valid enum value or null
2. Multiple values should be returned as an array
3. Boolean fields must return true, false, or null
4. If a value cannot be determined, return null
5. Subcategory should only return values relevant to the main category
6. All responses should be in uppercase for enum values

Focus only on visible elements and provide concrete, objective details rather than assumptions."`; 
    try {
      const imagePart = await fileToGenerativePart(image);
      const response = await model.generateContent([prompt, imagePart]);
      setResult(await response.response.text());
    } catch (error: any) {
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Gemini Image Analysis</h1>
      <input type="file" onChange={handleImageUpload} accept="image/*" />
      <button onClick={runAnalysis}>Analyze Image</button>
      <div>
        <h2>Result:</h2>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default ImageTxtModal;
