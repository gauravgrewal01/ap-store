import Link from 'next/link'
import React from 'react'

const Donate = () => {
  return (
    <div className='w-full my-15 flex  justify-center'>
        <div className="bg-slate-950 text-white w-250 p-6 rounded-xl flex justify-around">
            <div className="text">
                    <h1 className='text-2xl font-semibold'>Have you benefited from Acharya Prashant's teachings?</h1>
            <p className='text-gray-400 text-sm'>Only through your contribution will this mission move forward.</p>

            </div>
            <Link href={"/donate"} className='flex items-center bg-amber-200 rounded-xl px-10 py-2 text-black font-semibold'>Donate Now</Link>
        </div>
    </div>
  )
}

export default Donate