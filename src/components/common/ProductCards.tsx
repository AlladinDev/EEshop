import React from 'react';
interface Product {
    id: string;
    title: string;
    price: number;
    description: string,
    images: string[]; // URL to the product image
}
interface ProductCardsProps {
    products: Product[]; // An array of product objects
}
const ProductCards: React.FC<ProductCardsProps> = ({ products }) => {

    return (
        <div className='my-1'>
            <div className='flex  ' >
                <div className="w-auto product-cards flex justify-center items-center p-3  gap-4  flex-wrap ">
                    {products.map((product, keys) => (
                        <div key={keys} className="card card-compact bg-base-100 w-full max-w-96 shadow-xl">
                            <figure>
                                <img className=''
                                    src={product.images[0].split('"')[1]}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Rs:{product.price}</h2>
                                <p>{product.title}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-custom-btn text-white">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> 

        </div >
    )
};

export default ProductCards;
