import './App.css';
import NavBar from './Components/NavBar.js';
import ItemListContainer from './Components/ItemListContainer.js';

const App = () => {
  return (
    <>
      <NavBar titulo="Tienda online de productos sustentables y reciclados" />
      <ItemListContainer />
      
    </>
  );
}

export default App;
