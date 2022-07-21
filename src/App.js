import { useState } from "react"
import Header from "./components/Header"
import Cards from "./components/Cards"

/* ICONS */
// BsPlay
// BsCheckCircleFill  
// BsFillCheckCircleFill
// BsFillQuestionCircleFill
// BsFillXCircleFill
// TiArrowLoop

const App = () => {
  const [hasStarted, setHasStarted] = useState(true)

  return (
    <>
      <Header type={hasStarted ? 'small' : 'big'}>ZapRecall</Header>
      {/* <button className="btn-start" onClick={() => setHasStarted(true)}>Iniciar Recall</button> */}
      <main>
        <Cards />
      </main>
    </>
  )
}

export default App