import {useRef, useState} from "react";

// ref is a special kind of value (just like var or a state) that directly links to a DOM element or a React component.
// always return an object, so .current is needed to access attributes of the ref object
// helps to save writing unnecessarily long code by having multiple states

export default function Player() {

  const [playerName, setPlayerName] = useState();
  const refPlayerName = useRef();

  // Oldschool way of handling input = long
  // const [nameSubmitted, setNameSubmitted] = useState(false);
  // const handleChange = (event) => {
  //     setNameSubmitted(false);
  //     setPlayerName(event.target.value);
  // }
  const handleClick = () => {
    // setNameSubmitted(true);
      setPlayerName(refPlayerName.current.value); // basically here you get the input element and have acces to all its attributes
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={refPlayerName} /> {/* oldschool way would include onChange={handleChange}*/}
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
