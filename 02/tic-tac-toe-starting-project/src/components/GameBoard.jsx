const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialGameBoard
    for (const turn of turns) {
        const { square, player } = turn
        const { row, col } = square
        gameBoard[row][col] = player
    }

    // const [ gameBoard, setGameBoard ] = useState(initialGameBoard)
    //
    // /**
    //  * Create a immutable next gameboard from the previous one and update the clicked cell
    //  * @param rowIndex
    //  * @param colIndex
    //  * @param symbol
    //  */
    // const handleSelectedSquare = (rowIndex, colIndex, playerSymbol) => {
    //     setGameBoard((gameBoard) => {
    //         let nextGameBoard = [...gameBoard.map(innerArray => [...innerArray])]
    //             nextGameBoard[rowIndex][colIndex] = playerSymbol
    //         return nextGameBoard
    //     })
    //
    //     onSelectSquare()
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                            <button
                                onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}
                            </button>
                        </li>)}
                    </ol>
                </li>
            )}
        </ol>
    )
}