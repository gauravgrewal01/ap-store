
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    const nav = [
          { id:"1", name: "Home", href: "/home" },
  { id:"2", name: "Explore", href: "/explore" },
  { id:"3", name: "All Books", href: "/books" },
  { id:"4", name: "Combo Books", href: "/combo-books" },
  { id:"5", name: "Global Publisher", href: "/global-publisher" },
  { id:"6", name: "Kids", href: "/kids" },
  { id:"7", name: "Offers", href: "/offers" },
  { id:"8", name: "Contact Us", href: "/contact-us" },
];
    return (
        <div className='flex items-center justify-center py-5'>
            <div className="w-[60vw] flex items-center justify-around text-sm ">
                {nav.map((items)=>(
                    <Link className='hover:text-primary' key={items.id} href={items.href}>{items.name}</Link>
                ))}
            </div>
        </div>
    )
}

export default Navigation