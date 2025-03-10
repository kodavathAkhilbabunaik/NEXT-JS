import mongoose ,{models}from "mongoose";
const userSchema=new  mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }

},{timestamps:true});
const User= models.User||mongoose.model("User",userSchema);
export default User;