import React from "react";
import { signIn } from "../../../auth";
import { FaGoogle } from "react-icons/fa";

const page = () => {
  return (
    <div className="grid place-content-center w-full h-screen">
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
        className="border-2 rounded-md border-red-500 px-6 w-[450px] py-10"
      >
        <h1 className="text-xl font-bold text-center">Sign In</h1>
       
        <button type="submit" className="w-full rounded-full border-4 flex gap-4 items-center justify-center border-red-500 px-6 py-2 text-red-600 font-medium hover:bg-red-100 mt-10 transition-all"><FaGoogle className="text-xl" />Signin with Google</button>
      </form>

    </div>
  );
};

export default page;
