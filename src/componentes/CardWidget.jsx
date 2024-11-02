import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CardWidget = () => {
  const { cantidadTotal}  = useContext(CartContext)

  return (
    <div className="carrito">
            <span className="carrito-cantidad">{ cantidadTotal() }</span>
            <Link to="/cart" className="carrito-icono">
                <FontAwesomeIcon icon={faCartShopping} />
            </Link>
    </div>
  )
}

export default CardWidget

