import { useState } from "react"


const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [direccion, setDireccion] = useState("")
    const [email, setEmail] = useState("")

    const handleChangeNombre = (event) =>{
        setNombre(event.target.value)
    }

    const handleChangeDireccion = (event) =>{
        setDireccion(event.target.value)
    }

    const handleChangeEmail = (event) =>{
        setEmail(event.target.value)
    }

    const handleSubmitForm = (event) =>{
        event.preventDefault()

        const usuario =  {nombre, direccion, email}
        console.log(usuario)

        setNombre("")
        setDireccion("")
        setEmail("")
    }

  return (
    <form onSubmit={handleSubmitForm}>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={handleChangeNombre} placeholder="Ingresa tu nombre" />

        <label>Direccion:</label>
        <input type="text" value={direccion} onChange={handleChangeDireccion} placeholder="Ingresa tu direccion"  />

        <label>Email:</label>
        <input type="email" value={email} onChange={handleChangeEmail} placeholder="Ingresa tu email"  />

        <button type="submit">Enviar formulario</button>
    </form>
  )
}

export default Formulario