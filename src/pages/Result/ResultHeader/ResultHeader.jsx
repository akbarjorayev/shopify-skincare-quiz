import { Link } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import './ResultHeader.css'

export default function ResultHeader() {
  return (
    <>
      <div className="result_con_header">
        <h1>Build you everyday self care routine.</h1>
        <p>
          Perfect for if you're looking for soft, nourished skin, our
          moisturizing body washes are made with skin-natural nutrients that
          work with your skin to replenish moisture. With a light formula, the
          bubbly lather leaves your skin feeling cleansed and cared for. And by
          choosing relaxing fragrances you can add a moment of calm to the end
          of your day.
        </p>
        <Link to="/quiz">
          <Button className="outlined_default">Retake the quiz</Button>
        </Link>
      </div>
    </>
  )
}
