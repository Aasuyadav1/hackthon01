'use client'
import React, { useState, FormEvent, ChangeEvent } from "react";
import { FaInstagram } from "react-icons/fa";
import { getUser } from "@/lib/actions/services";
import Link from "next/link";

interface UserResponse {
  // Define the expected response type from getUser
  // Add properties based on your actual API response
  [key: string]: any;
}

const InstaInput: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  //   e.preventDefault();
  //   if (!username.trim()) return;

  //   setIsLoading(true);
  //   try {
  //     const result = await getUser(username);
  //     // Handle the result as needed
  //     console.log("user info",result);
  //   } catch (error) {
  //     console.error('Error fetching user:', error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <div
      className={`w-full h-full bg-[url('/hero/insta.jpeg')] grid place-content-center tracking-wide`}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="flex gap-2 items-center mb-10">
          <FaInstagram
            className="text-6xl text-[#F05161]"
          />
          <span className="text-4xl font-medium">Enter Your Instagram ID</span>
        </h2>
        <Link href={`/influencer/account/${username}`} className="">
          <input
            type="text"
            className="w-full py-4 px-4 rounded-full bg-white border-4 focus:outline-0 focus:ring-2 ring-[#F05161] border-[#F05161]"
            value={username}
            onChange={handleInputChange}
            placeholder="https://www.instagram.com/aasu_yadav_59/"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 bg-[#F05161] text-white py-4 px-6 rounded-full hover:bg-[#d8465a] transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </Link>
        <p className="text-xl mt-4">We will automatically fetch your insta details</p>
      </div>
     
    </div>
  );
};

export default InstaInput;