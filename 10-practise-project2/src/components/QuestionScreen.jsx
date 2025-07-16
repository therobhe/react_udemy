import { quizCatalogue } from "../data/questions.js";
import ProgressBar from "./ProgressBar.jsx";
import Question from "./Question.jsx";

const TIME = 10000; // 10 seconds

const questions = quizCatalogue;

/**
 * QuizGame component - shell for the quiz rendering the remaining time, questions and answers
 * @returns {JSX.Element}
 * @constructor
 */
export default function QuestionScreen() {
  return (
    <div id="question">
      <ProgressBar time={TIME}/>
      {questions.map((question, index) => (
        <Question key={index} questionData={question} />
      ))}
    </div>
  );
}