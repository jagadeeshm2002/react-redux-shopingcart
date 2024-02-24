import React from 'react';
import {  removeToCart } from "../../store/slices/cart-slice";
import { useDispatch } from 'react-redux';

export default function CartTile({cartItem}) {
    const dispatch = useDispatch();


    function handleRemoveCart() {
        dispatch(removeToCart(cartItem.id));
        console.log("removed");
    }
  return (
    <div className='flex w-72 flex-col p-4 drop-shadow-gray-300 shadow-xl hover:shadow-2xl border rounded-md'>
            <div className='w-64 border border-gray-200 h-56 p-1 rounded-lg object-contain'>
                <img className='object-contain w-64 h-52 object-center' src={cartItem?.image} alt="backbag" />
            </div>
            <div className='flex flex-col gap-1 mt-2 justify-between h-full '>
                <div className='flex flex-col    '>

                    <p className='font-semibold text-gray-950'>{cartItem?.title}</p>
                    <p className='bg-yellow-400 rounded p-0.5 px-1 w-20'>
                        <span className='font-bold text-md pl-0.5'>$</span>
                        <span className='pl-1 font-mono'>{cartItem?.price}</span>
                    </p>
                </div>
                <div className='flex  align-center w-full mt-2 self-end'>
                    <button onClick={handleRemoveCart} className='bg-blue-800 w-full text-white p-2 rounded-lg font-semibold hover:bg-blue-600 active:shadow-sm active:shadow-slate-800 active:drop-shadow-sm'>
                        Remove from cart</button>
                </div>
            </div>
        </div>
  )
}
