'use client'
import DashboardTopbar from '@/app/component/DashboardTopbar'
import Sidebar from '@/app/component/Sidebar'
import React, { useEffect,useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
const page = () => {
    const {id}=useParams();
    const [product,setProduct]=useState({});
const loaddata=async()=>{
    const api = `/api/productget?id=${id}`;
    const response = await axios.get(api);
    setProduct(response.data.product)
}


useEffect(()=>{
loaddata();
},[])
  return (
<>
<DashboardTopbar/>
<div className='flex  text-black gap-5'>
<div>
  <Sidebar/>
  </div>
<div className='text-3xl text-black ml-60 w-full'>
<div className="p-4 bg-white shadow rounded-lg w-70 m-auto mt-20 align-center justify-center">
<h2 className="text-xl font-bold mb-2">Product Name : {product.Proname}</h2>
<p className="text-gray-700 mb-1">Brand: {product.Probrand}</p>
<p className="text-gray-700 mb-1">Price: {product.Proprice}</p>
{product.imageurl && (
  <div className="mt-4">
   <img src={product.imageurl} alt='home' width={100} height={30} />
  </div>
)}
</div>
</div>
</div>
</>
  )
}

export default page