import React from "react";
import '../estilos/Avatares.css'
export function Avatares(props){
  return (
    <div className="seccionavatares flex h-400">
      <img src={props.imagen1} alt="imagens" className="imgen4 inset-x-100 h" />
      <img src={props.imagen2}  alt="imagen5" className="imagenes" />
      <img src={props.imagen3}  alt="imagen5" className="imagenes" />
    </div>
  )
}