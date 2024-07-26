import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { GridProductView } from "../common/ProductGridView"
import ApiError from "../common/ApiError"
import Loading from "../common/Loading"
import GetProductId from "../common/GetProductId"
import { useNavigate } from "react-router-dom"
const Electronics: React.FC = () => {
    const navigate = useNavigate()
    const { products, loading, apiError } = useSelector((state: RootState) => state.productStore)
    const handleViewMore = (e: React.MouseEvent): void => {//function for handling if someone clicks viewmore
        e.stopPropagation()
        navigate(`/info/${null}/${'electronics'}`)
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
        navigate(`/info/${id}/${'electronics'}`)
    }
    return (
        <div className="bg-white w-auto md:w-[50%] mx-2 my-2 p-4 rounded-lg shadow-md">
            {apiError ? (
                <ApiError/>
            ) : loading ? (
                <Loading/>
            ) : products.electronics.length !== 0 && (
                <div className='flex'>
                    <div className='cursor-pointer' onClick={handleClick}>
                        <GridProductView products={products.electronics.slice(0, 4)}
                            gridConfiguration="grid-cols-2 gap-2 grid-rows-2"
                            heading='Best Of Electronics'
                            SideIcon={<div className='bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600' onClick={handleViewMore}>View More {'>'}</div>} />
                    </div>

                </div>
            )}
        </div>
    )
}

export default Electronics
