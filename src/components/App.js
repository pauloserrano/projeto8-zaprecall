import { useEffect, useState } from 'react'

// Components
import Header from './Header'
import Main from './Main'
import Questions from './Questions'
import Footer from './Footer'

// Decks
import decks from "../data/decks"
import api from "../services/axios"

//Images
import logoLarge from '../assets/images/logo-grande.svg'

// CSS
import '../styles/reset.css'
import '../styles/App.css'


const App = () => {
  const [hasStarted, setHasStarted] = useState(false)
  const [displayIcons, setDisplayIcons] = useState([])
  const [availableDecks, setAvailableDecks] = useState(decks)
  const [deck, setDeck] = useState(availableDecks[0])
  const [goal, setGoal] = useState(undefined)
  
  useEffect(() => {
    api.buzzquizz.get().then(({data}) => {
      const apiDecks = data.map(quiz => {
        return {
          value: `${quiz.id}`,
          name: quiz.title,
          cards: quiz.questions.map(question => {
            const correctAnswer = question.answers.find(answer => answer.isCorrectAnswer === true)

            return {
              question: question.title,
              answer: correctAnswer.text
            }
          })
        }
      })
      setAvailableDecks(arr => [...arr, ...apiDecks])
    }).catch(err => console.error(err))
  }, [])


  const shuffle = (deck) => {
    const negativeAllower = 0.5
    return deck.sort(() => (Math.random() - negativeAllower))
  }


  const handleRestart = () => {
    setDisplayIcons([])
    setDeck(availableDecks[0])
    setGoal(undefined)
    setHasStarted(false)
  }


  const handleStart = () => {
    if (!deck.cards){
      alert('Selecione um deck válido')
      return

    } else if (goal < 1 || goal > deck.cards.length || goal === undefined){
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
              onChange={(e) => setDeck(availableDecks.find(deck => deck.value === e.target.value))}>
              {availableDecks.map((deck, id) => (<option key={id} value={deck.value}>{deck.name}</option>))}
            </select>
            <input 
              type="number" 
              value={goal} 
              max={deck.length} 
              min={1} 
              placeholder={`Digite sua meta de zaps`}
              onChange={e => setGoal(e.target.value)} 
            />
            {deck.cards && (<p className="goal-max">(máx:{deck.cards && deck.cards.length})</p>)}
            <button className="start-btn" onClick={handleStart}>Iniciar Recall</button>
          </>
        }
      </Main>
    </>
  )
}

export default App