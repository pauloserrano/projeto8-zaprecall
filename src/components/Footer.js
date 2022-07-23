import '../styles/Footer.css'
import icons from '../data/icons'

const Footer = ({ deck, goal, displayIcons, handleRestart }) => {
  let resultDisplay

  if (displayIcons.length === deck.length){
    const goodResult = displayIcons.filter(icon => icon !== 'bad').length >= goal
    
    if (goodResult){
      resultDisplay = <>
        <p>🥳 <strong>Parabéns</strong></p>
        <p>Você bateu a meta de flashcards!</p>
      </>
    } else {
      resultDisplay = <>
      <p>😥 <strong>Putz...</strong></p>
      <p>Ainda faltam alguns... Mas não desanime!</p>
    </>
    }
  }

  return (
    <footer className="results-container">
      {resultDisplay}
      <div><strong>{displayIcons.length}/{deck.length} CONCLUÍDOS</strong></div>
      <div>(Meta de acertos: {goal})</div>
      {displayIcons.length > 0
        ? <>
          <ul className="icons">{displayIcons.map(icon => (
          <li className={icon}>{icons[icon]}</li>
        ))}
        </ul>
        </>
        : ''
      }
      {resultDisplay && <button onClick={handleRestart} className='restart-btn'>REINICIAR RECALL</button>}
    </footer>
  )
}

export default Footer