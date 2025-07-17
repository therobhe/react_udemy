import { useRef } from "react";

export default function Answers({ answers, answerState, selectedAnswer, onSelect }) {
  const shuffeldAnswers = useRef();

  if (!shuffeldAnswers.current) {
    shuffeldAnswers.current = [...answers];
    shuffeldAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffeldAnswers.current.map((answer, index) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";

        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }

        if ((answerState === "correct" || answerState === "wrong") && isSelected) {
          cssClasses = answerState;
        }

        return (
          <li key={index} className={"answer"}>
            <button className={cssClasses}
                    onClick={() => {
                      onSelect(answer);
                    }}
                    disabled={answerState !== ""}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}