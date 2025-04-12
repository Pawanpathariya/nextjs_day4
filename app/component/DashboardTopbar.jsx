"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const DashboardTopbar = () => {
const router=useRouter();

const handleLogout=()=>{
    localStorage.removeItem('useremail');
    router.push('/pages/signin');
}
  return (
    <div className="bg-gray-800 p-4 flex justify-between">
      <h1 className="text-white text-2xl font-semibold">Dashboard</h1>
      <div className="flex items-center  gap-5 text-amber-50">
     <button className='hover:underline border border-amber-50 p-2 rounded-2xl hover:bg-red-600' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default DashboardTopbar
