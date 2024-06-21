import { NextRequest, NextResponse } from "next/server";

export const GET = async ( request: NextRequest, response: NextResponse) => {
    try {
          const accessToken = request.cookies.get("accessToken")?.value || ""
          
          if(!accessToken){
            return NextResponse.json({authentication: false}, {status: 500}); 
          }else{
            return NextResponse.json({authentication: true}, {status: 200}); 
          }
        
    } catch (error) {
        return NextResponse.json({authentication: false}, {status:500}); 
    }
}