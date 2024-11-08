import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { backendUrl } from '../App'
const ListCategory = ({token}) => {
    const [list, setList] = useState([])

    const fetchList = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/category/list')
            if(response.data.success){
                setList(response.data.categories);
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const removeCategory = async (id) => {
        try {
            const response = await axios.post(backendUrl + '/api/category/remove', {id}, {headers:{token}})
            if(response.data.success){
                toast.success(response.data.message)
                await fetchList()
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }
    useEffect(() => {
        fetchList()
    }, [])

  return (
    <>
    <p className='mb-2'>All Categories List</p>
    <div className='flex flex-col gap-2'>
        {/* List Table Title */}
        <div className='hidden md:grid grid-cols-[1fr_3fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
            <b>Name</b>
            <b className='text-center'>Action</b>
        </div>
        {/* Products List*/}
        {
            list.map((item, index) => (
                <div className='grid grid-cols-[1fr_3fr] md:grid-cols-[1fr_3fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
                    <p>{item.name}</p>
                    <p onClick={() => removeCategory(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
                </div>
            ))
        }
    </div>
</>
  )
}

export default ListCategory