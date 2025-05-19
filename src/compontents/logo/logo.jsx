
import logoImg from '../../assets/logo.png'

import "./logo.css"

function Logo() {
  return (
    <div className='container'>
      <img src={logoImg} alt="Logo" />
      <div className='text'>
        <h4>Rankfolio</h4>
        <p>gana tu puesto</p>
        </div>
    </div>
  )
}

export default Logo
