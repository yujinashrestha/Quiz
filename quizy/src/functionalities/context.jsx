import React, { useState } from 'react'
import { createContext } from 'react'
export const quizContext = createContext()

export default function ContextProvider({ children }) {
  const [gameState, setGameState] = useState("menu")
  const [quizData, setQuizData] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [Num, setNum]=useState(0)

  return (
    <quizContext.Provider value={{
      gameState,
      setGameState,
      quizData,
      setQuizData,
      currentQuestionIndex,
      setCurrentQuestionIndex,
      score,
      setScore,
      selectedAnswers,
      setSelectedAnswers,
      Num,
      setNum
    }}>
      {children}
    </quizContext.Provider>
  )
}