import Electronics from './Clothes'
import Furniture from './Furniture'
import Shoes from './Electronics'
import Miscellaneous from './Miscellaneous'
import SecondNavbar from './SecondNavbar'
import SliderBanner from './SliderBanner'
function Home() {
  return (
    <div>
        <SecondNavbar/>
        <SliderBanner/>
        <Electronics/>
        <Furniture/>
        <div className='flex flex-col md:flex-row'>
        <Miscellaneous/>
        <Shoes/>
        </div>
        
      
    </div>
  )
}

export default Home
