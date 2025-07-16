import { quizCatalogue } from "../data/questions.js";
import ProgressBar from "./ProgressBar.jsx";
import Question from "./Question.jsx";
import { useState } from "react";

const TIME = 10000; // 10 seconds

const questions = quizCatalogue;

/**
 * QuizGame component - shell for the quiz rendering the remaining time, questions and answers
 * @returns {JSX.Element}
 * @constructor
 */
export default function QuestionScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerSubmit = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      console.log("Display question: ", currentQuestionIndex);
    } else {
      console.log("Quiz completed!");
    }
  };

  return (
    <div id="question">
      <ProgressBar key={currentQuestionIndex}
                   time={TIME}
      />
      <Question key={`q-${currentQuestionIndex}`}
                questionData={questions[currentQuestionIndex]}
                onAnswerSubmit={handleAnswerSubmit}
      />
    </div>
  );
}