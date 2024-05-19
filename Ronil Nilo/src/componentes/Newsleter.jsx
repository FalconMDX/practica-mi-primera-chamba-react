import React from "react";
import '../estilos/Newsleter.css'
export function Newsleter(props){
  return (
    <div className="suscri">
      <h2 className="textogra text-center">{props.texto}</h2>
      <div className="informacion ">
        <input className="ingre " type="gmail" placeholder={props.ingresar} />
        <button className="sus">{props.buton}</button>
      </div>
    </div>
  )
}