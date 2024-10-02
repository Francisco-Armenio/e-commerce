import { useState } from "react"
import Contador from "./contador"

const Ejemplocontador = () => {
    const [contador, setContador] = useState(1)

    const restarContador = () =>{
        setContador(contador - 1)
    }

    const aumentarContador = () => {
        setContador(contador + 1)
    }

  return (
    <Contador contador={contador} aumentarContador={aumentarContador} restarContador={restarContador} />
  )
}

export default Ejemplocontador