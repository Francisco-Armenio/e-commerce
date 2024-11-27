import { useContext, useState } from "react";
import FormularioCheckout from "./FormularioCheckout";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const [compraRealizada, setCompraRealizada] = useState(false); 
  const navigate = useNavigate();

  const handleChangeInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const orden = {
      comprador: { ...datosForm },
      productos: [...carrito],
      total: precioTotal(),
    };

    console.log(orden); 

    vaciarCarrito();

    setCompraRealizada(true);
  };

  return (
    <div>
      {!compraRealizada ? (
        <FormularioCheckout
          datosForm={datosForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      ) : (
        <div className="mensaje-agradecimiento">
          <h2 className="texto-compra">¡Gracias por tu compra!</h2>
          <p className="parrafo-de-aviso">Tu pedido ha sido procesado con éxito.</p>
          <button onClick={() => navigate("/")} className="volver-pagina-principal">Volver al inicio</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
