import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge ({ title, targetTime }) {
    const [timerRunning, setTimerRunning] = useState(false);
    const [timerDone, setTimerDone] = useState(false);

    // here, the ref is used to store the pointer on the timer so it can be referenced in the handleStor function
    const refTimer = useRef();
    const refDialog = useRef();

    const handleStart = () => {
        refTimer.current = setTimeout(() => {
            setTimerDone(true);
            setTimerRunning(false);

            // show the lose modal after time is up
            refDialog.current.showModal();
        }, targetTime * 1000);

        setTimerRunning(true);
    }

    const handleStop = () => {
        clearTimeout(refTimer.current);
        setTimerRunning(false);
    }

    return (
        <>
            {/* since the modal is always hidden, and trigged by showModal(), we can embedd it unconditioned */}
            <ResultModal ref={refDialog} result="lost" targetTime={targetTime} />

            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? '' : 's'}
                </p>

                {timerDone && <p>You Lost!</p>}

                <p>
                    <button onClick={timerRunning ? handleStop : handleStart}>{timerRunning ? 'Stop' : 'Start'} Challenge</button>
                </p>
                <p className={timerRunning ? 'active' : undefined}>
                    Timer {timerRunning ? 'running' : 'inactive'}
                </p>
            </section>
        </>
    );
}