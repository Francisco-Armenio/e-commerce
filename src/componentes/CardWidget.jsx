import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping"
import { Link } from "react-router-dom"

const CardWidget = () => {
  return (
    <div className="carrito">
            <span className="carrito-cantidad">0</span>
            <Link to="/carrito" className="carrito-icono">
                <FontAwesomeIcon icon={faCartShopping} />
            </Link>
    </div>
  )
}

export default CardWidget

