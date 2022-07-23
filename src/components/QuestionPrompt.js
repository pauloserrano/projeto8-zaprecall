import icons from '../data/icons'


const QuestionPrompt = ({ setIsOpen, questionDisplay }) => {
    

  return (
    <li onClick={() => setIsOpen(true)} className={questionDisplay}>
        <span>Pergunta</span>
        {icons[questionDisplay]}
    </li>
  )
}

export default QuestionPrompt