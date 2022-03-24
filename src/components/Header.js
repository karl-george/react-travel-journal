import '../css/Header.css'

const Header = () => {
  return (
    <header className="bg">
      <div className="header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Blank_globe.svg" alt="" className='header-img'/>
        <h1 className='header-title'>my travel journal.</h1>
      </div>
    </header>
  )
}

export default Header