import quizComplete from "../assets/quiz-complete.png";

export default function ResultHeader() {
  return (
    <>
      <img src={quizComplete} alt="Quiz completed" />
      <h2>Quiz Completed!</h2>
    </>
  )
}