import { QUESTIONS } from "../data/questions.js";
import { useState, useCallback } from "react";
import Question from "../components/Question.jsx";
import Summary from "../components/Summary.jsx";

export default function Quiz() {
  const [givenAnswers, setGivenAnswers] = useState([]);

  // empty array means -> show first question...
  // deriving this value helps to avoid creating another state variable (we want to manage as few as possible)
  const activeQuestionIndex = givenAnswers.length;
  const quizIsComplete = activeQuestionIndex >= QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setGivenAnswers((prevAnswers) => {
      return [
        ...prevAnswers,
        selectedAnswer
      ];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <Summary givenAnswers={givenAnswers} />
    );
  }

 // key is a powerful tool to force re-rendering of components
 // pay attention to the naming, multiple same keys will cause problems
  return (
    <main id="quiz">
      <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                handleSkipAnswer={handleSkipAnswer}
      />
    </main>
  );
}