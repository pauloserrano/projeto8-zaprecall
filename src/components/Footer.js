import '../styles/Footer.css'
import icons from '../data/icons'

const Footer = ({ deck, displayIcons, setDisplayIcons, setHasStarted }) => {
  let resultDisplay

  if (displayIcons.length === deck.length){
    const badResult = displayIcons.filter(icon => icon === 'bad').length > 0
    
    if (!badResult){
      resultDisplay = <>
        <p>🥳 <strong>Parabéns</strong></p>
        <p>Você não esqueceu de nenhum flashcard!</p>
      </>
    } else {
      resultDisplay = <>
      <p>😥 <strong>Putz...</strong></p>
      <p>Ainda faltam alguns... Mas não desanime!</p>
    </>
    }
  }

  const handleRestart = () => {
    setHasStarted(false)
    setDisplayIcons([])
  }

  return (
    <footer class="results-container">
      {resultDisplay}
      <div>{displayIcons.length}/{deck.length} CONCLUÍDOS</div>
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