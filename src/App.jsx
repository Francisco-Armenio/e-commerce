import './App.css'
import { Navbar } from './componentes/Navbar'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'

function App() {

  return (
    <div>
      <Navbar/>
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  )
}

export default App
