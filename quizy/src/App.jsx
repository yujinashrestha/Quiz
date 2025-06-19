import { useState } from 'react'
import React from 'react'
import './app.css'
import './index.css'
import { useContext } from 'react'
import { quizContext } from './functionalities/context'
import Menu from './components/Menu'
import Game from './components/Game'
import Exit from './components/exit'

function App() {
  const {gameState}=useContext(quizContext)
 
  return (
    <>
      { gameState === "menu" && <Menu /> }
      { gameState === "game" && <Game /> }
      { gameState === "exit" && <Exit/> }
       
      </>
    
  )
}

export default App
