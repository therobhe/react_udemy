/**
 * Import components
 */
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
    return (
        <>
            <Header/>
            <main>
                <CoreConcepts />
                <Examples />
            </main>
        </>
    );
}

export default App;