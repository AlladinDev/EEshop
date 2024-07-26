import { Carousel } from "../common/Carousel"
const slides = [
    { slide: <div className="flex justify-center items-center"><img src="../../slide1.jpg" ></img></div> },
    { slide: <div className="flex justify-center items-center"><img src="../../slide2.jpg" ></img></div> },
    { slide: <div className="flex justify-center items-center"><img src="../../slide3.jpg" ></img></div> },
    { slide: <div className="flex justify-center items-center"><img src="../../slide4.jpg" ></img></div> },
    { slide: <div className="flex justify-center items-center"><img src="../../slide5.jpg" ></img></div> },
   
]
 const SliderBanner: React.FC = () => {
    return (
       <div className=" w-auto my-2 mx-2 shadow-md shadow-gray">
         <Carousel slides={[...slides]} slidesToScroll={1} slidesToShow={1}
            autoplay={true} autoplaySpeed={3000} arrows={false} />
       </div>
    )
}

export default SliderBanner
