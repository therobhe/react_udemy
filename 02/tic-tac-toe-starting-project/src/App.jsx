/**
 * Component imports
 */
import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./data/winning-combinations.jsx";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

/**
 * Import hooks
 */
import {useState} from "react"
import GameOver from "./components/GameOver.jsx";

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
    let winner = null

    // derive values from state (lifted up from gameboard component
    let gameBoard = initialGameBoard

    for (const turn of gameTurns) {
        const {square, player} = turn
        const {row, col} = square

        gameBoard[row][col] = player
    }

    // check for winning combination
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            winner = firstSquareSymbol
        }
    }

    const isDraw = gameTurns.length === 9 && !winner


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
                {(winner || isDraw) && <GameOver winningPlayer={winner} />}
                <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare}></GameBoard>
            </div>

            <div>
                <Log turns={gameTurns}/>
            </div>
        </main>
    )
}

export default App
