import "../estilos/Subscribe.css"
import Boton from "./Boton"

function Subscribe(){
    return(
        <div className="subscribe">
            <h2>Subscribe our newsletter</h2>
            <div className="cont">
                <input className="subscribe__input" type="email" placeholder="Enter your email"/>
                <Boton location="subscribe">Subscribe now</Boton>
            </div>
        </div>
    )
}

export default Subscribe