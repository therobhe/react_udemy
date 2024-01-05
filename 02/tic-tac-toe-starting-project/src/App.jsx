/**
 * Component imports
 */
import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx";

/**
 * Import hooks
 */
import { useState } from "react";
import {act} from "react-dom/test-utils";

function App() {
  const [ activePlayer, setActivePlayer ] = useState("X")

  const handleSelectSquare = () => {
      setActivePlayer((currPlayer) => currPlayer === "X" ? "O" : "X")
  }

  return (
   <main>
     <div id="game-container">
       <ol id="players" className="highlight-player">
         <Player initialName={"Player 1"} symbol={"X"} isActive={activePlayer === "X"}></Player>
         <Player initialName={"Player 2"} symbol={"O"} isActive={activePlayer === "O"}></Player>
       </ol>

       <GameBoard activePlayerSymbol={activePlayer} onSelectSquare={handleSelectSquare}></GameBoard>
     </div>

     <div>
       Log
     </div>
   </main>
  )
}

export default App
