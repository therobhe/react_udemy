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
    const [fetchedUserInput, setFetchedUserInput] = useState({})
    const [calculatedInvestment, setCalculatedInvestment] = useState({})
    const [showResult, setShowResult] = useState(false)

    const userInputCallback = (keyFromInput, valueFromInput) => {
        const updatedState = {...fetchedUserInput}
        if (valueFromInput === "") {
            delete updatedState[keyFromInput]
        } else {
            updatedState[keyFromInput] = valueFromInput
        }
        setFetchedUserInput(updatedState)

        if (Object.keys(updatedState).length === 4) {
            let calculationRes = calculateInvestmentResults(updatedState)
            setCalculatedInvestment(calculationRes)
            setShowResult(true)
        } else {
            setShowResult(false)
        }
    }

  return (
      <>
        <Header />
        <UserInput onInput={userInputCallback} />
        {!showResult
            ? <h2 className={"center"}>Please enter your data above!</h2>
            : <Result userInput={fetchedUserInput} investmentData={calculatedInvestment} />}
      </>
  )
}

export default App
