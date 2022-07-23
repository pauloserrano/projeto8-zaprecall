import '../styles/Footer.css'

const Footer = ({ deck, displayIcons }) => {
  return (
    <footer>
      <div>{displayIcons.length}/{deck.length} CONCLUÍDOS</div>
    </footer>
  )
}

export default Footer