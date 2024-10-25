import { GoogleGenerativeAI } from "@google/generative-ai";
import React from "react";

const TxtModal = () => {
  const genAI = new GoogleGenerativeAI(
    process.env.NEXT_PUBLIC_GEMINI_API_KEY as string
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = "Write a story about a magic backpack.";
  const generateData = async () => {
    try {
      const result = await model.generateContent(prompt);
      console.log(result.response.text());
    } catch (error) {
      console.log(error);
    }
  };
  return <div>TxtModal</div>;
};

export default TxtModal;
