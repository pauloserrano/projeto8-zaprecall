import { useState } from 'react'

import Flashcard from './Flashcard'
import QuestionPrompt from './QuestionPrompt'
import '../styles/Question.css'

const Question = ({ question, answer, setDisplayIcons }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [questionDisplay, setQuestionDisplay] = useState('play')

  return (
    <>
      {isOpen 
      ? <Flashcard 
          answer={answer} 
          question={question} 
          setIsOpen={setIsOpen} 
          setQuestionDisplay={setQuestionDisplay} 
          setDisplayIcons={setDisplayIcons}
        />
      : <QuestionPrompt 
          setIsOpen={setIsOpen}
          questionDisplay={questionDisplay}
        />
      }
    </>
  )
}

export default Question