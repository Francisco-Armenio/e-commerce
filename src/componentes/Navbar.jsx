import '../index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping"


const Navbar = () =>{

    return(
        <div className="navbar">
           <div className="navbar-superior">
            <h1 className="navbar-titulo">NextGen Tech</h1>
            <input type="text" className="buscador-navbar" id="buscador" placeholder="Buscar productos"/>
            <div className='carrito'>
                <span className='carrito-cantidad'>0</span>
                <a href="" className='carrito-icono'><FontAwesomeIcon icon={faCartShopping}/></a>
            </div>
           </div>
           <div className="navbar-inferior">
            <div className="navbar-menu-izquierda">
                <ul className="navbar-menu-list">
                    <li className="navbar-menu-item"><a href="" className="navbar-menu-item-link">PC</a></li>
                    <li className="navbar-menu-item"><a href="" className="navbar-menu-item-link">Celulares</a></li>
                    <li className="navbar-menu-item"><a href="" className="navbar-menu-item-link">Componentes de PC</a></li>
                    <li className="navbar-menu-item"><a href="" className="navbar-menu-item-link">Televisores</a></li>
                    <li className="navbar-menu-item"><a href="" className="navbar-menu-item-link">PlayStation</a></li>
                </ul>
            </div>
            <div className="navbar-menu-derecha">
                <a className="navbar-menu-item-link" href="">Favoritos</a>
            </div>
           </div>
        </div>
    )

}

export {Navbar}