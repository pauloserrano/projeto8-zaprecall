import { useState } from 'react'
import { TiArrowLoop } from 'react-icons/ti'

const Card = () => {
    const [isFlipped, setIsFlipped] = useState(false)

  return (
    <li className={isFlipped ? 'flipped' : ''} onClick={() => setIsFlipped(!isFlipped)}>
        <div className="card-front" onClick={() => setIsFlipped(true)}>
            <div>O que é JSX?</div>
            <TiArrowLoop size='2em' style={{transform: 'rotate(180deg)'}}/>
        </div>
        <div className="card-back" onClick={() => setIsFlipped(true)}>
            <div>Uma extensão de linguagem do JavaScript</div>
            <div className="answers">
                <button style={{backgroundColor: '#FF3030', color: 'white'}}>Não lembrei</button>
                <button style={{backgroundColor: '#FF922E', color: 'white'}}>Quase não lembrei</button>
                <button style={{backgroundColor: '#2FBE34', color: 'white'}}>Zap!</button>
            </div>
        </div>
    </li>
  )
}

export default Card