import Navigation from '@/components/Navigation'
import React from 'react'
import { ArrowLeft, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import Cart from './Cart'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
       <div className='border-b border-gray-200 sticky top-0  bg-white flex items-center justify-around z-50'>
        <Link href={'/'} className='hover:bg-gray-100 p-1 rounded-full border border-gray-200'><ArrowLeft size={24} color='#242321' /></Link>
         <Navigation />
            <div className='flex gap-8 items-center justify-center'>
                <Link href={"/cart"} className='relative cursor-pointer hover:text-primary'>
                    <ShoppingCart />
                    <p className='w-5 h-5 text-xs flex items-center justify-center text-white absolute -top-2 -right-2 bg-[#dc2626] rounded-full '>2</p>
                </Link>
                <Link href={"/login"} className='relative cursor-pointer hover:text-primary'>
                    <User />
                    <p className='w-5 h-5 text-xs flex items-center justify-center text-white absolute -top-2 -right-2 bg-[#dc2626] rounded-full '>2</p>

                </Link>
            </div>
       </div>
       <Cart />
       <Footer />
       
    </div>
  )
}

export default page