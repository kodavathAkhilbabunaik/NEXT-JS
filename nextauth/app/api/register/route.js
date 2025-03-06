import User from "@/app/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import {ConnectToDB} from "../../../lib/mongodb.js";

export async function POST(req){
    try {
        const {name,email,password}= await req.json();
        const hashedpassword= await bcrypt.hash(password,10);
        await ConnectToDB();
        await User.create({name,email,password:hashedpassword})
        return NextResponse.json({message:"user registred"},{status:201})
    } catch (error) {
        return NextResponse.json({message:"error occured"},{status:500});
        
    }
}