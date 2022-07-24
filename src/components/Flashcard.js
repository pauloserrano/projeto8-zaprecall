import { useState } from 'react'
import { TiArrowLoop } from 'react-icons/ti'
import '../styles/Flashcard.css'

const Flashcard = ({ question, answer, setIsOpen, setQuestionDisplay, setDisplayIcons }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = (answer) => {
    setQuestionDisplay(answer)
    setDisplayIcons(arr => [...arr, answer])
    setIsOpen(false)
  }


  return (
    <li className={isFlipped ? 'card flipped' : 'card'} onClick={() => setIsFlipped(!isFlipped)}>
        <div className="card-face">
            <p>{question}</p>
            <TiArrowLoop size='40px'/>
        </div>
        <div className="card-back">
            <p>{answer}</p>
            <div className="performance">
                <button style={btnStyles.bad} onClick={() => handleClick('bad')}>Não lembrei</button>
                <button style={btnStyles.ok} onClick={() => handleClick('ok')}>Quase não lembrei</button>
                <button style={btnStyles.good} onClick={() => handleClick('good')}>Zap!</button>
            </div>
        </div>
    </li>
  )
}

const btnStyles = {
  bad: {backgroundColor: 'var(--secondary-red)'},
  ok: {backgroundColor: 'var(--primary-orange)'},
  good: {backgroundColor: 'var(--primary-green)'},
}

export default Flashcard