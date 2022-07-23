import { useState } from 'react'

import Header from './Header'
import Main from './Main'
import Questions from './Questions'
import Footer from './Footer'
import deck from "../services/decks"

import logoLarge from '../assets/images/logo-grande.svg'
import '../styles/reset.css'
import '../styles/App.css'


const App = () => {
  const [hasStarted, setHasStarted] = useState(false)
  const [displayIcons, setDisplayIcons] = useState([])
  
  const shuffle = (deck) => {
    return deck.sort(() => (Math.random() - 0.5))
  }

  return (
    <>
      <Main screen={hasStarted ? 'recall' : 'start-screen'}>
        {hasStarted 
          ? <>
            <Header />
            <Questions 
              deck={deck} 
              setDisplayIcons={setDisplayIcons} 
            />
            <Footer 
              deck={shuffle(deck)} 
              displayIcons={displayIcons} 
              setDisplayIcons={setDisplayIcons} 
              setHasStarted={setHasStarted} 
            />
          </>
          : <>
            <img src={logoLarge} />
            <h1 className='logo-text'>ZapRecall</h1>
            <button className="start-btn" onClick={() => setHasStarted(true)}>Iniciar Recall</button>
          </>
        }
      </Main>
    </>
  )
}

export default App