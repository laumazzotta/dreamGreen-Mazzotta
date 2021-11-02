import './App.css';
import NavBar from './Components/NavBar.js';
import Carousel from './Components/Carousel.js';

const App = () => {
  return (
    <>
      <NavBar titulo="Tienda online de productos sustentables y reciclados" />
      <Carousel />
    </>
  );
}

export default App;
