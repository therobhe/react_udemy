/* forwarding a ref to sub-components does not work like with state by default
*   therefore, we need to forward it manually
* */
import {forwardRef} from "react";

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
        return (
            <dialog ref={ref} className="result-modal">
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