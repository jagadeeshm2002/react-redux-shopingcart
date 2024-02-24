
import React, { useEffect, useState } from 'react';
import ProductCart from '../components/productcart';
import { Circles } from 'react-loader-spinner';


export default function Home() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchListOfProducts() {
        try {
            setLoading(true);

            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();

            if (data && data.length > 0) {
                setProducts(data);
                setLoading(false);
                console.log(data)
                setError(null)

            }
        } catch (error) {
            setError(error)
            console.log(error);
            setLoading(false);
        }
    }



    useEffect(() => {
        fetchListOfProducts()
    }, [])

    // if (loading) return <div className='flex items-center justify-center  text-gray-800 font-bold text-4xl mt-40 '><h1>products are loading...</h1></div>

    if (error) return <div className='flex items-center justify-center  text-gray-800 font-bold text-4xl mt-40 '><h1>Error occured. {error.message}</h1></div>

    return (
        <div className='flex  mx-20 xl:mx-32 my-20 justify-center items-center '>
            {loading?<div className='min-h-screen w-full flex justify-center items-center'><Circles height={'150'} width={'120'} color="#61d7fb9c" visible={true}/></div>: 
            <div className='grid  grid-flow-row gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 '>
                {products && products.length >0 ? products.map((product)=> <ProductCart item={product} key={product.id}/>):null}
            </div>}
        </div>
    )

}
