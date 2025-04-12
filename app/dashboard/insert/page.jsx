'use client'
import React from 'react'
import DashboardTopbar from '@/app/component/DashboardTopbar' 
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/app/component/Sidebar'
import axios from 'axios'
import { useState } from 'react'
const page = () => {
    const [product, setProduct] = useState({})
    const [filename, setFilename] = useState('');
    const [image, setImage] = useState(null);

    const handleFileChange = (event) => {
      setFilename(event.target.files[0].name);
      setImage(event.target.files[0]);
    };
  
    const handlesubmit= async(e)=>{
        e.preventDefault()

        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset","pawan_cloud");
        formData.append('cloud_name','dbwpnzi57');
        const api1='https://api.cloudinary.com/v1_1/dbwpnzi57/image/upload';
        const response1 = await axios.post(api1, formData);


        const api="/api/product";
        const response=await axios.post(api,{...product,imageurl:response1.data.url});
  console.log(response.data);
        alert(response.data.message)
    }

const router=useRouter();
  useEffect(() => {
    if (!localStorage.getItem('useremail')) {
     router.push('/pages/signin');
    }
  }, []);
  return (

    <>

<DashboardTopbar/>
<div className='flex flex-col md:flex-row gap-5'>
<div className='md:w-1/4'>
  <Sidebar/>
  </div>
<div className='md:w-3/4'>
<div className='flex flex-col gap-5 m-auto bg-slate-400 w-full p-3 text-amber-50 mt-5 mb-5 rounded-2xl items-center md:w-1/2 ' >
<div>
    <label className='m-1'>Product Name</label>
    <input type="text" className='border-2 ' name='proname' onChange={(e) => setProduct({ ...product, [e.target.name]: e.target.value })} />
</div>
<div>
    <label className='m-1'>Product Brand</label>
    <input type="text" className='border-2' name='probrand' onChange={(e) => setProduct({ ...product, [e.target.name]: e.target.value })} />
</div>
<div>
    <label className='m-1'>Product Price</label>
    <input type="text" className='border-2' name='proprice' onChange={(e) => setProduct({ ...product, [e.target.name]: e.target.value })} />
</div>
<div>
    <label className='m-1'>Image</label>
    <input type="file" className='border-2 w-50' name='proimage'  onChange={handleFileChange}/>
</div>
<button className='bg-blue-950 text-white p-2 m-2 w-30 hover:bg-amber-300 hover:text-blue-500' onClick={handlesubmit}>Insert data</button>
</div>


</div>
</div>

    </>    
  )
}

export default page
