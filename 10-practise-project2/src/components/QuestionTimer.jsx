import { useEffect, useState } from "react";

const ELAPSING_SPEED = 1000;

export default function QuestionTimer({ time, onTimeUp, mode }) {
  const [remainingTime, setRemainingTime] = useState(time);

  // Skip question if time is up
  useEffect(() => {
    const timeout = setTimeout(onTimeUp, time);

    return () => {
      clearTimeout(timeout);
    }
  }, [time, onTimeUp]);

  useEffect(() => {
    const interval = setInterval(function () {
      setRemainingTime((prevTime) => {
        return prevTime - ELAPSING_SPEED;
      });
    }, ELAPSING_SPEED);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <progress id="question-time" value={remainingTime} max={time} className={mode} />
  );
}
