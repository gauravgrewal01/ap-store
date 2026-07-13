"use client"
import Donate from '@/components/Donate'
import Footer from '@/components/Footer'
import { Copy, Globe, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaCopy, FaFacebook, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaX } from 'react-icons/fa6'

const ProductDetail = () => {

    const [qnt, setQnt] = useState(1);

    return (
        <div>
        <div className='grid grid-cols-3'>
            <div className=' flex  justify-center'>
                <div className="image-container px-30 py-20">
                    <Image src={"/books/book1.jpg"} alt='book1' height={679} width={480} className='rounded-md' ></Image>
                </div>
            </div>

            <div className=' p-10'>
                <h1 className='text-xl font-bold '>जानदार व्यक्तित्व | Jaandaar Vyaktitva</h1>
                <p className='text-sm'>नया मन, नया जीवन</p>
                <div className='stars flex mt-2'>
                    <Star fill='#FDCC0D' color="#FDCC0D" size={24} />
                    <Star fill='#FDCC0D' color="#FDCC0D" size={24} />
                    <Star fill='#FDCC0D' color="#FDCC0D" size={24} />
                    <Star fill='#FDCC0D' color="#FDCC0D" size={24} />
                    <Star fill='#FDCC0D' color="#FDCC0D" size={24} />
                </div>

                <hr className='mt-5 text-gray-400' />

                <div className=' mt-5 '>
                    <h2 className='text-gray-600'>PaperBack Details</h2>

                    <div className='flex items-center gap-5 mt-5 text-center text-gray-600'>
                        <div className='bg-[#f1f1f1] p-4 rounded text-xs'>
                            <span className='block text-sm'>Hindi</span>
                            <span>Language</span>
                        </div>
                        <div className='bg-[#f1f1f1] p-4 rounded text-xs'>
                            <span className='block text-sm'>244</span>
                            <span>Print Length</span>
                        </div>
                    </div>
                </div>

                <hr className='mt-5 text-gray-400' />


                <div className=' mt-5 '>
                    <h2 className='text-gray-600'>Description</h2>
                    <p className='text-sm text-gray-600 mt-5'>आत्म-जिज्ञासा के अभाव में मनुष्य अपना सबसे कीमती संसाधन, अपना जीवन ही खोता चलता है। चिन्ता कर-करके कुछ हासिल भी कर लिया तो ये कभी नहीं समझ पाता कि जो हासिल किया उसकी कीमत क्या, और वह हासिल करने के लिए जो गँवाया, उसकी कीमत क्या! यही कारण है कि सनातन धर्म के प्रमुख ग्रंथों में आत्म-जिज्ञासा को सबसे ऊँचा स्थान दिया गया है। <br /> <br />

                        जिसे हम सनातन धर्म कहते हैं वह वेदों में अभिव्यक्त होता है, और वेदों के उत्कृष्ट शिखर को ही वेदान्त कहा जाता है। वेदों के ज्ञानकाण्ड के अंतर्गत आता है वेदान्त, जिसमें मात्र आत्म-जिज्ञासा को प्रधानता दी गयी है। प्रश्नों की एक लम्बी श्रृंखला वेदान्त में आकर अंतर्मुखी हो जाती है। और यह कहना गलत नहीं होगा कि उपनिषद् ही वेदान्त हैं, वेदों का शिखर हैं।  <br /> <br />

                        इस पुस्तक के माध्यम से आचार्य प्रशांत वेदान्त के मूल सिद्धांतों को समझाते हैं और प्रमुख उपनिषद् सूत्रों में छुपे गूढ़ रहस्यों को सरलता के साथ उजागर करते हैं। यह पुस्तक एक भेंट है उनके लिए जो अपनी आध्यात्मिक यात्रा में थोड़ा आगे बढ़ चुके हैं, साथ-ही-साथ उनके लिए भी जिन्होंने अपनी यात्रा बस अभी शुरू ही की है।</p>
                </div>
            </div>

            <div className='p-10'>

                <div className='bg-gray-100 rounded p-6'>
                    <div className='bg-white p-3 rounded border border-gray-200'>
                          <h2 className='text-sm text-gray-600'>Paperback</h2>
                    <p className='text-xl'>₹129</p>

                   
                    </div>

                         <div className='flex justify-between text-gray-600 mt-5 items-center '>
                            <h1>Quantity</h1>
                            <div className="counter flex bg-white rounded">
                                <button onClick={()=>{setQnt(qnt > 1 ? qnt - 1 : 1)}} className={`py-2 px-4 border-r border-gray-200 text-xl ${qnt <=1 ? ' text-gray-300' : 'hover:bg-[#de4c2b] hover:text-white cursor-pointer'} rounded`} >-</button>
                                <p className='p-2 px-4'>{qnt}</p>
                                <button onClick={()=>{setQnt(qnt+1)}}  className='py-2 px-4 border-l border-gray-200 text-xl hover:bg-[#de4c2b] hover:text-white rounded text-[#de4c2b] cursor-pointer'>+</button>
                            </div>
                        </div>

                    <div className="total mt-5 flex justify-between items-center text-xs text-gray-600">
                        <p>Total ( Paperback * {qnt} )</p>
                        <p className='text-lg font-semibold'>₹ {129 * qnt }</p>
                    </div>

                   <div className="btn mt-5">
                     <Link href={'/cart'} className='block text-center rounded-md w-full mt-2 border border-[#de4c2b] py-2 px-10 text-[#de4c2b] cursor-pointer'>Add to Cart</Link>
                    <Link href={'/cart'} className=' block text-center rounded-md w-full mt-2 bg-[#de4c2b] py-2 px-10 text-white cursor-pointer'>Buy Now</Link>
                   </div>

                </div>

                <div className='social p-6 text-center '>
                    <h1 className='text-gray-400 '>Share this book</h1>
                    <div className='icons flex gap-2 items-center justify-center mt-2'>
                        <Link className='rounded-full text-gray-600  border border-gray-600 w-9 h-9 flex items-center justify-center hover:bg-gray-100' href={"/"}><FaWhatsapp /></Link>
                        <Link className='rounded-full text-gray-600 border border-gray-600 w-9 h-9 flex items-center justify-center hover:bg-gray-100' href={"/"}><FaFacebook /></Link>
                        <Link className='rounded-full text-gray-600 border border-gray-600 w-9 h-9 flex items-center justify-center hover:bg-gray-100' href={"/"}>< FaX /></Link>
                        <Link className='rounded-full text-gray-600 border border-gray-600 w-9 h-9 flex items-center justify-center hover:bg-gray-100' href={"/"}>< FaLinkedinIn/></Link>
                        <Link className='rounded-full text-gray-600 border border-gray-600 w-9 h-9 flex items-center justify-center hover:bg-gray-100' href={"/"}>< FaCopy /></Link>

                    </div>      
                </div>
            </div>
</div>

<Donate />
<Footer />
        </div>
    )
}

export default ProductDetail