import { useState } from 'react'

import './reset.css'
import './App.css'

import Header from './components/Header'
import Main from './components/Main'
import Questions from './components/Questions'
import Footer from './components/Footer'
import deck from "./services/decks"

const App = () => {
  const [displayIcons, setDisplayIcons] = useState([])

  return (
    <>
      <Header />
      <Main>
        <Questions deck={deck} setDisplayIcons={setDisplayIcons} />
        <Footer deck={deck} displayIcons={displayIcons} />
      </Main>
    </>
  )
}

export default App