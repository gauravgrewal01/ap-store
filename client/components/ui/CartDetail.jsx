"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const CartDetail = () => {
    const [qnt, setQnt] = useState(1)
    return (
        <div className='text-gray-600 p-2 '>
            <div className="item rounded border p-4 border-gray-200 flex gap-5">
                <div className="image-container h-50 w-40 relative">
                    <Image src={"/books/book1.jpg"} alt='book1' fill={true} className='rounded' ></Image>
                </div>
                <div>
                    <h1 className=' font-bold '>जानदार व्यक्तित्व | Jaandaar Vyaktitva</h1>
                    <p className='text-xs'>नया मन, नया जीवन</p>

                    <p className='mt-2 font-semibold text-gray-500 text-sm'>Amount:  <span>120</span></p>

                    <div className="actions flex justify-between mt-15">
                        <button className='underline text-sm font-bold'>REMOVE</button>

                        <div className="counter flex bg-gray-100 rounded">
                            <button onClick={() => { setQnt(qnt > 1 ? qnt - 1 : 1) }} className={`py-2 px-4 border-r border-gray-200 text-xl ${qnt <= 1 ? ' text-gray-300' : 'hover:bg-[#de4c2b] hover:text-white cursor-pointer'} rounded`} >-</button>
                            <p className='p-2 px-4'>{qnt}</p>
                            <button onClick={() => { setQnt(qnt + 1) }} className='py-2 px-4 border-l border-gray-200 text-xl hover:bg-[#de4c2b] hover:text-white rounded text-[#de4c2b] cursor-pointer'>+</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartDetail