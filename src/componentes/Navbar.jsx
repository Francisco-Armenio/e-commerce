import '../index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping"
import { Link } from 'react-router-dom'

const Navbar = () =>{

    return(
        <nav className="navbar">
    <div className="navbar-superior">
        <h1 className="navbar-titulo">
            <Link to="/">NextGen Tech</Link>
        </h1>
        <input type="text" className="buscador-navbar" id="buscador" placeholder="Buscar productos" />
        <div className="carrito">
            <span className="carrito-cantidad">0</span>
            <Link to="/carrito" className="carrito-icono">
                <FontAwesomeIcon icon={faCartShopping} />
            </Link>
        </div>
    </div>
    <div className="navbar-inferior">
        <div className="navbar-menu-izquierda">
            <ul className="navbar-menu-list">
                <li className="navbar-menu-item">
                    <Link to="/categoria/pc" className="navbar-menu-item-link">PC</Link>
                </li>
                <li className="navbar-menu-item">
                    <Link to="/categoria/celulares" className="navbar-menu-item-link">Celulares</Link>
                </li>
                <li className="navbar-menu-item">
                    <Link to="/categoria/componentes" className="navbar-menu-item-link">Componentes de PC</Link>
                </li>
                <li className="navbar-menu-item">
                    <Link to="/categoria/televisores" className="navbar-menu-item-link">Televisores</Link>
                </li>
                <li className="navbar-menu-item">
                    <Link to="/categoria/playstation" className="navbar-menu-item-link">PlayStation</Link>
                </li>
            </ul>
        </div>
        <div className="navbar-menu-derecha">
            <Link to="/favoritos" className="navbar-menu-item-link">Favoritos</Link>
        </div>
    </div>
</nav>

    )

}

export {Navbar}