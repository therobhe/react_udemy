export default function GameOver({winningPlayer}) {
    return (
        <div id={"game-over"}>
            <h2>Game Over!</h2>
            {winningPlayer ? <p>{winningPlayer} won</p> : <p>It's a Draw!</p>}
            <p>
                <button>Rematch!</button>
            </p>
        </div>
    )
}