import Informacion from "./Informacion"
import "../estilos/Caja.css"

function Caja(props){

    /* Muestra un div con la información en la izquierda */
    if (props.direction === "left"){
        return(
            <div className={`caja ${props.className}`}>
                <Informacion className={props.direction} textBoton={props.textBoton}>
                    {props.children}
                </Informacion>

                <div className={`contenedor-imagen imagen--${props.className}`}>
                    <div className={`figura-${props.className}`}></div>
                    <img className={`imagen-${props.className}`} src={props.src} alt="" />
                </div>
            </div>
        )
    }

    /* Muestra un div con la información en la derecha */
    else if (props.direction === "right"){
        return(
            <div className={`caja ${props.className}`}>
                <div className={`contenedor-imagen imagen--${props.className}`}>
                    <div className={`figura-${props.className}`}></div>
                    <img className={`imagen-${props.className}`} src={props.src} alt="" />
                </div>
                
                <Informacion className={props.direction} textBoton={props.textBoton}>
                    {props.children}
                </Informacion>
            </div>
        )
    }
}

export default Caja