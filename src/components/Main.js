import '../styles/Main.css'

const Main = ({ children, type }) => {
  return (
    <main className={type}>
      {children}
    </main>
  )
}

export default Main