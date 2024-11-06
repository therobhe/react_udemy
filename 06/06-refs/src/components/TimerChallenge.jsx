import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge ({ title, targetTime }) {
    // here, the ref is used to store the pointer on the timer so it can be referenced in the handleStor function
    const refTimer = useRef();
    const refDialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    // check if time is up and reset the timer, show losing modal
    if (timeRemaining <= 0) {
        clearInterval(refTimer.current);
        setTimeRemaining(targetTime * 1000);
        refDialog.current.open();
    }

    // new approach in order to track remaining time with setInterval
    const handleStart = () => {
        refTimer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10) // re-executes the function every 10ms
    }

    const handleStop = () => {
        refDialog.current.open();
        clearInterval(refTimer.current);
    }

    /**
     * Old way does not prepare for winning condition
     *
     *     const handleStart = () => {
     *         refTimer.current = setTimeout(() => {
     *             setTimerDone(true);
     *             setTimerRunning(false);
     *
     *             // show the lose modal after time is up
     *             refDialog.current.open();
     *         }, targetTime * 1000);
     *
     *         setTimerRunning(true);
     *     }
     *
     *     const handleStop = () => {
     *         clearTimeout(refTimer.current);
     *         setTimerRunning(false);
     *     }
     */


    return (
        <>
            {/* since the modal is always hidden, and trigged by showModal(), we can embedd it unconditioned */}
            <ResultModal ref={refDialog} result="lost" targetTime={targetTime} />

            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? '' : 's'}
                </p>

                <p>
                    <button onClick={timerActive ? handleStop : handleStart}>{timerActive ? 'Stop' : 'Start'} Challenge</button>
                </p>
                <p className={timerActive ? 'active' : undefined}>
                    Timer {timerActive ? 'running' : 'inactive'}
                </p>
            </section>
        </>
    );
}