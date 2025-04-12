import React from 'react'
import Link from 'next/link'
const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-800 p-4 mt-18">
      <div className="flex flex-col">

        <ul className="mt-4 flex flex-col gap-10 justify-center items-center pt-10">
          <li>
            <Link href="/dashboard" className="text-white hover:underline text-3xl">
              Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard/insert" className="text-white hover:underline text-3xl">
              Insert
            </Link>
          </li>
          <li>
            <Link href="/dashboard/display" className="text-white hover:underline text-3xl">
              Display
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
