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
  const [compraRealizada, setCompraRealizada] = useState(false); // Estado para controlar el mensaje de agradecimiento
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

    console.log(orden); // Aquí puedes agregar lógica para enviar los datos a un servidor si lo deseas

    // Vaciar el carrito después de la compra
    vaciarCarrito();

    // Cambiar el estado para mostrar el mensaje de agradecimiento
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
          <h2>¡Gracias por tu compra!</h2>
          <p>Tu pedido ha sido procesado con éxito.</p>
          <button onClick={() => navigate("/")}>Volver al inicio</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
