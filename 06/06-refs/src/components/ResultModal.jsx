/* forwarding a ref to subcomponents does not work like with state by default
 * therefore, we need to forward it manually
 * */
import { forwardRef, useRef, useImperativeHandle } from "react";

/**
 * ResultModal component.
 *
 * This component is a modal dialog that displays the result
 * of a timer challenge. It uses `forwardRef` to allow parent
 * components to control the opening and closing of the modal
 * through imperative handle methods.
 *
 * @param {Object} props - Properties passed to the component
 * @param {string} props.result - The result of the timer challenge
 * @param {number} props.targetTime - The target time for the challenge in seconds
 * @param {Ref} ref - A ref object to control the dialog's visibility
 *
 * @component
 */
const ResultModal = forwardRef(function ResultModal(
  { remainingTime, targetTime, onReset },
  ref,
) {
  /*
   * detaches the TimerChallenge from the modal by presenting a component API
   * useImperativeHandle() will most likely always be used in combination with forwardRef()
   */
  const refDialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedTimeRemaining = (remainingTime / 1000).toFixed(3);

  // convert the time to a score between 1 and 100
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => ({
    open: () => refDialog.current.showModal(),
    close: () => refDialog.current.close(),
  }));

  return (
    <dialog ref={refDialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You lost!</h2>}
      {!userLost && <h2>Your score is {score}!</h2>}
      <p>The target time was {targetTime} seconds.</p>
      <p>
        You stopped the timer with <strong>{formattedTimeRemaining}</strong>{" "}
        seconds left.
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
