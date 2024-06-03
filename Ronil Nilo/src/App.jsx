import './App.css'
import {Navegador} from './componentes/Navegador.jsx'
import { Avatares } from './componentes/Avatares.jsx'
import { Newsleter } from './componentes/Newsleter.jsx'
import {Footer} from './componentes/Footer.jsx'

function App() {

  return (
    <>
      <Navegador 
        imagen="Group 3.png"
        buscador1="Home"
        buscador2="Browse"
        buscador3="Pricing"
        buscador4="Contact"
        buton1="Sign up"
        buton2="Log in"

      
      />
      <div className="seccionPresident flex ">
        <div className="ladoiz h-500 w-200">
          <h2 id="titulo1">President of</h2>
          <h2 id='texnaranja'>Sales</h2>
          <p className=''>$275.00 <s id='textachado'>$350.43</s></p>
          <p className='texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis tellus tincidunt in commodo morbi tristique sit purus. Auctor risus vitae </p>
          <button id="cajaini34">Play now</button> 
        </div>
        <img className="imagen1" src="/richie.png" alt="imagen 1"/>
      </div>
      <div className="seccion3d flex h-800">
        <div className="circulo"></div>
        <img src="/casual-life-3d-14 1.png" alt=" imagen 3D" className="imagen2" />
        <div className="ladoder">
          <h2 id="titulo1">Now in 3D</h2>
          <p className=''>$100.00 <s id='textachado'>$169.43</s></p>
          <p className="texto">Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat </p>
          <button id="cajaini34">Play now</button>
        </div>
      </div>
      <Avatares
        imagen1="Richie_2 1.png"
        imagen2="Richie_1 1.png"
        imagen3="Richie_4 1.png"
      />
      <Newsleter
        texto="suscribe our newsletter"
        ingresar="Enter your email"
        buton="Suscrib now"
      />
      <Footer
      />
      

    </>
  )
}

export default App
