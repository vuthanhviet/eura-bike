import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const NewProducts = () => {
    const { products } = useContext(ShopContext);
    const [newProducts, setNewProducts] = useState([]);

    useEffect(() => {
        setNewProducts(products.slice(0,4))
    }, [products])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text={'New Products in 2024'}/>
            <p className='w-2/3 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Welcome to Eura, where your cycling journey begins! As avid cyclists ourselves, we understand the joy and freedom that comes from pedaling on two wheels</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 gap-y-6">
          {
            newProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
        </div>
    </div>
  )
}

export default NewProducts