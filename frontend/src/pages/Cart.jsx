import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import CartTotal from '../components/CartTotal';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext'

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext); 
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for(const items in cartItems){
          if(cartItems[items] > 0){
            tempData.push({
              _id: items,
              quantity: cartItems[items]
            })
          }   
      }
    setCartData(tempData)
    }

    
  }, [cartItems,products])
  return (
    <div className='border-t pt-14 px-14'>
        <div className='text-2xl mb-3'><Title text={'YOUR CART'} /></div>
        <div>
          {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols[4fr_2fr_0.5fr] items-center gap-4'>
                <div className=' flex items-start gap-6'>
                  <img src={productData.image[0]} alt="" className='w-16 sm:w-20' />
                  <div>
                    <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center mt-2'>
                      <p>{productData.price}{currency}</p>
                    </div>
                  </div>
                </div> 
                <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 ' type="number" min={1} defaultValue={item.quantity} />
                <i onClick={() => updateQuantity(item._id, 0)} className="fa-solid fa-trash-can text-xl cursor-pointer"></i> 
              </div>
            )
          })
          }
        </div>
      
          <div className='flex justify-end my-20'>
            <div className='w-full sm:w-[450px]'>
              <CartTotal />
              <div className='w-full text-end'>
                <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Cart