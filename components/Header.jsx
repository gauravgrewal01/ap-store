import Link from 'next/link'
import React from 'react'
import Input from './ui/Input'
import { ShoppingCart, User } from 'lucide-react'

const Header = () => {
    return (
        <header className='flex items-center justify-around py-3 border-b border-gray-200'>
            <div>
                <Link href={"/"}>
                    <h1 className='font-bold text-xl'>AP Store</h1>
                </Link>
            </div>
            <Input />
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
        </header>
    )
}

export default Header