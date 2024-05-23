import { dbConnect } from "@/database/dbConnect";
import { users } from '@/models/users.model'; 
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'

dbConnect(); 
export const POST = async(request: NextRequest) => {
    const {name, email, password} = await request.json(); 
 
    try {
        if(!name || !email || !password)
            return NextResponse.json({error: "Provide name, email and password"}, {status: 401});
        
        const isAlreadyExists = await users.findOne({email: email});
        if(isAlreadyExists)
            return NextResponse.json({error: "User already exists"}, {status: 500}); 
    
        const hashedPassword = await bcrypt.hash(password, 10); 
    
        const registerUserRefrence = await users.create(
            {
                name,
                email,
                password: hashedPassword
            }
        ); 
    
        if(!registerUserRefrence)
            return NextResponse.json({error: "Failed to register user"}, {status: 500}); 
    
        return NextResponse.json(
            {
                success: true, 
                message: "User created successfully",
                user_email: {
                    name: registerUserRefrence?.name,
                    email: registerUserRefrence?.email
                }
            },
            {
                status: 200
            }
        )    
    } catch (error: any) {
        return NextResponse.json({success: false, error: error.message}, {status: 500})
    }
};