import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black  pt-15 pb-5 px-20 text-white'>

            <div className="upper flex justify-around">
                <div className="social-media">
                    <h1 className='text-xl font-bold mb-2'>SOCIAL MEDIA</h1>
                    <ul className='flex flex-col gap-2 text-white/60 '>
                        <li>YouTube: 60.5 Million+ subscribers</li>
                        <li>Facebook: 13.3 Million+ followers</li>
                        <li>Instagram: 13.2 Million+ followers</li>
                        <li>X (Twitter): 1.2 Million+ followers</li>
                        <li>WhatsApp Channel: 575K+ followers</li>
                        <li>Threads: 1.4 Million+ followers</li>
                    </ul>
                </div>

                <div className="getupdates">
                    <h1 className='text-xl font-bold mb-2'>GET UPDATES</h1>

                    <p className='text-sm text-white/60'>Receive handpicked articles, quotes <br /> and videos of Acharya Prashant <br /> regularly.
                    </p>

                </div>

                <div className="subscribe">
                    <div className="email">
                        <input className='py-2 px-4 w-full rounded-md outline-none bg-[#e6e6e6] placeholder:text-gray-500 text-black' type="text" name="" id="" placeholder='Your Email Adress' />
                        <button className='rounded-md w-full mt-5 bg-amber-700 py-2 px-10'>Subscribe</button>
                    </div>
                </div>
            </div>

            <hr className='mt-10' />

            <div className="copyright flex justify-center gap-20 mt-5">
                <span className='text-sm text-gray-400'>Copyright © 2026 PrashantAdvait Foundation</span>
                
                <div className="links text-sm text-gray-400">

                    <Link className='hover:text-primary' href={"/"}>Terms & Conditions </Link>
|
                <Link className='hover:text-primary' href={"/"}>  Privacy Policy </Link>
| 
                 <Link className='hover:text-primary' href={"/"}> Undertaking</Link>
                </div>
            </div>

        </div>

    )
}

export default Footer