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
  { result, targetTime },
  ref,
) {
  /*
   * detaches the TimerChallenge from the modal by presenting a component API
   * useImperativeHandle() will most likely always be used in combination with forwardRef()
   */
  const refDialog = useRef();
  useImperativeHandle(ref, () => ({
    open: () => refDialog.current.showModal(),
    close: () => refDialog.current.close(),
  }));

  return (
    <dialog ref={refDialog} className="result-modal">
      <h2>You {result}!</h2>
      <p>The target time was {targetTime} seconds.</p>
      <p>
        You stopped the timer with <strong>X</strong> seconds left.
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
