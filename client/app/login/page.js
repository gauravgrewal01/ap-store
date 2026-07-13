import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded p-10'>
            <h1 className='text-xl font-bold text-gray-800 text-center'>  Login </h1>
                <form className='mt-5'>
                    <div className="name text-gray-600 ">
                        <label className='block'>Email</label>
                        <input className='py-2 px-4 w-full rounded-md outline-none border border-gray-200 focus:border-amber-600 placeholder:text-gray-500 text-black' type="email" name="" id="" placeholder='Enter Your Email' />
                    </div>
                    <div className="name text-gray-600 mt-2">
                        <label className='block'>Password</label>
                        <input className='py-2 px-4 w-full rounded-md outline-none border border-gray-200 focus:border-amber-600 placeholder:text-gray-500 text-black' type="password" name="" id="" placeholder='Enter Your Password' />
                    </div>
                    <div className="btn mt-5">
                        <Link type='submit' href={'/'} className='rounded-md block text-center  mt-2 bg-[#de4c2b] py-2 px-10 text-white cursor-pointer '>Login</Link>
                    </div>
                </form>

                <p className='mt-5 text-gray-600 text-sm'>New user? <Link className='underline' href={"/signup"}> Create account </Link></p>
            </div>
        </div>
    )
}

export default Login