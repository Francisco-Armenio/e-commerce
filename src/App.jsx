import './App.css'
import { Navbar } from './componentes/Navbar'
import ItemCount from './ItemCount/ItemCount'
import ItemListContainer from './ItemListContainer/ItemListContainer'

function App() {
  
  const agregarAlCarrito = (count) =>{
    console.log(count)
  }


  return (
    <div>
      <Navbar/>
      <ItemCount stock={5} agregarAlCarrito={agregarAlCarrito} />
      <ItemListContainer />
      
    </div>
  )
}

export default App
