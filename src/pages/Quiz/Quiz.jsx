import { useState } from 'react'
import QuizQuestion from './QuizQuestion/QuizQuestion'
import QuizNavigation from './QuizNavigation/QuizNavigation'
import QuizProgress from './QuizProgress/QuizProgress'
import './Quiz.css'

export default function Quiz() {
  const [activeQuiz, setActiveQuiz] = useState(0)

  return (
    <>
      <div className="quiz_con">
        <div className="quiz_con_hero">
          <QuizQuestion activeQuiz={activeQuiz} />
          <QuizNavigation
            activeQuiz={activeQuiz}
            setActiveQuiz={setActiveQuiz}
          />
          <QuizProgress activeQuiz={activeQuiz} />
        </div>
      </div>
    </>
  )
}
