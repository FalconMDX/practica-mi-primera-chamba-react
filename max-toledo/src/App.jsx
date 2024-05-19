import './App.css'
import Header from './componentes/Header'
import Caja from './componentes/Caja'
import Footer from './componentes/Footer'

function App() {
  return (
    <>
      <Header type="logo1" />

      <Caja className="first" src="/Imagen_2.png" direction="left" textBoton="Play now">
        <h2>Presiden of <span>Sales</span></h2>
        <p className='price'>$275.00  <span className='last-price'>$350.43</span></p>
        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipsicing elit. Sagittis tellus tincidunt in commondo morbi tristique sit purus. Auctor risus vitae</p>
      </Caja>

      <Caja className="second" src="/Imagen_3.png" direction="right" textBoton="Play now">
      <h2>Now in <span>3D</span></h2>
        <p className='price'>$100.00  <span className='last-price'>$169.43</span></p>
        <p className='text'>Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat</p>
      </Caja>

      <div className="imagenes flex justify-center">
        <img className='imagenes_items' src="/Imagen_4.png" alt="" />
        <img className='imagenes_items img--center' src="/Imagen_5.png" alt="" />
        <img className='imagenes_items' src="/Imagen_6.png" alt="" />
      </div>

      <Footer />
    </>
  )
}

export default App
