import { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";

/**
 * TimerChallenge component provides an interactive challenge where users must stop a timer before it runs out.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the challenge.
 * @param {number} props.targetTime - The target time in seconds for the challenge.
 *
 * @return {JSX.Element} The JSX code for rendering the TimerChallenge component.
 */
export default function TimerChallenge({ title, targetTime }) {
  /**
   * STATE & REFS
   */
  // here, the ref is used to store the pointer on the timer so it can be referenced in the handleStart function
  const refTimer = useRef();
  // ref on the result modal
  const refDialog = useRef();
  // state that manages time
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  // flag used to indicate game state
  const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // check if time is up and reset the timer, show losing modal
  if (timeRemaining <= 0) {
    refDialog.current.open();
    clearInterval(refTimer.current);
  }

  /**
   * CALLBACK FUNCTIONS
   */
  // handleStart = run the timer for the instance by substracting a fixed time(ms) from it
  const handleStart = () => {
    refTimer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10); // re-executes the function every 10ms
  };

  // handleStop = winning condition, cause timer was stopped in time
  const handleStop = () => {
    refDialog.current.open();
    clearInterval(refTimer.current);
  };

  // Reset the timer after finish modal is shown
  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  return (
    <>
      {/* since the modal is always hidden, and trigged by showModal(), we can embedd it unconditioned */}
      <ResultModal
        ref={refDialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "" : "s"}
        </p>

        <p>
          <button onClick={timerActive ? handleStop : handleStart}>
            {timerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerActive ? "active" : undefined}>
          Timer {timerActive ? "running" : "inactive"}
        </p>
      </section>
    </>
  );
}
