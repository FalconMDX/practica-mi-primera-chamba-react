import "../estilos/Boton.css"

function Boton(props){
    /* Genera boton para el header */
    if (props.location === "header"){
        return(
            <button className={`boton ${props.fondo ? "white" : ""}`}>{props.children}</button>
        )
    }

    /* Genera boton para los textos */
    else if(props.location === "text"){
        return(
            <button className="boton-texto">{props.children}</button>
        )
    }

    /* Genera boton para Subscribe */
    else if(props.location === "subscribe"){
        return(
            <button className="subscribe__button">{props.children}</button>
        )
    }
}

export default Boton