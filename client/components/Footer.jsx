import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { FaThreads, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='bg-black  pt-15 pb-5 px-20 text-white'>

            <div className="upper flex justify-around">
                <div className="social-media">
                    <h1 className='text-xl font-bold mb-2'>SOCIAL MEDIA</h1>
                    <ul className="flex flex-col gap-2 text-white/60">
                        <li>
                            <Link
                                href="https://youtube.com"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-primary"
                            >
                                <FaYoutube /> YouTube: 60.5 Million+ subscribers
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-primary"
                            >
                                <FaFacebook /> Facebook: 13.3 Million+ followers
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-primary"
                            >
                                <FaInstagram /> Instagram: 13.2 Million+ followers
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="https://x.com"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-primary"
                            >
                                <FaXTwitter /> X (Twitter): 1.2 Million+ followers
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="https://whatsapp.com/channel"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-primary"
                            >
                                <FaWhatsapp /> WhatsApp Channel: 575K+ followers
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="https://threads.net"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-primary"
                            >
                                <FaThreads /> Threads: 1.4 Million+ followers
                            </Link>
                        </li>
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

            <hr className='mt-10 text-gray-600' />

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