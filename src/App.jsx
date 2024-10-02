import { useState } from 'react'
import './App.css'
import { Navbar } from './componentes/Navbar'
import Ejemplocontador from './ejemplos/Ejemplocontador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Ejemplocontador />
    </div>
  )
}

export default App
