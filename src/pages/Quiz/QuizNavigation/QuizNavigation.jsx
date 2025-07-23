import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import quizzes from '../../../data/quizzes.json'
import arrowImg from '../assets/arrow.png'

export default function QuizNavigation({ activeQuiz, setActiveQuiz }) {
  const navigate = useNavigate()

  function quizButtonClick() {
    if (activeQuiz >= quizzes.length - 1) {
      navigate('/result')
      return
    }
    setActiveQuiz(activeQuiz + 1)
  }

  return (
    <>
      <div className="quiz_con_navigation">
        <div
          className="quiz_con_navigation_back"
          onClick={() => setActiveQuiz(activeQuiz - 1)}
          disabled={activeQuiz === 0}
        >
          Back
        </div>
        <Button className="filled" onClick={quizButtonClick}>
          <span>
            {activeQuiz < quizzes.length - 1
              ? 'Next Question'
              : 'Discover your results'}
          </span>
          {activeQuiz < quizzes.length - 1 && (
            <img src={arrowImg} alt="Arrow icon" />
          )}
        </Button>
      </div>
    </>
  )
}
