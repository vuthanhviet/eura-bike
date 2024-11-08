import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const deliveryFee = 10;
    const backendURL = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const addToCart = async (itemID) => {
        
        let cartData = structuredClone(cartItems);
        if(cartData[itemID]){
            cartData[itemID] += 1
        }else{
            cartData[itemID] = {}
            cartData[itemID] = 1;
        }
        setCartItems(cartData)

        if (token) {
          try {
            await axios.post(backendURL + '/api/cart/add', {itemID}, {headers: {token}})
          } catch (error) {
            console.log(error)
            toast.error(error.message)
          }
        }
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            try {
              if (cartItems[items] > 0) {
                totalCount += cartItems[items];
              }
            } catch (error) {
          }
        }
        return totalCount;
      };

    const updateQuantity = async (itemID, quantity) => {
      let cartData = structuredClone(cartItems);
      cartData[itemID] = quantity;
      setCartItems(cartData)

      if (token) {
        try {
          await axios.post(backendURL + '/api/cart/update', {itemID, quantity}, {headers: {token}})
        } catch (error) {
          console.log(error)
            toast.error(error.message)
        }
      }
    }

    const getCartAmount = () => {
      let totalAmount = 0;
      for(const items in cartItems){
        let itemInfo = products.find((product) => product._id === items)
        try {
          if(cartItems[items] > 0){
            totalAmount += itemInfo.price * cartItems[items]
          }
        } catch (error) {
          
        }
      }
      return totalAmount;
    }

    const getProductsData = async () => {
      try {
        const response = await axios.get(backendURL + '/api/product/list');
        if(response.data){
          setProducts(response.data.products)
        }else{
          toast.error(response.data.message)
        }
      } catch (error) {
        console.log(error)
      }
    }

    const value = {
        products, currency, deliveryFee,
        search, setSearch, showSearch, setShowSearch, 
        cartItems, addToCart, getCartCount, updateQuantity, setCartItems,
        getCartAmount, navigate, backendURL, setToken, token
    }

    const getUserCart = async (token) => {
      try {
        const response = await axios.post(backendURL + '/api/cart/get', {}, {headers:{token}})
        if (response.data.success) {
          setCartItems(response.data.cartData)
        }
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }

    useEffect(() => {
      getProductsData()
    },[])

    useEffect(() => {
      if(!token && localStorage.getItem('token')){
        setToken(localStorage.getItem('token'))
        getUserCart(localStorage.getItem('token'))
      }
    },[])

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;