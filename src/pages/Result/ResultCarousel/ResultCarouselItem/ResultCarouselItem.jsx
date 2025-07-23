import like from '../assets/like.png'
import './ResultCarouselItem.css'

export default function ResultCarouselItem({ product }) {
  return (
    <>
      <div className="result_carousel_item">
        <img src={product.img} alt={product.title} />
        <img src={like} alt="Like" className="result_carousel_item_like" />
        <h1>{product.title}</h1>
        <span>{product.price}</span>
      </div>
    </>
  )
}
