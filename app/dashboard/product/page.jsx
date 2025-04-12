"use client"
import React from 'react'
import DashboardTopbar from '@/app/component/DashboardTopbar'
import Sidebar from '@/app/component/Sidebar'
import { useSearchParams } from 'next/navigation'
import { useEffect,useState } from 'react'
import axios from 'axios';
import Image from 'next/image'
const page = () => {
  const searchParams = useSearchParams();
const id = searchParams.get("id");
console.log(id)
    const [product, setProduct] = useState({});
  
      useEffect(() => {
        loadData();
      }, []);


      const loadData = async () => {
        const api = `/api/productget?id=${id}`;
        const response = await axios.get(api);
        setProduct(response.data.product)
      }
    


  return (
    <>
<DashboardTopbar/>
<div className='flex  text-black gap-5'>
<div>
  <Sidebar/>
  </div>
<div className='text-3xl text-black ml-60 w-full'>
<div className="p-4 bg-white shadow rounded-lg w-70 m-auto mt-20">
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


