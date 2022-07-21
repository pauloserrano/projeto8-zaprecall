const Header = ({ type, children }) => {

  return (
    <header className={ type }>
        {children}
    </header>
  ) 
}

export default Header