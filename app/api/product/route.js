
import Product from "@/app/model/productModel";
import dbConnect from "@/app/lib/connection";
import mongoose from "mongoose";

export async function POST(req) {
  try {
   await dbConnect();
   const data=await req.json();
   const {proname,probrand,proprice,imageurl}=data;
   const myproduct=await Product.create({Proname:proname,Probrand:probrand,Proprice:proprice,imageurl:imageurl});
   console.log(myproduct);
   return Response.json({ message: 'Product Added successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to Add Product' }, { status: 500 });
  }
}

export async function GET(req){
    try {
      await dbConnect();
      const data= await Product.find();
      return Response.json({data})
    } catch (error) {
      return Response.json({error},{status:500})
    }
  }