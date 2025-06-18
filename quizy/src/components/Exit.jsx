import React, { use } from 'react'
import { useContext } from 'react'  
import { quizContext } from '../functionalities/context'

function Exit() {
    const {score, gameState, setGameState, Num}=useContext(quizContext)
  return (
    <>
    <div>Your Total Score is : {score}/{Num+1}</div>
     <button onClick={()=> {setGameState('game'); setNum(0); setScore(0)}}>Continue the Game</button>
     <button onClick={()=>{setGameState('menu'); setNum(0); setScore(0)}}>Exit</button>
     </>
  )
 
}

export default Exit