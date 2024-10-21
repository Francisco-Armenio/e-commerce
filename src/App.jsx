import './App.css'
import { Navbar } from './componentes/Navbar'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer/Footer'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>

      <Routes> 
        <Route path='/' element={<ItemListContainer />}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  )
}

export default App
