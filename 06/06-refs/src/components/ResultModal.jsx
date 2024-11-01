/* forwarding a ref to sub-components does not work like with state by default
 * therefore, we need to forward it manually
 * */
import {forwardRef, useRef, useImperativeHandle} from "react";

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
        /*
         * detatches the TimerChallenge from the modal by presenting an component API
         * useImperativeHandle() will most likely always be used in combination with forwardRef()
         */
        const refDialog = useRef();
        useImperativeHandle(ref, () => ({
            open: () => refDialog.current.showModal(),
            close: () => refDialog.current.close()
        }));

        return (
            <dialog ref={refDialog} className="result-modal">
                <h2>You {result}!</h2>
                <p>
                    The target time was {targetTime} seconds.
                </p>
                <p>
                    You stopped the timer with <strong>X</strong> seconds left.
                </p>
                <form method="dialog">
                    <button>Close</button>
                </form>
            </dialog>
        )
    }
)

export default ResultModal;