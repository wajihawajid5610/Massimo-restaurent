import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
      {
        pizzas.map((item)=>(
          <Link href={`/product/${item.id}`} key={item.id} className='w-full group even:bg-fuchsia-50 flex flex-col justify-between h-[60vh] sm:w-1/2 md:w-1/3 border-r-2 p-4 border-b-2 border-red-500'>
            {
              item.img && 
              <div className='relative h-[80%]'>
                <Image src={item.img} alt='' fill className='object-contain'/>

              </div>
            }
            <div className='flex justify-between font-bold'>
              <h1 className='text-xl p-2'>{item.title}</h1>
              <h2 className='group-hover:hidden p-2'>${item.price}</h2>
              <button className='bg-red-500 group-hover:block text-white p-2 rounded-md uppercase hidden'>add to cart</button>
            </div>


          </Link>

        ))
      }
      
    </div>
  )
}

export default CategoryPage
