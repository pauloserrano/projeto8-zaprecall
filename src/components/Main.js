import '../styles/Main.css'

const Main = ({ children, screen }) => {
  return (
    <main className={screen}>
      {children}
    </main>
  )
}

export default Main