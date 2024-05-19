import Logo from "./Logo"
import "../estilos/Footer.css"
import Subscribe from "./Subscribe"

function Footer(){
    return (
        <footer className="footer">
            <Subscribe />

            <div className="footer__contenedor">
                <div className="footer__info">
                    <Logo
                    type = "logo2"
                    />
                    <p>Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat</p>
                </div>

                <div className="links">
                    <ul className="links__list-general">
                        <ul className="links__list">
                            <li className="list__items"><a href="">Home</a></li>
                            <li className="list__items"><a href="">About</a></li>
                            <li className="list__items"><a href="">Policy</a></li>
                        </ul>
                        <ul className="links__list">
                            <li className="list__items"><a href="">Suport</a></li>
                            <li className="list__items"><a href="">News</a></li>
                            <li className="list__items"><a href="">Refund</a></li>
                        </ul>
                        <ul className="links__list">
                            <li className="list__items"><a href="">Pricing</a></li>
                            <li className="list__items"><a href="">Contact</a></li>
                            <li className="list__items"><a href="">Join</a></li></ul>
                    </ul>

                <p className="copyright">Copyjright @ Humans 2021</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer