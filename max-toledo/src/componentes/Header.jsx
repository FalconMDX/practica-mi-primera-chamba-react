import Logo from "./Logo"
import Boton from "./Boton"
import "../estilos/Header.css"

function Header(){
  return(
    <header>
        <Logo type="logo1" />

        <div className="nav">
          <ul className="nav__list">
            <li className="list__item"><a href="">Home</a></li>
            <li className="list__item"><a href="">Browse</a></li>
            <li className="list__item"><a href="">Pricing</a></li>
            <li className="list__item"><a href="">Contact</a></li>
          </ul>
        </div>

        <div className="contenedor-botones">
          <Boton location="header">Sign up</Boton>
          <Boton location="header" fondo={true}>Log in</Boton>
        </div>
    </header>
  )
}

export default Header