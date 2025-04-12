'use client'
import React from 'react'
import DashboardTopbar from '@/app/component/DashboardTopbar' 
import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/app/component/Sidebar'
import axios from 'axios'
const page = () => {
const router=useRouter();
const [product, setProduct] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('useremail')) {
     router.push('/pages/signin');
    }
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const api = "/api/product";
      const response = await axios.get(api);
      const data = response?.data?.data;
      setProduct(data);
       
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }


  return (
  <> 
  <DashboardTopbar/>
  <div className='flex  text-black gap-5'>
  <div>
    <Sidebar/>
    </div>
  <div className='text-3xl text-black ml-60 w-full'>
<h1 className='text-3xl flex justify-center  '>Display</h1>
  <table  className='w-full'>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product Brand</th>
                  <th>Product Price</th>
                  <th>Product Image</th>
                </tr>
              </thead>
              <tbody>
                {
                  product.map((data2) => (
                    <tr key={data2._id} className="border-b border-gray-300" >
                      <td className="px-4 py-2">{data2.Proname}</td>
                      <td className="px-4 py-2">{data2.Probrand}</td>
                      <td className="px-4 py-2">{data2.Proprice}</td>
                      <td onClick={() => router.push(`/dashboard/product?id=${data2._id}`)}>
                        {data2.imageurl && (
                          <img src={data2.imageurl} alt="home" width={100} height={30} />
                        )}
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
  </div>
  </div>
  
  </>
  )
}

export default page