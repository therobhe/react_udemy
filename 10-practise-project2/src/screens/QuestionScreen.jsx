/*
import QuestionTimer from "../components/QuestionTimer.jsx";
import Question from "../components/Question.jsx";
import { useQuizNavigation } from "../hooks/useQuizNavigation.jsx";

const TIME = 10000; // 10 seconds

/!**
 * QuizGame component - shell for the quiz rendering the remaining time, questions and answers
 * @returns {JSX.Element}
 * @constructor
 *!/
export default function QuestionScreen({ onFinish, setResult, setGivenAnswer }) {
  const {currentQuestionIndex, handleAnswer, currentQuestion} = useQuizNavigation({
    onFinish,
    setResult,
    setGivenAnswer
  })

  return (
    <div id="question">
      <QuestionTimer key={currentQuestionIndex}
                   time={TIME}
      />
      <Question key={`q-${currentQuestionIndex}`}
                questionData={currentQuestion}
                onAnswerSubmit={handleAnswer}
      />
    </div>
  );
}*/
