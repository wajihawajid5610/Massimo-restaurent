import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon';
import Image from 'next/image';



const NavBar = () => {
  const user = false;
  const links =[
    {id:1, title: "HOME", url: "/"},
    {id:2, title: "MENU", url: "/menu"},
    {id:4, title: "CONTACT", url: "/contact"},
];
  return (
    <div className='h-12 lg:px-20 xl:px-40 md:h-24 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500'>
      
      <div className='hidden md:flex gap-4 flex-1'>
        {
          links.map((val)=>(
            <Link key={val.id} href={val.url}>{val.title}</Link>

          ))
        }
      </div>


      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href="/">MASSIMO</Link>
      </div>
      
      <div className='md:hidden'>
        <Menu/>
      </div>
      
      <div className='hidden md:flex  items-center justify-end gap-4 flex-1'>
        <div className='flex md:absolute top-3 right-2 lg:w-38 lg:static gap-2 cursor-pointer px-1 rounded-md items-center bg-orange-300'>
          <Image src='/phone.png' alt='phone' height={20} width={20}/>
          <span>032 1234 567</span>
        </div>
        {!user ?  <Link href="/orders" >Orders</Link> : <Link href="/login" >Login</Link> }
        
        <Link href="/cart" ><CartIcon/></Link>
      </div>
    
    </div>
  )
}

export default NavBar
