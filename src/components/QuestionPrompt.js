import { BsPlay } from 'react-icons/bs'
import { BsCheckCircleFill } from 'react-icons/bs'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { BsFillXCircleFill } from 'react-icons/bs'


const QuestionPrompt = ({ setIsOpen, questionDisplay }) => {
    const size = 24
    const icons = {
        'good': <BsCheckCircleFill size={size + 'px'} />,
        'ok': <BsFillQuestionCircleFill size={size + 'px'} />,
        'bad': <BsFillXCircleFill size={size + 'px'} />,
        'play': <BsPlay size={size + 16 + 'px'} style={{left: '10px'}} />,
    }

  return (
    <li onClick={() => setIsOpen(true)} className={questionDisplay}>
        <span>Pergunta</span>
        {icons[questionDisplay]}
    </li>
  )
}

export default QuestionPrompt