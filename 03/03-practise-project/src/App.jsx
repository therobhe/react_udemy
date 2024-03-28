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
    let calculatedInvestment = calculateInvestmentResults((fetchedData))

    const userInputCallback = (keyFromInput, valueFromInput) => {
        const updatedState = {...fetchedData}
              updatedState[keyFromInput] = valueFromInput
              setFetchedData(updatedState)

        if (Object.keys(fetchedData).length === 4) {
            calculatedInvestment = calculateInvestmentResults(fetchedData)
        }
    }

  return (
      <>
        <Header />
        <UserInput onInput={userInputCallback} />
        <Result investmentData={calculatedInvestment} />
      </>
  )
}

export default App
