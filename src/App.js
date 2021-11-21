import './App.css';
import NavBar from './Components/NavBar.js';
import ItemListContainer from './Components/ItemListContainer.js';
import ItemDetailContainer from './Components/ItemDetailContainer.js';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar titulo="Tienda online de productos sustentables y reciclados" />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        </Routes>
    </BrowserRouter>
      
      
    </>
  );
}

export default App;
