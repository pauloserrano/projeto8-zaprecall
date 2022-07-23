import { useState } from 'react'

// Components
import Header from './Header'
import Main from './Main'
import Questions from './Questions'
import Footer from './Footer'

// Decks
import decks from "../services/decks"

//Images
import logoLarge from '../assets/images/logo-grande.svg'

// CSS
import '../styles/reset.css'
import '../styles/App.css'


const App = () => {
  const [hasStarted, setHasStarted] = useState(false)
  const [displayIcons, setDisplayIcons] = useState([])
  const [deck, setDeck] = useState(decks[0])
  const [goal, setGoal] = useState()


  const shuffle = (deck) => {
    return deck.sort(() => (Math.random() - 0.5))
  }

  const handleRestart = () => {
    setHasStarted(false)
    setDisplayIcons([])
  }

  const handleStart = () => {
    console.log(deck)
    if (!deck.cards){
      alert('Selecione um deck válido')
      return

    } else if (goal < 1 || goal > deck.length || goal === undefined){
      alert(`Insira uma meta de zaps válida`)
      return
    } 

    setHasStarted(true)
  }

  return (
    <>
      <Main type={!hasStarted && 'start-screen'}>
        {hasStarted 
          ? <>
            <Header />
            <Questions 
              deck={shuffle(deck.cards)} 
              setDisplayIcons={setDisplayIcons} 
            />
            <Footer 
              deck={deck.cards} 
              goal={goal}
              displayIcons={displayIcons} 
              handleRestart={handleRestart}
            />
          </>
          : <>
            <img src={logoLarge} alt='logo' />
            <h1 className='logo-text'>ZapRecall</h1>
            <select 
              value={deck.value} 
              onChange={(e) => setDeck(decks.find(deck => deck.value === e.target.value))}>
              {decks.map((deck, id) => (<option key={id} value={deck.value}>{deck.name}</option>))}
            </select>
            <input 
              type="number" 
              value={goal} 
              max={deck.length} 
              min={1} 
              placeholder={'Digite sua meta de zaps...'} 
              onChange={e => setGoal(e.target.value)} 
            />
            <button className="start-btn" onClick={handleStart}>Iniciar Recall</button>
          </>
        }
      </Main>
    </>
  )
}

export default App