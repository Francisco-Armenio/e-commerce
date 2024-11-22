import { useState } from "react";

const FormularioCheckout = ({ datosForm, handleChangeInput, handleSubmitForm }) => {
  const [emailConfirm, setEmailConfirm] = useState(""); 
  const [error, setError] = useState(""); 

  const handleEmailConfirmChange = (e) => {
    setEmailConfirm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (datosForm.email !== emailConfirm) {
      setError("Los correos electrónicos no coinciden.");
      return;
    }

    setError("");
    handleSubmitForm(e);
  };

  return (
    <form onSubmit={handleFormSubmit} className="form-checkout">
      <label>Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={datosForm.nombre}
        onChange={handleChangeInput}
        required
      />

      <label>Teléfono:</label>
      <input
        type="number"
        name="telefono"
        value={datosForm.telefono}
        onChange={handleChangeInput}
        required
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={datosForm.email}
        onChange={handleChangeInput}
        required
      />

      <label>Confirmar Email:</label>
      <input
        type="email"
        name="emailConfirm"
        value={emailConfirm}
        onChange={handleEmailConfirmChange}
        required
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Enviar orden</button>
    </form>
  );
};

export default FormularioCheckout;
