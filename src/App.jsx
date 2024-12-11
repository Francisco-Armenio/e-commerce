import './App.css';
import { Navbar } from './componentes/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import { CartProvider } from './context/CartContext'; 
import Cart from './componentes/cart/Cart';
import Checkout from './checkout/Checkout';

function App() {
  return (
    
    <CartProvider> 
      
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        
        <Footer />
        
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
