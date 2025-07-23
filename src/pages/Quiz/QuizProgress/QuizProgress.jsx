import quizzes from '../../../data/quizzes.json'
import './QuizProgress.css'

export default function QuizProgress({ activeQuiz }) {
  return (
    <>
      <div
        className="quiz_progress"
        style={{
          '--quiz-progress-deg': `${
            (activeQuiz + 1) * (1 / quizzes.length) * 360
          }deg`,
        }}
      >
        <span>
          {activeQuiz + 1}/{quizzes.length}
        </span>
      </div>
    </>
  )
}
