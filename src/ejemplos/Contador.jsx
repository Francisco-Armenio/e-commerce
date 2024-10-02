const Contador = ({contador, aumentarContador, restarContador}) => {
  return (
    <div>
        <button onClick={restarContador}>-</button>
        <p>Contador: {contador}</p>
        <button onClick={aumentarContador}>+</button>
    </div>
  )
}

export default Contador