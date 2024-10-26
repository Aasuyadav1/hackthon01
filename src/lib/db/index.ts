import mongoose from "mongoose"

export const connectDatabase = async () => {
  try {
    
    if (!process.env.MONGOOSE_URI) {
      throw new Error("Please define MONGODB_URI in your .env.local file");
    }

    if (mongoose.connection.readyState === 1) {
      return mongoose.connection.asPromise();
    }
    
    return await mongoose.connect(process.env.MONGOOSE_URI);

  } catch (error) {
    console.log(error);
  }
};