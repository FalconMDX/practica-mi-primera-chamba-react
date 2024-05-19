import React from "react";
import "../estilos/Navegador.css"
export function Navegador(props){
  return (
    <header className="encabezado flex">
      <img src={props.imagen} alt="logo" className="logo" />
      <div className='icoderecho flex'>
        <ul className="iconos flex">
          <li><a>{props.buscador1}</a></li>
          <li><a>{props.buscador2}</a></li>
          <li><a>{props.buscador3}</a></li>
          <li><a>{props.buscador4}</a></li>
        </ul>
        <div id="log">
          <button id="cajaini">{props.buton1}</button>
          <button id="cajaini2">{props.buton2}</button>
        </div>
      </div>
        
    </header>
  )
}