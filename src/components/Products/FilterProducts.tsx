import { FaFilter } from "react-icons/fa";
import { useState, useEffect } from "react";
interface Products {
    id: string;
    title: string;
    price: number;
    description: string,
    images: string[]; // URL to the product image 
}
interface FilterProducts {
    products: Products[],
    setPricehandler: (
        { }
    ) => void
}
const FilterProducts: React.FC<FilterProducts> = ({ products, setPricehandler }: FilterProducts) => {

    const [pricePreference, setPricePreference] = useState({
        min: 0,
        max: 0,
        exactPrice: 0
    })
    const [availPrice, setAvailPrice] = useState({
        min: 0,
        max: 0
    })
    const handlePriceFilterOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectBox = e.target
        const value = Number(selectBox.value)
        console.log(value)
        setPricePreference({ ...pricePreference, [selectBox.name]: value })
        setPricehandler({ ...pricePreference, exactPrice: '', [selectBox.name]: value })
    }
    const handlePriceRangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        const value = Number(e.target.value)
        setPricePreference({ min: 0, max: 0, exactPrice: value })
        setPricehandler({ min: 0, max: 0, exactPrice: value })
        console.log(pricePreference)
    }
    useEffect(() => {
        const prices = products.map((item) => item.price)
        console.log('prices are', prices)
        const minPrice = Math.min(...prices)
        const maxPrice = Math.max(...prices)
        console.log('maxprice is', maxPrice)
        setAvailPrice({ min: minPrice, max: maxPrice })
    }, [products])
    return (
        <div className="my-5 rounded-md">
            <div className="dropdown dropdown-bottom  sm:dropdown-right">
                <div tabIndex={0} role="button" className="btn m-1">
                    <div className="flex justify-evenly rounded-md items-center bg-white shadow-md shadow-black px-2 text-2xl">
                        <span className="px-6 py-3  ">Filter</span>
                        <span><FaFilter /></span>
                    </div>
                </div>
                <ul className="dropdown-content  mx-4 sm:m-0 my-2 menu bg-base-100  z-[1] min-w-52 p-9 shadow min-h-[60vh] ">
                    {/* Category filter */}
                    {availPrice.min != 0 ? <div className=''>
                        <div>
                            <h2 className="font-bold">Price Range</h2>
                            <input type="range" min={availPrice.min} onChange={handlePriceRangeInput} value={pricePreference.exactPrice} max={availPrice.max} className="w-full" />
                            {

                            }
                        </div>
                        <div className="shadow-sm shadow-gray-500 flex justify-center p-2 gap-2 items-center ">
                            <select name="min" id="" onChange={handlePriceFilterOption} value={pricePreference.min} className="[&>*]:my-8 [&>*]:p-3 p-2 flex justify-center items-center font-semibold " >
                                <option value="">Greater than</option>
                                <option value="">No Filter</option>
                                {
                                    [...Array(6)].map((item, i) => (
                                        availPrice.min + (100 * i) < availPrice.max ? <option value={availPrice.min + (100 * i)} className="">Rs:{availPrice.min + (100 * i)}</option> : null
                                    ))
                                }
                            </select>
                            <span>To</span>
                            <select onChange={handlePriceFilterOption} value={pricePreference.max} name="max" id="" className="[&>*]:my-8 [&>*]:p-3 p-2 flex justify-center items-center font-semibold " >
                                <option value="">Less Than</option>
                                <option value="">No Filter</option>
                                {
                                    [...Array(13)].map((item, i) => (
                                        availPrice.min + (300 * i) < availPrice.max ? <option value={availPrice.min + (300 * i)} className="">Rs:{availPrice.min + (300 * i)}</option> : null
                                    ))
                                }
                            </select>

                        </div>
                    </div> : null}

                </ul>

            </div>

        </div>
    )
}
export default FilterProducts