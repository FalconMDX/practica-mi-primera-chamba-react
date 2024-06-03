import React from "react";
import "../estilos/Footer.css"
export function Footer(){
  return (
    <footer className="piepagina  ">
        <div className="information flex">
            <div className="izquierdo">
                <img src="/Group 9.png" alt="imagen pie de pagina" className="imagenfinal" />
                <p className="textp h-50 w-100">Ask CDCR San quinting State Prison 2008. We installed Purex dispensers throughout the prision to conbat</p>
            </div>
            
            <div className="bloque1 felx">
                <ul className="Iconos">
                    <li>Home</li>
                    <li>About</li>
                    <li>Policy</li>
                </ul>
                <ul className="Iconos">
                    <li> Support</li>
                    <li>News</li>
                    <li>Refund</li>
                </ul>
                <ul className="Iconos">
                    <li>Pricing</li>
                    <li>Contact</li>
                    <li>Join</li>
                </ul>
            </div>

        </div>
        
        <div className="pie">
        <p className="piede ">roni366@gmail.com</p>
        </div>
        
    </footer>
  )
}