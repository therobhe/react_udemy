/**
 * Component imports
 */
import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx";

function App() {
  return (
   <main>
     <div id="game-container">
       <ol id="players">
         <Player initialName={"Player 1"} symbol={"X"}></Player>
         <Player initialName={"Player 2"} symbol={"O"}></Player>
       </ol>

       <GameBoard></GameBoard>
     </div>

     <div>
       Log
     </div>
   </main>
  )
}

export default App
