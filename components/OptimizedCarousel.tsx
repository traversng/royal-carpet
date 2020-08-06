import Slider from 'react-slick'
import Rating from 'react-rating'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export const OptimizedCarousel = ({ content }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: typeof window !== 'undefined' && window.screen.width >= 1024,
    lazyLoad: true,
  }
  return (
    <Slider {...settings}>
      {content.map((review, i) => {
        return (
          <div className="p-4 leading-relaxed bg-gray-200">
            {review.title && <h3>{review.title}</h3>}
            <p className="italic">{review.quote}</p>
            <h4 className="font-bold">- {review.reviewer}</h4>
            <span>
              {review.rating && (
                <Rating
                  initialRating={review.rating}
                  emptySymbol={<AiOutlineStar className="text-yellow-500" />}
                  fullSymbol={<AiFillStar className="text-yellow-500" />}
                />
              )}
            </span>
            <p className="text-sm text-gray-600">{review.date}</p>
          </div>
        )
      })}
    </Slider>
    // </Carousel>
  )
}

export default OptimizedCarousel
