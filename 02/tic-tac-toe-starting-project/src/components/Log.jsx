export default function Log({gameTurns}) {
    return (
        <>
            <h1>Log</h1>
            <ol>
                {gameTurns.map((turn) => {
                   return <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row}, {turn.square.col}</li>
                })}
            </ol>
        </>
    )
}