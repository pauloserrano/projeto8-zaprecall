import '../styles/Footer.css'
import icons from '../data/icons'

const Footer = ({ deck, displayIcons }) => {
  return (
    <footer>
      <div>{displayIcons.length}/{deck.length} CONCLUÍDOS</div>
      <ul className="icons">{displayIcons.map(icon => (
        <li className={icon}>{icons[icon]}</li>
      ))}
      </ul>
    </footer>
  )
}

export default Footer