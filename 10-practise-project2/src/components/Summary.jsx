import finishlogo from "../assets/quiz-complete.png";
import { QUESTIONS } from "../data/questions.js";

export default function Summary({ givenAnswers }) {
  const skippedAnswers = givenAnswers.filter(answer => answer == null).length;
  const correctAnswers = givenAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]).length;
  const wrongAnswers = givenAnswers.length - skippedAnswers - correctAnswers;
  const totalQuestions = QUESTIONS.length;

  return (
    <div id="summary">
      <img src={finishlogo} alt="Quiz finished" />
      <div id="summary-stats">
        <p>
          <span className="number">{Math.round((skippedAnswers / totalQuestions)*100)}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{Math.round((correctAnswers / totalQuestions)*100)}%</span>
          <span className="text">Correct</span>
        </p>
        <p>
          <span className="number">{Math.round((wrongAnswers / totalQuestions)*100)}%</span>
          <span className="text">False</span>
        </p>
      </div>
      <ol>
        {givenAnswers.map((answer, index) => {
          let cssClass = 'user-answer'
          if (answer == null) {
            cssClass += ' skipped';
          } else {
            if (answer === QUESTIONS[index].answers[0]) {
              cssClass += ' correct';
            } else {
              cssClass += ' wrong';
            }
          }
          return (
            <li>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={`user-answer ${cssClass}`}>{answer ?? "Skipped"}</p>
            </li>
          )
        })}
      </ol>
    </div>
  );
}