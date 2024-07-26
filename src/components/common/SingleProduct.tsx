import { MdShoppingCart } from "react-icons/md"
import Rating from "./Rating"
import { FaHeart, FaQuestion, FaShareAlt } from "react-icons/fa";
interface Product {
    selectedProduct: {
        id: string;
        title: string;
        price: number;
        description: string,
        images: string[];
    }
    // URL to the product image
}
const SingleProduct: React.FC<Product> = ({ selectedProduct }) => {
    console.log('selected product is', selectedProduct)
    return (selectedProduct ? <div>
        <div className='p-3  flex flex-col lg:flex-row justify-center items-center'>
            <div className='w-full md:w-[50%] '>{/* left div for showing selected product image*/}
                <img className='rounded-md shadow-sm shadow-black max-h-[500px] size-full'
                    src={selectedProduct.images[0].split('"')[1]}
                    alt="Shoes" />
            </div>
            <div className='w-full gap-3 md:w-[50%] flex justify-center items-center flex-col'> {/*right div for showing selected product info*/}
                <div className='flex p-3 gap-2 justify-center items-center'>{/*for showing product review count and star */}
                    <h2><Rating /></h2>
                    <h2 className='text-green-400 font-bold'>45k positive reviews</h2>
                </div>
                <h2 className='font-bold'>At just Rs:$ {selectedProduct.price * 7}</h2>
                <div className='text-center p-2'>{/** product description*/}
                    <p>{selectedProduct.description}</p>
                </div>
                <div className='flex cursor-pointer justify-center items-center p-6 flex-col'>
                    <div></div>
                    <div>
                        <div className='flex justify-center items-center gap-3 flex-col md:flex-row'>
                            <div className="flex justify-evenly items-center"><MdShoppingCart size={67} /> <button className='btn px-12 rounded-full bg-custom-btn text-white'>Add To cart</button></div>
                            <button className='btn  px-12 rounded-full bg-custom-btn text-white'>Buy Now</button>
                        </div>
                    </div>
                    <div className='p-2  mt-6 flex justify-start items-center gap-5'>
                        <div className='flex justify-center items-center gap-2'><FaHeart /> <span>Wishlist</span></div>
                        <div className='flex justify-center items-center gap-2'><span><FaShareAlt /></span>
                            <span>Share</span>
                        </div>
                        <div className='flex justify-center items-center gap-2'><span><FaQuestion /></span>
                            <span>Ask Question</span></div>
                    </div>

                </div>
            </div>
        </div>
        <div className='w-full px-3'>
            <h3 className='p-3 font-bold rounded-md text-2xl font-serif w-auto m-auto bg-white shadow-sm shadow-black '>Similar products</h3>
        </div>
    </div> : null
    )
}

export default SingleProduct
