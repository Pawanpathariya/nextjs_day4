
import User from "@/app/model/signUpModel";
import dbConnect from "@/app/lib/connection";
import mongoose from "mongoose";
export async function POST(req) {
  try {
   const data=await req.json();
   const {name,email,password}=data;
   await dbConnect();
   const user=await User.create({name,email,password});
   console.log(user)
   return Response.json({ message: 'User Register successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to register' }, { status: 500 });
  }
}
