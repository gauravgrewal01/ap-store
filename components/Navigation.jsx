
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    const nav = [
  { id:"1", name: "Explore", href: "/explore" },
  { id:"2", name: "All Books", href: "/books" },
  { id:"3", name: "Combo Books", href: "/combo-books" },
  { id:"4", name: "Global Publisher", href: "/global-publisher" },
  { id:"5", name: "Kids", href: "/kids" },
  { id:"6", name: "Offers", href: "/offers" },
  { id:"7", name: "Contact Us", href: "/contact-us" },
];
    return (
        <div className='flex items-center justify-center mt-5'>
            <div className="w-[60vw] flex items-center justify-around text-sm ">
                {nav.map((items)=>(
                    <Link className='hover:text-primary' key={items.id} href={items.href}>{items.name}</Link>
                ))}
            </div>
        </div>
    )
}

export default Navigation