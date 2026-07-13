import Footer from '@/components/Footer'
import Link from 'next/link'
import React from 'react'

const Address = () => {
  return (
    <div>
      <h1 className='text-2xl text-gray-600 mx-10 mt-10'>Add delivery Address</h1>

      <div className="address grid grid-cols-3 p-10">
        <form className='col-span-2 grid grid-cols-2 gap-6'>
          <div className="name text-gray-600 ">
            <label className='block'>Name</label>
            <input className='py-2 px-4 w-full rounded-md outline-none border border-gray-200 focus:border-amber-600 placeholder:text-gray-500 text-black' type="text" name="" id="" placeholder='Enter Your Name' />
          </div>
          <div className="name text-gray-600 ">
            <label className='block'>Phone</label>
            <input className='py-2 px-4 w-full  rounded-md outline-none border border-gray-200 focus:border-amber-600 placeholder:text-gray-500 text-black' type="number" name="" id="" placeholder='Enter Your phone' />
          </div>
          <div className="name text-gray-600 ">
            <label className='block'>Email</label>
            <input className='py-2 px-4 w-full  rounded-md outline-none border border-gray-200 focus:border-amber-600 placeholder:text-gray-500 text-black' type="email" name="" id="" placeholder='Enter Your Email' />
          </div>
          <div className="name text-gray-600 ">
            <label className='block'>Pincode</label>
            <input className='py-2 px-4 w-full  rounded-md outline-none border border-gray-200 focus:border-amber-600 placeholder:text-gray-500 text-black' type="number" name="" id="" placeholder='Enter Your Pincode' />
          </div>
          <div className="name text-gray-600 col-span-2 ">
            <label className='block'>Address</label>
            <textarea className='py-2 px-4 w-full  rounded-md outline-none border border-gray-200 focus:border-amber-600 placeholder:text-gray-500 text-black' type="text" name="" id="" placeholder='Enter Your Address' />
          </div>
           <div className="name text-gray-600 ">
            <label className='block'>Country</label>
            <div className='py-2 px-4 w-full rounded-md bg-gray-200 outline-none border border-gray-200 focus:border-amber-600 placeholder:text-gray-500 text-black' type="text" >India</div>
          </div>
           <div className="name text-gray-600 ">
            <label className='block'>State</label>
            <input className='py-2 px-4 w-full rounded-md outline-none border border-gray-200 focus:border-amber-600 placeholder:text-gray-500 text-black' type="text" name="" id="" placeholder='Enter Your State' />
          </div>
           <div className="name text-gray-600 ">
            <label className='block'>City</label>
            <input className='py-2 px-4 w-full rounded-md outline-none border border-gray-200 focus:border-amber-600 placeholder:text-gray-500 text-black' type="text" name="" id="" placeholder='Enter Your City' />
          </div>

           <div className="btn mt-2 col-span-2">
                    <Link href={'/checkout'} className='rounded-md block text-center bg-[#de4c2b] py-2 px-10 text-white cursor-pointer '>Use this Address</Link>
                   </div>
        </form>
    
                   <div className="total m-10 bg-gray-100 p-6 h-40 rounded">
                    <h1 className='text-gray-800 font-bold text-xl'>Total Amount :  <span className='text-lg font-semibold'>₹ {129 * 1 }</span> </h1>
                    <hr className='mt-2 text-gray-200'/>
              

                     <div className="btn mt-5">
                    <Link href={'/checkout'} className='rounded-md block text-center  mt-2 bg-[#de4c2b] py-2 px-10 text-white cursor-pointer uppercase'>Place Order</Link>
                   </div>
                </div>
      </div>


      <Footer />
    </div>
  )
}

export default Address