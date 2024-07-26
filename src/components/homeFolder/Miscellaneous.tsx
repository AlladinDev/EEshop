import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { GridProductView } from "../common/ProductGridView"
import Loading from "../common/Loading"
import ApiError from "../common/ApiError"
import { useNavigate } from "react-router-dom"
import GetProductId from "../common/GetProductId"
const Miscellaneous: React.FC = () => {
    const navigate=useNavigate()
    const { products, loading, apiError } = useSelector((state: RootState) => state.productStore)
    const handleViewMore = (e: React.MouseEvent): void => {//function for handling if someone clicks viewmore
        e.stopPropagation()
        navigate(`/info/${null}/${'miscellaneous'}`)
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
        navigate(`/info/${id}/${'miscellaneous'}`)
    }
    return (
        <div className="bg-white w-auto md:w-[50%] mx-1 my-2 p-4 rounded-lg shadow-md">
            {apiError ? (
                <ApiError />
            ) : loading ? (
                <Loading />
            ) : products.miscellaneous.length !== 0 && (
                <div className='flex cursor-pointer '>
                    <div className=' ' onClick={handleClick}>
                        <GridProductView products={products.miscellaneous.slice(0, 4)}
                            gridConfiguration="grid-cols-2 gap-2 grid-rows-2"
                            heading='Miscellanoeus '
                            SideIcon={<div onClick={handleViewMore} className='bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600'>View More {'>'}</div>} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Miscellaneous
