import './App.css';
import NavBar from './Components/NavBar.js';
// import Carousel from './Components/Carousel.js';
import CardsProductos from './Components/CardsProductos.js';

const App = () => {
  return (
    <>
      <NavBar titulo="Tienda online de productos sustentables y reciclados" />
      {/* <Carousel /> */}
      <CardsProductos />
      
    </>
  );
}

export default App;
