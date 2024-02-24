

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartTile from '../components/cart-tile';

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector(state => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2));
  }, [cart]);
  console.log(cart, totalCart);
  return (
    <>
      {
        cart && cart.length ? (
          <>
            <div className='min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto '>
              <div className='flex flex-col  justify-center items-center p-3 gap-10 '>
                {
                  cart.map(cartItem => <CartTile cartItem={cartItem} />)
                }
              </div>
              <div>
              <div className='flex flex-col justify-center items-end p-5 space-y-5 mt-14 '>
                <h1 className='font-bold text-lg text-red-800'>
                  Your Cart Summary
                </h1>
                <p >
                  <span className='font-bold text-gray-800 '>Total Item</span>
                  <span>: {cart.length}</span>
                </p>
                <p>
                  <span className='font-bold text-gray-800 '>Total Amount</span>
                  <span>: ${totalCart}</span>
                </p>
              </div>
            </div>

            </div>
            
          </>
        )
          :
          (<div className='min-h-[80vh] flex flex-col items-center justify-center'>
            <h1 className='text-gray-800 font-bold text-xl mb-2'>Your cart is empty</h1>
            <Link to={'/'}><button className='bg-blue-800 w-full text-white p-2 rounded-lg font-semibold hover:bg-blue-600 active:shadow-sm active:shadow-slate-800 active:drop-shadow-sm'>SHOP NOW</button></Link>
          </div>)
      }
    </>
  );
}
