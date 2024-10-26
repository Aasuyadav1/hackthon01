"use server";
import mongoose, { Schema, Document } from "mongoose";
import type { User } from "next-auth";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    }
  },
  { timestamps: true }
);

const User =
  mongoose.models?.User || mongoose.model<User>("User", UserSchema);

export default User;