import { NextRequest, NextResponse } from "next/server";

export const POST = async() => {
  try {
    const respone = NextResponse.json(
        {
            success:true, 
            message: "User Logged Out successfully"
        },
        {
            status: 200
        }
    ); 

    respone.cookies.set("accessToken", "",{
        httpOnly: true, 
        expires: new Date(0)
    }); 
    
    return respone; 
  } catch (error: any) {
    return NextResponse.json({success: false, error: error.message}, {status: 500}); 
  }
}