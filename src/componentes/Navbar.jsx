import '../index.css'
import { Link } from 'react-router-dom'
import CardWidget from './CardWidget'

const Navbar = () =>{

    return(
        <nav className="navbar">
    <div className="navbar-superior">
        <h1>
            <Link to="/" className="navbar-titulo">NextGen Tech</Link>
        </h1>
        <div>
            <CardWidget/>
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
    </div>
</nav>

    )

}

export {Navbar}