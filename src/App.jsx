import './App.css'
import { Navbar } from './componentes/Navbar'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer/Footer'
import Formulario from './componentes/Formulario'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>

      <Routes> 
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer />}/>
        <Route path='/detalle/:idProducto' element={<ItemDetailContainer/>}/>
      </Routes>
      <Formulario />
      <Footer/>
    </BrowserRouter>
  )
}

export default App
