import React from "react";
import { signIn } from "../../../auth";

const page = () => {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("github",{ redirectTo: "/" });
        }}
      >
        <button type="submit">Signin with GitHub</button>
      </form>
    </div>
  );
};

export default page;
