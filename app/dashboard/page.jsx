'use client'
import React from 'react'
import DashboardTopbar from '../component/DashboardTopbar'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '../component/Sidebar'
const page = () => {
const router=useRouter();
  useEffect(() => {
    if (!localStorage.getItem('useremail')) {
     router.push('/pages/signin');
    }
  }, []);
  return (

    <>
<DashboardTopbar/>
<div className='flex  text-black gap-5'>
<div>
  <Sidebar/>
  </div>
<div className='text-3xl text-black ml-60 '>Home</div>
</div>

    </>    
  )
}

export default page