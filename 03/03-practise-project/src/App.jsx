import Header from './components/sections/Header.jsx'
import UserInput from './components/sections/UserInput.jsx'
import Result from './components/sections/Result.jsx'
import { useState } from "react"
import { calculateInvestmentResults } from "./util/investment.js";
function App() {
    /**
     * Get values from UserInput and send them to results
     *
     * Fetch input data, send them into array-function, loop through array and format data in result
     */
    const [fetchedData, setFetchedData] = useState({})
    const [showResult, setShowResult] = useState(false)
    let calculatedInvestment = calculateInvestmentResults((fetchedData))

    const userInputCallback = (keyFromInput, valueFromInput) => {
        const updatedState = {...fetchedData}
        if (valueFromInput === "") {
            delete updatedState[keyFromInput]
        } else {
            updatedState[keyFromInput] = valueFromInput
        }
        setFetchedData(updatedState)

        if (Object.keys(updatedState).length === 4) {
            calculatedInvestment = calculateInvestmentResults(updatedState)
            setShowResult(prev => !prev)
        } else {
            setShowResult(false)
        }
    }

  return (
      <>
        <Header />
        <UserInput onInput={userInputCallback} />
        {!showResult
            ? <h2 className={"center"}>Please enter you data above</h2>
            : <Result investmentData={calculatedInvestment} />}
      </>
  )
}

export default App
