import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
const AddCategory = ({token}) => {
    const [name, setName] = useState('')
    
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(backendUrl + "/api/category/add", {"name": name}, {headers:{token}})
            if(response.data.success){
                toast.success(response.data.message)
                setName('')
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
        <div className='w-full '>
            <p className='mb-2'>Category Name</p>
            <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
        </div>
        <button type='submit' className='w-32 py-3  mt-4 bg-black text-white'>Add Category</button>
    </form>
  )
}

export default AddCategory