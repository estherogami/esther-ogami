// const mongoose = require('mongoose');

// dbConnect().catch(err => console.log(err));

// export default async function dbConnect() {
//   await mongoose.connect(process.env.MONGODB_URI);
// }



import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;