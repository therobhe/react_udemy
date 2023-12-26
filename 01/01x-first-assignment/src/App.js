/**
 * Import assets
 */
import keyConceptsImage from './assets/images/key-concepts.png';

/**
 * Import data
 */
import conceptData from "./assets/data/concepts";

/**
 * Import components
 */
import Concepts from "./components/Concepts";
import Heading from "./components/Heading";

/**
 * App
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  return (
    <div>
        <Heading imgsrc={keyConceptsImage} />
        <Concepts data={conceptData} />
    </div>
  );
}

export default App;
