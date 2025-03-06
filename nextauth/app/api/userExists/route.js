import { ConnectToDB } from "@/lib/mongodb";
import User from "@/app/models/user";
import { NextResponse } from "next/server";
export async function POST(req) {
    try {
        const {email}=req.json();
        await ConnectToDB();
        const user=await User.findOne({email}).select("_id");
        return NextResponse.json({user});   
    } catch (error) {
        console.log(error)   
    }   
}