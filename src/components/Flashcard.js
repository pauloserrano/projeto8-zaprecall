import { useState } from 'react'
import { TiArrowLoop } from 'react-icons/ti'
import '../styles/Flashcard.css'

const Flashcard = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <li className={isFlipped ? 'card flipped' : 'card'} onClick={() => setIsFlipped(!isFlipped)}>
        <div className="card-face">
            <p>O que é JSX?</p>
            <TiArrowLoop size='40px'/>
        </div>
        <div className="card-back">
            <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
            <div className="performance">
                <button style={{backgroundColor: 'var(--secondary-red)'}}>Não lembrei</button>
                <button style={{backgroundColor: 'var(--primary-orange)'}}>Quase não lembrei</button>
                <button style={{backgroundColor: 'var(--primary-green)'}}>Zap!</button>
            </div>
        </div>
    </li>
  )
}

export default Flashcard