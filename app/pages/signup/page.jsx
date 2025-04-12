"use client"
import Footer from '@/app/component/Footer'
import Header from '@/app/component/Header'
import React, { useState } from 'react'
import axios from 'axios'
const page = () => {
    const [user,setuser]=useState({});
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setuser({...user, [name]: value});
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        let api='/api/user';
        try {
            let response=await axios.post(api,user);
            alert(response.data.message);
            setuser({});
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <>
    <Header/>
   <div className='flex flex-col gap-5 justify-center items-center m-auto border border-b-black w-1/2 mt-5 mb-5 p-4 rounded-2xl bg-blue-50'>
    <div>
        <label >Enter Name </label>
        <input type="text" placeholder='Enter Name' name='name' value={user.name || ''} onChange={handleInputChange} className='border border-black' />
    </div>
    <div>
        <label >Enter Email </label>
        <input type="text" placeholder='Enter Email' name='email' value={user.email || ''} onChange={handleInputChange} className='border border-black' />
    </div>
    <div>
        <label >Enter Password </label>
        <input type="password" placeholder='Enter Password' name='password' value={user.password || ''} onChange={handleInputChange} className='border border-black' />
    </div>

<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded w-25" onClick={handleSubmit}>
  Submit
</button>

   </div>
    <Footer/>
    </>
  )
}

export default page
