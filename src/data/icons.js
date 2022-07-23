import { BsPlay } from 'react-icons/bs'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { BsFillXCircleFill } from 'react-icons/bs'

const icons = {
    'good': <BsFillCheckCircleFill size={24 + 'px'} />,
    'ok': <BsFillQuestionCircleFill size={24 + 'px'} />,
    'bad': <BsFillXCircleFill size={24 + 'px'} />,
    'play': <BsPlay size={40 + 'px'} style={{left: '10px'}} />,
}

export default icons