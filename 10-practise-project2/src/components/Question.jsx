export default function Question({questionData, index}) {
  return (
    <div key={index} className="question-container">
      <h2>{questionData.text}</h2>
      <ul>
        {questionData.answers.map((answer, answerIndex) => (
          <li key={answerIndex}>
            <button>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}