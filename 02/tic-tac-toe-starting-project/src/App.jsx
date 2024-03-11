/**
 * Component imports
 */
import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./data/winning-combinations.jsx";

/**
 * Import hooks
 */
import {useState} from "react"

function deriveActivePlayer(gameTurns) {
    // derive active player symbol from the turns-list
    let currentPlayer = "X"
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O"
    }
    return currentPlayer
}

function App() {
    const [gameTurns, setGameTurns] = useState([])

    const activePlayer = deriveActivePlayer(gameTurns)

    const handleSelectSquare = (rowIndex, colIndex) => {

        setGameTurns((prevTurn) => {
            const currentPlayer = deriveActivePlayer(prevTurn)

            return [
                {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
                ...prevTurn
            ]
        })
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName={"Player 1"} symbol={"X"} isActive={activePlayer === "X"}></Player>
                    <Player initialName={"Player 2"} symbol={"O"} isActive={activePlayer === "O"}></Player>
                </ol>

                <GameBoard turns={gameTurns} onSelectSquare={handleSelectSquare}></GameBoard>
            </div>

            <div>
                <Log turns={gameTurns}/>
            </div>
        </main>
    )
}

export default App
