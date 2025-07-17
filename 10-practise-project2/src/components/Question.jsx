export default function Question({questionData, index, onAnswerSubmit}) {
  return (
    <div key={index} className="question-container">
      <h2>{questionData.text}</h2>
      <ul id="answers">
        {questionData.answers.map((answer, answerIndex) => (
          <li key={answerIndex} className="answer">
            <button onClick={() => {onAnswerSubmit(answer)}}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}