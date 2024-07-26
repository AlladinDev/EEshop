import React from 'react'
import { Advertisement } from '../common/Advertisement'
import { GridProductView } from '../common/ProductGridView'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Loading from '../common/Loading'
import ApiError from '../common/ApiError'
import GetProductId from '../common/GetProductId'
import { useNavigate } from 'react-router-dom'
const Furniture: React.FC = () => {
    const navigate= useNavigate()
    const { products, loading, apiError } = useSelector((state: RootState) => state.productStore)
    console.log('furniture is', products.furniture)
    const handleViewMore = (e: React.MouseEvent): void => {//function for handling if someone clicks viewmore
        e.stopPropagation()
        navigate(`/info/${null}/${'furniture'}`)
    }
    const handleClick = (e: React.MouseEvent): void => {//function for handling if someone clicks particular item
        console.log(e)
        const { id, NoElementFound } = GetProductId(e)
        e.stopPropagation()
        console.log(id, NoElementFound)
        if (NoElementFound)
            return
        if (!id)
            return
        navigate(`/info/${id}/${'furniture'}`)
    }
    //const productArray=(Object.values(products[2]).splice(0,2)) as {title:string,description:string,images:string[],price:number}[]
    return (
        <div className=' w-auto mx-2 my-2  rounded-lg '>
            {loading ?
                (
                    <Loading />
                ) : apiError ?
                    (
                        <ApiError />
                    ) : products.furniture.length &&
                    <div className='flex flex-col md:flex-row gap-2 cursor-pointer' onClick={handleClick}>
                        <div className='w-full bg-white md:w-[40%] rounded-md shadow-md'>
                            <GridProductView products={products.furniture.slice(0, 2)}
                                heading='Best Of Furniture'
                                gridConfiguration='grid-cols-1 gap-2 p-2 md:grid-cols-2'
                                SideIcon={<div  onClick={handleViewMore} className='bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600'>View More {'>'}</div>} />
                        </div>
                        <div className='w-full shadow-md md:w-[60%] border bg-white flex justify-center items-center p-2'> <Advertisement /></div>
                    </div>
            }
        </div>
    )
}
export default Furniture