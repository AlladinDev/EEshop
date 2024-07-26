
import ProductSlider from '../common/ProductSlider';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import Loading from '../common/Loading';
import ApiError from '../common/ApiError';
import GetProductId from '../common/GetProductId';
const Clothes: React.FC = () => {
  const navigate = useNavigate()
  const handleViewMore = (e: React.MouseEvent): void => {//function for handling if someone clicks viewmore
    e.stopPropagation()
    navigate(`/info/${null}/${'clothes'}`)
  }
  const handleClick = (e: React.MouseEvent): void => {//function for handling if someone clicks particular item
    e.stopPropagation()
    const { id, NoElementFound } = GetProductId(e)
    if (NoElementFound)
      return
    if (!id)
      return
    navigate(`/info/${id}/${'clothes'}`)
  }
  const { products, loading, apiError } = useSelector((state: RootState) => state.productStore)
  return (
    <div className="bg-white w-auto mx-2 my-8 p-4 rounded-lg shadow-md">
      {apiError ? (
        <ApiError />
      ) : loading ? (
        <Loading />
      ) : products.clothes.length !== 0 && (
        <>
          <div className=" flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold ">Best of Clothing</h2>
            <button onClick={handleViewMore} className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600" >
              View More {'>'}
            </button>
          </div>
          <div style={{ scrollbarWidth: 'none' }} className='overflow-x-auto' onClick={handleClick}>
            <ProductSlider products={products.clothes.slice(0,8)} />
          </div>
        </>
      )}
    </div>
  );
};

export default Clothes
