import React from 'react'
import { Search } from 'lucide-react'

const Input = () => {
  return (
      <div className='bg-[#e6e6e6] w-150 rounded-md px-3 py-2 flex items-center justify-center text-sm'>
        <Search size={16}/>
        <input className='w-full outline-none px-3' placeholder='Search books' type="text" name="search" id="search" />
    </div>
  )
}

export default Input