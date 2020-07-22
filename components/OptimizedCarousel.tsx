import Slider from 'react-slick'

import OptimizedImage from './OptimizedImage'

export const OptimizedCarousel = ({ content }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: typeof window !== 'undefined' && window.screen.width >= 1024,
    lazyLoad: true,
  }
  return (
    <Slider {...settings}>
      {content.map((info, i) => {
        return (
          // <div className="rounded-md shadow-lg">
          //   <OptimizedImage
          //     fileName={info.fileName}
          //     classes={info.classes}
          //     altText={info.altText}
          //   />
          //   <div className="px-6 py-4 bg-gray-200">
          //     <div className="font-bold text-xl mb-2 text-brand">
          //       {info.title}
          //     </div>
          //     <p className="text-gray-700 text-base">{info.description}</p>
          //   </div>
          // </div>
          <div className="p-4 leading-relaxed">
            <h3>{info.title}</h3>
            <p className="text-gray-600 italic">{info.quote}</p>
            <h4 className="font-bold">- {info.reviewer}</h4>
            <p className="text-sm text-gray-600">source: {info.source}</p>
          </div>
        )
      })}
    </Slider>
    // </Carousel>
  )
}

export default OptimizedCarousel
