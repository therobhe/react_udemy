/**
 * Component imports
 */
import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./data/winning-combinations.jsx";

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const PLAYERS = {
    X: "Player 1",
    Y: "Player 2"
}

/**
 * Import hooks
 */
import {useState} from "react"
import GameOver from "./components/GameOver.jsx";

function deriveGameBoard(gameTurns) {
    // derive values from state (lifted up from gameboard component
    // always use immutable objects/arrays when assigning from a given one!!!!!!!!
    let gameBoard = [...INITIAL_GAME_BOARD.map(innerArray => [...innerArray])]

    for (const turn of gameTurns) {
        const {square, player} = turn
        const {row, col} = square

        gameBoard[row][col] = player
    }

    return gameBoard
}
function deriveWinner(gameBoard, players) {
    let winner = null

    // check for winning combination
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            winner = players[firstSquareSymbol]
        }
    }
    return winner
}

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
    const [players, setPlayers] = useState({
        "X": "Player 1",
        "O": "Player 2"
    })
    const activePlayer = deriveActivePlayer(gameTurns)

    const gameBoard = deriveGameBoard(gameTurns)

    const winner = deriveWinner(gameBoard, players)

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

    const handleRematch = () => {
        setGameTurns([])
    }

    const handlePlayerUpdate = (symbol, newName) => {
        setPlayers((prevPlayers) => {
            return {
                ...prevPlayers,
                [symbol]: newName
            }
        })
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName={PLAYERS.X} symbol={"X"} isActive={activePlayer === "X"} onChangeName={handlePlayerUpdate}></Player>
                    <Player initialName={PLAYERS.Y} symbol={"O"} isActive={activePlayer === "O"} onChangeName={handlePlayerUpdate}></Player>
                </ol>
                {(winner || isDraw) && <GameOver winningPlayer={winner} initRematch={handleRematch} />}
                <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare}></GameBoard>
            </div>

            <div>
                <Log turns={gameTurns}/>
            </div>
        </main>
    )
}

export default App
