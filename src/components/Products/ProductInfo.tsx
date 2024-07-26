import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import ProductCards from "../common/ProductCards"
import { RootState } from "../../redux/store"

import SingleProduct from "../common/SingleProduct"
// interface Product {
//     id: string;
//     title: string;
//     price: number;
//     description: string,
//     images: string[]; // URL to the product image
// }
function ProductInfo() {
    const { id, category } = useParams<{ [key: string]: string }>()
    if (!category)
        return
    console.log('category present')
    const products = useSelector((state: RootState) => state.productStore.products[category])
    const actualProduct = products.find((item: { id: string }) => item.id == id)
    return (
        <div>
          {actualProduct ?<SingleProduct selectedProduct={actualProduct} /> :null}
           <ProductCards products={products.slice(0, 6)} />      
        </div>
    )
}
export default ProductInfo
