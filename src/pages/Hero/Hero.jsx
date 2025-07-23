import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import './Hero.css'

export default function Hero() {
  return (
    <>
      <div className="hero_con">
        <h1>Build a self care routine suitable for you</h1>
        <p>
          Take out test to get a personalised self care routine based on your
          needs.
        </p>
        <Link to="/quiz">
          <Button className="filled">Start the quiz</Button>
        </Link>
      </div>
    </>
  )
}
