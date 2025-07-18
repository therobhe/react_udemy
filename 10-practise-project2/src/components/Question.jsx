import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import { useState } from "react";
import { QUESTIONS } from "../data/questions.js";

export default function Question({ index, onSelectAnswer, handleSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null
  });

  // timer effects for visual styling
  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }
  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  // handle the answer setting with the delay for visual effects and send it to the parent component
  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[index].answers[0]
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  // answer state for visual styling
  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer time={timer}
                     key={timer}
                     onTimeUp={answer.selectedAnswer === "" ? handleSkipAnswer : null}
                     mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers answerState={answerState}
               selectedAnswer={answer.selectedAnswer}
               answers={QUESTIONS[index].answers}
               onSelect={handleSelectAnswer}
      />
    </div>
  );
}
