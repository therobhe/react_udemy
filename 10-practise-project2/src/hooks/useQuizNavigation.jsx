/*
import { useState } from "react";
import { quizCatalogue } from "../data/questions.js";

export function useQuizNavigation({onFinish, setResult, setGivenAnswer}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions = quizCatalogue;

  const handleAnswer = (selectedAnswer) => {
    // Save the current answer
    setGivenAnswer((prevAnswers) => {
      return [
        ...prevAnswers,
        {
          question: questions[currentQuestionIndex].text,
          answer: selectedAnswer
        }
      ];
    });

    // Calculate if answer is correct
    const isCorrect = selectedAnswer === questions[currentQuestionIndex].answers[questions[currentQuestionIndex].correctAnswerIndex];

    // Update result
    setResult(prevResult => ({
      ...prevResult,
      total: questions.length,
      correct: isCorrect ? (prevResult?.correct || 0) + 1 : (prevResult?.correct || 0),
      wrong: !isCorrect ? (prevResult?.wrong || 0) + 1 : (prevResult?.wrong || 0),
      skipped: (prevResult?.skipped || 0)
    }));

    // If this was the last question, finish after saving the answer
    if (currentQuestionIndex >= questions.length - 1) {
      onFinish();
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  return {
    currentQuestionIndex,
    handleAnswer,
    currentQuestion: questions[currentQuestionIndex]
  }
}*/
