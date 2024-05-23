import mongoose from "mongoose"
import { NextResponse } from "next/server";

export const dbConnect = async() => {
    try {
    await mongoose.connect(process.env.MONGODB_URI!); 
    } catch (error: any) {
     return NextResponse.json({error: error.message || "Failed to connect with database"}, {status: 500}); 
    }
}; 