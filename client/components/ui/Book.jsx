import { ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Book = () => {
    return (
        <div className='p-3 bg-gray-100 rounded-md shadow group'>

            <Link href={'/product/1'} className="image-container p-3 ">
                <Image src={"/books/book1.jpg"} alt='book1' height={679} width={480} className='rounded-md group-hover:scale-105 transition-all duration-300' ></Image>
            </Link>

            <Link href={'/product/1'} className="book-title mt-2 block">
                <span className='font-semibold text-sm'>जानदार व्यक्तित्व | Jaandaar Vyaktitva</span>
            </Link>

            <div className='flex mt-2 items-center justify-around'>
                <div className="rating cursor-pointer leading-2 flex justify-center flex-col">
                    <div className='stars flex'> 
                        <Star fill='#FDCC0D' color="#FDCC0D"  size={12}/>
                        <Star fill='#FDCC0D' color="#FDCC0D" size={12}/>
                        <Star fill='#FDCC0D' color="#FDCC0D" size={12}/> 
                        <Star fill='#FDCC0D' color="#FDCC0D" size={12}/> 
                        <Star fill='#FDCC0D' color="#FDCC0D" size={12}/>   </div>
                    <p className='text-xs text-gray-600'>255 Rating</p>
                </div>

                <div className="ryt flex gap-2 bg-gray-200 p-2 rounded items-center cursor-pointer hover:bg-primary/20">
                    <div className="price">
                        <p className='text-sm'>100rs</p>
                    </div>
                        <div className="divider text-gray-400 ">|</div>
                    <button>
                        <p className='text-sm'><ShoppingCart size={16}/></p>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Book