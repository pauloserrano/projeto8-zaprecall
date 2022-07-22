import Question from './Question'
import '../styles/Main.css'
import Flashcard from './Flashcard'

const Main = () => {
  return (
    <main>
        <ol>
            <Question />
            <Flashcard />
        </ol>
    </main>
  )
}

export default Main