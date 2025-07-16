export default function ResultScreen() {
  return (
    <div id="summary">
      <h2>Quiz Completed!</h2>
      <p>Your score: 85%</p>
      <button onClick={() => window.location.reload()}>Restart Quiz</button>
    </div>
  )
}