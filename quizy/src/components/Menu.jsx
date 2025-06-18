import React from 'react'
import { useContext } from 'react'
import { quizContext } from '../functionalities/context'

function Menu() {
  const {setGameState} = useContext(quizContext)
  return (
    <>
    <div>menu</div>
    <button className='w-3xs rounded-3xl' onClick={()=>setGameState('game') }>Start Quiz</button>
    </>
  )
}

export default Menu