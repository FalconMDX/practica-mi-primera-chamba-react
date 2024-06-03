import Boton from "./Boton"
import "../estilos/Informacion.css"

function Informacion(props){
    return(
        <div className={`info ${props.className}`}>
            {props.children}
            <Boton location="text">{props.textBoton}</Boton>
        </div>
    )
}

export default Informacion