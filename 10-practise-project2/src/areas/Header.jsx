import quizLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={quizLogo} alt="React Quiz Logo" />
      <h1>React Quiz</h1>
      <p>Test your knowledge of React.js with this quiz!</p>
    </header>
  )
}