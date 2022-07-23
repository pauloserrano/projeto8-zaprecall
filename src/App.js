import { useState } from 'react'


import Header from './components/Header'
import Main from './components/Main'
import Questions from './components/Questions'
import Footer from './components/Footer'
import deck from "./services/decks"

import logoLarge from './assets/images/logo-grande.svg'
import './reset.css'
import './App.css'


const App = () => {
  const [started, setStarted] = useState(false)
  const [displayIcons, setDisplayIcons] = useState([])
  
  const shuffle = (deck) => {
    return deck.sort(() => (Math.random() - 0.5))
  }

  return (
    <>
      <Main>
        {started 
          ? <>
            <Header />
            <Questions deck={deck} setDisplayIcons={setDisplayIcons} />
            <Footer deck={shuffle(deck)} displayIcons={displayIcons} />
          </>
          : <>
            <img src={logoLarge} />
            <h1 className='logo-text'>ZapRecall</h1>
            <button className="start-btn" onClick={() => setStarted(true)}>Iniciar Recall</button>
          </>
        }
      </Main>
    </>
  )
}

export default App