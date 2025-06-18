import React, { useContext } from 'react'
import { quizContext } from '../functionalities/context'

function Game() {
    const questions=[
        {
            question:"What is the capital of France?",
            options:["Paris", "London", "Berlin", "Madrid" ],
            answer:"Paris"
        }, 
        {
            question:"Who wrote 'Romeo and Juliet?'",
            options:["Mark Twain", "William Shakespeare", "Charles Dickens", "Ernest Hemingway"],
            answer:"William Shakespeare"
        },
        {
            question:"What is the largest planet in our solar system?",
            options:["Earth", "Mars", "Jupiter", "Saturn"],
            answer:"Jupiter"
        },
        {
            question:"What is the chemical symbol for water?",
            options:["H2O", "CO2", "O2", "NaCl"],
            answer:"H2O"
        },
        {
            question:"Who painted the Mona Lisa?",
            options:["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            answer:"Leonardo da Vinci"
        },
        {
            question:"What is the capital of Japan?",
            options:["Tokyo", "Seoul", "Beijing", "Bangkok"],
            answer:"Tokyo"
        },
        {
            question:"What is the largest mammal in the world?",
            options:["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            answer:"Blue Whale"
        },
        {
            question:"Who discovered penicillin?",
            options:["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Albert Einstein"],
            answer:"Alexander Fleming"
        },
        {
            question:"What is the smallest country in the world?",
            options:["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            answer:"Vatican City"
        },
        {
            question:"What is the main ingredient in guacamole?",
            options:["Tomato", "Avocado", "Onion", "Pepper"],
            answer:"Avocado"
        }
       
    ]
    const {Num, setNum, selectedAnswers, setSelectedAnswers, score, setScore, gameState, setGameState}=useContext(quizContext)

  return (
    <div className='container'>
        <h1 className='text-3xl font-bold mb-4'>Quiz Game</h1>
        
        <div>{questions[Num].question}</div>
     <div className="Options">
  {questions[Num].options.map((option, index) => (
    <label
      key={index}
      className={`block border rounded px-4 py-2 m-2 cursor-pointer ${
        selectedAnswers === option ? "bg-blue-500 text-white" : "bg-white text-black"
      }`}
    >
      <input
        type="radio"
        name="option"
        value={option}
        checked={selectedAnswers === option}
        onChange={() => {setSelectedAnswers(option);
            option===questions[Num].answer && setScore(score+1);
            if (Num === questions.length - 1) {
            setGameState('exit');
           
            
} 
         }
            }
        
        className="hidden"
      />
      {index + 1}. {option}
    </label>
    
  ))}
</div>

        <button onClick={()=> setNum(Num+1)}>Next</button>


    </div>
  )
}

export default Game