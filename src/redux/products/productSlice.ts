import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { UseFetchData } from '../../components/hooks/useFetchData'
import { Firestore } from 'firebase/firestore'
interface AsyncThunkProps {
    db: Firestore,
    path: string,
}
export const fetchProducts = createAsyncThunk('Products/fetchData',
    async ({ db, path }: AsyncThunkProps) => {
        const [, , ProductProps]: [boolean, boolean, any[]] = UseFetchData({ db, path })
        console.log(ProductProps)
        return ProductProps
    })
interface ProductTypes {
    [key: string]: []
}
interface ProductStoreProducts {
    loading: boolean,
    apiError: boolean,
    products: { [key: string]: [] }
}
const productState: ProductStoreProducts = {//our product state
    products: {
        clothes: [],
        electronics: [],
        furniture: [],
        miscellaneous: [],
        shoes: [],
    },
    loading: false,
    apiError: false
}

console.log(typeof fetchProducts)
const ProductSlice = createSlice({
    name: 'Products',
    initialState: productState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true,
                state.apiError = false
        })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false,
                    console.log('rejected payload is', action.payload)
                state.apiError = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                if (!Object.keys(action.payload) || !action.payload.length)
                    return//if action.payload is empty return back it is a safety check
                const categories = ['clothes', 'electronics', 'furniture', 'miscellaneous', 'shoes']
                console.log(action.payload)
                const structuredProducts: ProductTypes = {}
                categories.forEach((item: string, id: number) => {
                    structuredProducts[item] = Object.values(action.payload[id]) as []
                })
                state.products = structuredProducts as {
                    clothes: [],
                    electronics: [],
                    furniture: [],
                    miscellaneous: [],
                    shoes: [],
                }
                state.loading = false;
                state.apiError = false
            })

    }

})
export default ProductSlice.reducer
const { } = ProductSlice.actions