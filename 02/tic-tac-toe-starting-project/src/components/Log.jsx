export default function Log({ gameTurns }) {
    return (
        <>
            {gameTurns.forEach((turn) => console.log(turn))}
        </>
    )
}