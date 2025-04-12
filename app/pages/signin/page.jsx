"use client"
import Footer from '@/app/component/Footer'
import Header from '@/app/component/Header'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
const page = () => {
  const router = useRouter();
  const [user, setUser] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }


    const handleSubmit = async (e) => {
        e.preventDefault();
        let api='/api/login';
        try {
            let response=await axios.post(api,user);
            alert(response.data.message);
            localStorage.setItem('useremail',user.email);   
            router.push('/dashboard');
        } catch (error) {
            alert(error.response.data.message);
        }
    }


  return (
    <>
      <Header />
      <div className="flex flex-col gap-5 justify-center items-center m-auto border border-b-black w-1/2 mt-5 mb-5 p-4 rounded-2xl bg-blue-50">
        <div>
          <label >Enter Email </label>
          <input type="email" placeholder='Enter Email' name='email' value={user.email} onChange={handleChange} className='border border-black' />
        </div>
        <div>
          <label >Enter Password </label>
          <input type="password" placeholder='Enter Password' name='password' value={user.password} onChange={handleChange} className='border border-black' />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded w-25" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <Footer />
    </>
  )
}

export default page
