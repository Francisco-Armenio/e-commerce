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
            <label className="confirmar-nombre">Nombre:</label>
            <input
                type="text"
                name="nombre"
                value={datosForm.nombre}
                onChange={handleChangeInput}
                required
                title="Por favor, ingresa su nombre."
                onInvalid={(e) => e.target.setCustomValidity('Por favor, ingresa su nombre.')}
                onInput={(e) => e.target.setCustomValidity('')}
            />

            <label className="confirmar-telefono">Teléfono:</label>
            <input
                type="tel"
                name="telefono"
                value={datosForm.telefono}
                onChange={handleChangeInput}
                required
                maxlength="10" 
                pattern="^\d{10}$" 
                title="Por favor, ingresa un número de teléfono válido."
                onInvalid={(e) => e.target.setCustomValidity('Por favor, ingresa un número de teléfono válido.')}
                onInput={(e) => e.target.setCustomValidity('')}
            />

            <label className="confirmar-email">Email:</label>
            <input
                type="email"
                name="email"
                value={datosForm.email}
                onChange={handleChangeInput}
                required
                title="Por favor, ingresa un Email válido."
                onInvalid={(e) => e.target.setCustomValidity('Por favor, ingresa un Email válido.')}
                onInput={(e) => e.target.setCustomValidity('')}
            />

            <label className="confirmar-correctamente-email">Confirmar Email:</label>
            <input
                type="email"
                name="emailConfirm"
                value={emailConfirm}
                onChange={handleEmailConfirmChange}
                required
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit" className="confirmar-compra">Confirmar compra</button>
        </form>
    );
};

export default FormularioCheckout;
