import QuestionScreen from "../screens/QuestionScreen.jsx";
import ResultScreen from "../screens/ResultScreen.jsx";
import { useState } from "react";

export default function Main() {
  const [quizFinished, setQuizFinished] = useState(false);
  const [result, setResult] = useState({
    skipped: 0,
    correct: 0,
    wrong: 0,
    total: 7
  })
  const [givenAnswers, setGivenAnswers] = useState([]);

  return (
    <main id="quiz">
      {quizFinished
        ? <ResultScreen result={result}
                        givenAnswers={givenAnswers}
        />
        : <QuestionScreen onFinish={() => {setQuizFinished(true)}}
                          setGivenAnswer={setGivenAnswers}
                          setResult={setResult}
        />}
    </main>
  )
}