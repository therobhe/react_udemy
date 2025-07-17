export default function ResultReview({ givenAnswers }) {
  return (
    <div className="summary-review">
      <ol>
        {givenAnswers.map((answer, index) => {
          return <li key={index}>
            <h3>{index + 1}</h3>
            <p className="question">{answer.question}</p>
            <p className="user-answer">{answer.answer}</p>
          </li>
        })}
      </ol>
    </div>
  );
}