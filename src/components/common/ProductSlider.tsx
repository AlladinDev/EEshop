interface ProductSliderProps {
    products: { title: string, images: string[], description: '', price: number, id: number }[]
}
const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  
    return (
        <div className="carousel carousel-center  space-x-5 my-1" >
            {products.map((product) => (
                <div className="carousel-item border cursor-pointer border-black"  data-id={product.id}>
                    <div className=" flex flex-col justify-center items-center">
                        <div data-id={product.id}>
                            <img  src={product.images[0].split('"')[1]} alt="NA" className="w-[120px]" />
                        </div>
                        <div data-id={product.id} className=" text-center p-2">
                            <h2 >{product.title}</h2>
                            <h2 className="font-bold">Price:{product.price * 9}</h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductSlider
