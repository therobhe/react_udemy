import {useState} from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function GameBoard() {
    const [ gameBoard, setGameBoard ] = useState(initialGameBoard)

    /**
     * Create a immutable next gameboard from the previous one and update the clicked cell
     * @param rowIndex
     * @param colIndex
     * @param symbol
     */
    const handleSelectedSquare = (rowIndex, colIndex, symbol) => {
        setGameBoard((gameBoard) => {
            let nextGameBoard = [...gameBoard.map(innerArray => [...innerArray])]
                nextGameBoard[rowIndex][colIndex] = symbol
            return nextGameBoard
        })
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => handleSelectedSquare(rowIndex, colIndex, 'X')}>{playerSymbol}</button></li>)}
                </ol>
            </li>
            )}
        </ol>
    )
}