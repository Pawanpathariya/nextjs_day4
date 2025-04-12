
import User from "@/app/model/signUpModel";
import dbConnect from "@/app/lib/connection";
import mongoose from "mongoose";
import { message } from "antd";
export async function POST(req) {
  try {
   const data=await req.json();
  const {email,password}=data;
   await dbConnect();
   const user=await User.findOne({email:email});
   if(!user){
    return Response.json({message: 'User not found' }, { status: 404 });
   }
   if(user.password!==password){
    return Response.json({ message: 'Invalid password' }, { status: 401 });
   }
   return Response.json({ message: 'User Login successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to login' }, { status: 500 });
  }
}
