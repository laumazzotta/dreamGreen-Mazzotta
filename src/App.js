import './App.css';
import NavBar from './Components/NavBar.js';
import ItemListContainer from './Components/ItemListContainer.js';
import ItemDetailContainer from './Components/ItemDetailContainer.js';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Cart from './Components/Cart';
import CartContextProvider from './Components/CartContext';
import QuienesSomos from './Components/QuienesSomos';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar titulo="Tienda online de productos sustentables y reciclados" />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/QuienesSomos' element={<QuienesSomos />} />
          </Routes>
        <Footer />
        <p className="bg-primary text-center mb-0 p-3 fw-light">&copy; Laura Mazzotta 2021</p>
      </BrowserRouter>  
    </CartContextProvider>
      
    </>
  );
}

export default App;
