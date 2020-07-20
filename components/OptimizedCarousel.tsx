// import Carousel from '@brainhubeu/react-carousel'
import Slider from 'react-slick'

import OptimizedImage from './OptimizedImage'

export const OptimizedCarousel = ({ content }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: typeof window !== 'undefined' && window.screen.width >= 1024,
    lazyLoad: true
  }
  return (
    // <Carousel
    //   arrows={typeof window !== 'undefined' && window.screen.width >= 1024}
    //   dots
    //   infinite
    //   lazyLoad
    //   clickToChange={true}
    // >
    <Slider {...settings}>
      {content.map((info, i) => {
        return (
          <div className="rounded-md shadow-lg">
            <OptimizedImage
              fileName={info.fileName}
              classes={info.classes}
              altText={info.altText}
            />
            <div className="px-6 py-4 bg-gray-200">
              <div className="font-bold text-xl mb-2 text-purple-600">
                {info.title}
              </div>
              <p className="text-gray-700 text-base">{info.description}</p>
            </div>
          </div>
        )
      })}
    </Slider>
    // </Carousel>
  )
}

export default OptimizedCarousel
