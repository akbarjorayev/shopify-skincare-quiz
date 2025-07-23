import { useState } from 'react'
import Button from '../../../components/Button/Button'
import quizzes from '../../../data/quizzes.json'
import './QuizQuestion.css'

export default function QuizQuestion({ activeQuiz }) {
  const quiz = quizzes[activeQuiz]
  const [chosenOptions, setChosenOptions] = useState([])

  return (
    <>
      <p className="quiz_question_text">{quiz.question}</p>
      <div className="quiz_question_options">
        {quiz.options.map((option, i) => (
          <Button
            key={i}
            className={`outlined_color ${
              chosenOptions[activeQuiz] === i ? 'filled' : ''
            }`}
            onClick={() => {
              setChosenOptions((prev) => {
                const newOptions = [...prev]
                newOptions[activeQuiz] = i

                return newOptions
              })
            }}
          >
            {option}
          </Button>
        ))}
      </div>
    </>
  )
}
