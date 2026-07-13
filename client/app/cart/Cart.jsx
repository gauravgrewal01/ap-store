
import CartDetail from '@/components/ui/CartDetail'
import Link from 'next/link'

const Cart = () => {

    return (
        <div className='grid grid-cols-3 '>
            <div className='col-span-2 grid grid-cols-2 py-5 px-10'>
                <CartDetail />
                <CartDetail />
                <CartDetail />
                <CartDetail />
                <CartDetail />
            </div>
            <div className=' col-span-1 p-10 '>

                <div className="total bg-gray-100 p-6  rounded">
                    <h1 className='text-gray-800 font-bold text-xl'>Cart</h1>
                     <div className="total mt-2 flex justify-between items-center text-sm text-gray-600">
                        <p>( Paperback * 2 )</p>
                        <p className='text-lg '>₹ {129 * 1 }</p>
                    </div>
                    <hr className='mt-2 text-gray-200'/>
                    <div className="total mt-2 flex justify-between items-center text-sm font-semibold text-gray-600">
                        <p>Total Amount :</p>
                        <p className='text-lg font-semibold'>₹ {129 * 1 }</p>
                    </div>

                     <div className="btn mt-5">
                    <Link href={'/checkout'} className='rounded-md block text-center  mt-2 bg-[#de4c2b] py-2 px-10 text-white cursor-pointer uppercase'>Proceed to Payment</Link>
                   </div>
                </div>

            </div>
        </div>
    )
}

export default Cart