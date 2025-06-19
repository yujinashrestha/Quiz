import React, { use } from 'react'
import { useContext } from 'react'  
import { quizContext } from '../functionalities/context'

function Exit() {
    const {score, gameState, setGameState, Num}=useContext(quizContext)
  return (
    <>
    <div className='flex flex-col items-center justify-center h-[100%] w-3xl  gap-4 m-auto'>
    <h1>Your Total Score is : {score}/{Num+1}</h1>
    <div className='flex flex-col items-center justify-center gap-4 mt-7'>
     <button onClick={()=> {setGameState('game'); setNum(0); setScore(0)}}>Continue the Game</button>
     <button className="w-[200px] " onClick={()=>{setGameState('menu'); setNum(0); setScore(0)}}>Exit</button>
     </div>
     </div>
     </>
  )
 
}

export default Exit