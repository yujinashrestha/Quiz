import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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
