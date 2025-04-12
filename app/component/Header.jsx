import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
  <>
  <nav className="flex bg-blue-950 text-white p-5">
<div>
<h5 className='text-2xl'>The Mobile Shop</h5>
</div>
<div className="flex gap-5 ml-auto text-2xl" >
<Link href='/'>Home</Link>
<Link href='/pages/display'>Display</Link>
<Link href='/pages/signin'>SignIn</Link>
<Link href='/pages/signup'>SignUp</Link>
</div>
  </nav>
  </>
  )
}

export default Header
