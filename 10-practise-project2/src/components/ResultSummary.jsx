export default function ResultSummary({ result }) {
  const skipPercentage = result.skipped > 0
    ? Math.round((result.skipped / result.total) * 100)
    : 0;

  const correctPercentage = result.correct > 0
    ? Math.round((result.correct / result.total) * 100)
    : 0;

  const wrongPercentage = result.wrong > 0
    ? Math.round((result.wrong / result.total) * 100)
    : 0;

  return (
    <div id="summary-stats">
      <p>
        <span className="number">{skipPercentage}%</span>
        <span className="text">Skipped</span>
      </p>
      <p>
        <span className="number">{correctPercentage}%</span>
        <span className="text">Answered correctly</span>
      </p>
      <p>
        <span className="number">{wrongPercentage}%</span>
        <span className="text">Answered incorrectly</span>
      </p>
    </div>
  );
}