import { useEffect, useState } from "react";

const ELAPSING_SPEED = 1000;

export default function ProgressBar({ time }) {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    const interval = setInterval(function () {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - ELAPSING_SPEED;
      });
    }, ELAPSING_SPEED);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="progress">
      <progress value={remainingTime} max={time} />
      <span>
        {Math.floor(remainingTime / 1000)}s remaining
      </span>
    </div>
  );
}