import mongoose from "mongoose";
export const ConnectToDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://kodavathakhilpc:2gYkcGR0S0psBjd9@nextjs.vlmcf.mongodb.net/")
        console.log("connection successful to the database");
    } catch (error) {
        console.log("error occured while connecting to the database",error);
        
    }
}