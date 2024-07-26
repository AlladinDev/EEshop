
import Navbar from './components/homeFolder/TopNavbar'
import { db } from './firebaseConfig/firebase'
//import { collection ,addDoc,doc,setDoc} from 'firebase/firestore'
import Home from './components/homeFolder/Home'
// import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAppDispatch } from './redux/ReduxHooks/hooks'
import { fetchProducts } from './redux/products/productSlice'
import ProductInfo from './components/Products/ProductInfo'
function App() {

  const dispatch = useAppDispatch()
 
  dispatch(fetchProducts({ db, path: '/products' }))


  return (
    <div className='bg-[#F1F2F4]' style={{ scrollbarWidth: 'none' }}>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/info/:id/:category' element={<ProductInfo />} />
      </Routes>


    </div>

  )
}

export default App
