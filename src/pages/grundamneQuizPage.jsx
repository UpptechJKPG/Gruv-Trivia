import { useState, useEffect } from "react"

// Data
import elementSymbolPairs from "../data/elementSymbolPairs"

// Functions
import getRandomNumbers from "../functions/random"

// Global variables
const numberOfElementSymbolPairsQuestions = 4

const GrundamneQuizPage = () => {

  const questions = []
  const [pickedElementSymbolPairs, setPickedElementSymbolPairs] = useState([])

  useEffect(() => {
    const randomNumbers = getRandomNumbers(0, elementSymbolPairs.length - 1, numberOfElementSymbolPairsQuestions)
    const picked = randomNumbers.map((i) => elementSymbolPairs[i])
    setPickedElementSymbolPairs(picked)
  }, [])

  return (
    <div>
      <h1>Grundämnen</h1>
      <div className="quizPage">
          <p className="question"></p>

          <div className="answers">
              <p>Index 0: element: {pickedElementSymbolPairs[0]?.element}   symbol: {pickedElementSymbolPairs[0]?.symbol}</p>
              <p>Index 1: element: {pickedElementSymbolPairs[1]?.element}   symbol: {pickedElementSymbolPairs[1]?.symbol}</p>
              <p>Index 2: element: {pickedElementSymbolPairs[2]?.element}   symbol: {pickedElementSymbolPairs[2]?.symbol}</p>
              <p>Index 3: element: {pickedElementSymbolPairs[3]?.element}   symbol: {pickedElementSymbolPairs[3]?.symbol}</p>
          </div>

          <button>Nästa</button>
      </div>
    </div>
  )
}
  
export default GrundamneQuizPage