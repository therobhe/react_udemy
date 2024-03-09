/**
 * Component imports
 */
import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
import Log from "./components/Log.jsx";

/**
 * Import hooks
 */
import { useState } from "react"

function App() {
    const [activePlayer, setActivePlayer] = useState("X")
    const [gameTurns, setGameTurns] = useState([])

    const handleSelectSquare = (rowIndex, colIndex) => {
        setActivePlayer((currPlayer) => currPlayer === "X" ? "O" : "X")

        setGameTurns((prevTurn) => {
            let currentPlayer = "X" // used to prevent merging states

            if (prevTurn.length > 0 && prevTurn[0].player === "X") {
                currentPlayer = "O"
            }


            const updatedTurns = [
                {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
                ...prevTurn
            ]
            return updatedTurns
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
                <Log gameTurns={gameTurns}/>
            </div>
        </main>
    )
}

export default App
