import ResultCarouselItem from './ResultCarouselItem/ResultCarouselItem'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import arrow from './assets/arrow.png'
import './ResultCarousel.css'

export default function ResultCarousel() {
  const products = [
    {
      img: img1,
      title: 'Milk Body Cleanser',
      price: '$14.00',
    },
    {
      img: img2,
      title: 'Milk Body Lotion',
      price: '$12.00',
    },
    {
      img: img2,
      title: 'Milk Body Lotion',
      price: '$12.00',
    },
    {
      img: img2,
      title: 'Milk Body Lotion',
      price: '$12.00',
    },
  ]

  return (
    <>
      <div className="result_carousel">
        <div className="result_carousel_arrow">
          <img src={arrow} alt="Arrow" />
        </div>
        <div className="result_carousel_con">
          <div className="result_carousel_items">
            <div className="result_carousel_item filled">
              <h1>Daily routine</h1>
              <p>
                Perfect for if you're looking for soft, nourished skin, our
                moisturizing body washes are made with skin-natural nutrients
                that work with your skin to replenish moisture. With a light
                formula, the bubbly lather leaves your skin feeling cleansed and
                cared for. And by choosing relaxing fragrances you can add a
                moment of calm to the end of your day.
              </p>
            </div>
            {products.map((product, i) => (
              <ResultCarouselItem key={i} product={product} />
            ))}
          </div>
        </div>
        <div className="result_carousel_arrow">
          <img src={arrow} alt="Arrow" />
        </div>
      </div>
    </>
  )
}
