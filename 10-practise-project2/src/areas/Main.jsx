import QuestionScreen from "../screens/QuestionScreen.jsx";
import ResultScreen from "../screens/ResultScreen.jsx";
import { useState } from "react";

export default function Main() {
  const [quizFinished, setQuizFinished] = useState(false);

  return (
    <main id="quiz">
      {quizFinished
        ? <ResultScreen />
        : <QuestionScreen onFinish={() => {setQuizFinished(true)}} />}
    </main>
  )
}