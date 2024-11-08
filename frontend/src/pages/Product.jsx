import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import RelatedProducts from '../components/RelatedProducts';
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false); 
  const [image, setImage] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if(item._id === productId ){
        setProductData(item);
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/*Product Images*/}
            <div className='flex-1 flex-row gap-3 sm:ps-[100px]'>
              <div className='w-full sm:w-[80%] mb-3'>
                  <img src={image} alt="" className='w-full h-auto' />
              </div>
              <div className='flex flex-row orverflow-x-auto gap-2 justify-between sm:w-[15.7%] w-full'>
                {
                  productData.image.map((item, index) => (
                    <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
                  ))
                }
              </div>
            </div>

            {/* Product Info */}
            <div className='flex-1'>
                <h1 className='font-medium text-2xl mt-2 '>{productData.name}</h1>
                <div className='flex items-center gap-1 mt-2'>
                  <i className="fa-solid fa-star" style={{color: "#FFD43B",}} />
                  <i className="fa-solid fa-star" style={{color: "#FFD43B",}} />
                  <i className="fa-solid fa-star" style={{color: "#FFD43B",}} />
                  <i className="fa-solid fa-star" style={{color: "#FFD43B",}} />
                  <i className="fa-regular fa-star" style={{color: "#FFD43B",}} />
                  <p className='pl-2'>(50)</p>
                </div>
                <p className='mt-5 text-gray-500 '>Category: {productData.category}</p>
                <p className='mt-5 text-3xl font-bold text-orange-400'>{productData.price}{currency}</p>
                <p className='mt-5 text-gray-500 w-4/5 text-sm my-8'>{productData.description}</p>
                <button onClick={() => addToCart(productData._id)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
            </div>
        </div>
        {/* Description */}
        <div className='mt-20'>
          <div className='flex'>
            <b className='border px-5 py-3 text-sm'>Description</b>
          </div>
          <div className='flex flex-col gap-4 border p-6 text-sm text-gray-500'>
                <p>{productData.description}</p>
          </div>
        </div>
        <RelatedProducts category={productData.category} />
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product