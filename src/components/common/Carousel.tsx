import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface CarouselProps {
    slidesToShow: number,
    slidesToScroll: number,
    autoplay: boolean,
    arrows: boolean,
    autoplaySpeed: number,
    slides:{slide:React.ReactNode}[]
}
export const Carousel: React.FC<CarouselProps> = (props) => {

    const { slidesToScroll, slides, slidesToShow, autoplaySpeed, autoplay, arrows } = props
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,    
        autoplaySpeed: autoplaySpeed,
        autoplay: autoplay,
        arrows: arrows,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        pauseOnHover: true,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //             initialSlide: 2
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    };
    console.log('carousel')
    return (
        <div className="slider-container  bg-[#FFFFFF] shadow-md shadow-gray-300 ">
            <Slider {...settings}>
                {
                    slides.map((wrapper, key) => (
                        <div key={key} className="">
                            {wrapper.slide}
                        </div>
                    ))
                }
            </Slider >
        </div >
    );
}