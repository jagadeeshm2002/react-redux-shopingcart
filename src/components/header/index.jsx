import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <div>
            <nav className='flex items-center justify-between h-20  max-w-full xl:mx-40 mx-20 border-b-2'>
                <Link to={'/'}>
                    <div className='ml-5 '>
                        <h1 className='text-red-900 font-bold  text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide   '>
                            Shopping cart
                        </h1>
                    </div>
                </Link>
                <ul className='flex list-none items-center space-x-6 text-gray-800 font-semibold'>
                    <Link to={'/'}><li className=' cursor-pointer'>Home</li></Link>
                    <Link to={'/cart'}><li className=' cursor-pointer'>Cart</li></Link>
                </ul>
            </nav>
        </div>
    )
}
 