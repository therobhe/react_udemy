import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

/**
 * The `App` function component renders the main application interface, including a `Player` component
 * and a set of timer challenges with different difficulty levels.
 *
 * @return A JSX fragment containing a `Player` component and a `div` with multiple `TimerChallenge` components.
 */
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not so easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
