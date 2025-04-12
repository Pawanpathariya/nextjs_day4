import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
    Proname: String,
    Probrand: String,
    Proprice: String,
    imageurl: {
      type: String,
      publicid: String
    }
  })

const Product=mongoose.models.ProductModel || mongoose.model("ProductModel",ProductSchema);

export default Product;