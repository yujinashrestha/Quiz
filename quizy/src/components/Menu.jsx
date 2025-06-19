import React from 'react'
import { useContext } from 'react'
import { quizContext } from '../functionalities/context'

function Menu() {
  const {setGameState} = useContext(quizContext)
  return (
    <>
    <div className='flex flex-col items-center justify-center h-[100%] w-3xl  gap-4 m-auto'>
      <div className='text-3xl font-bold text-center'>Quiz App</div>
    
    <button className='w-40 rounded-3xl' onClick={()=>setGameState('game') }>Start Quiz</button>
    </div>
    </>
  )
}

export default Menu