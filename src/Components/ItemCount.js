import {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = (props) => {

    const [cantidad, setCantidad] = useState(1);
    const increment = () => {
        if(cantidad < props.stock) setCantidad(cantidad+1);
    }
    const decrement = () => {
        if(cantidad > props.inicial) setCantidad(cantidad-1);
    }

    const agregarAlCarrito = () => {
        toast("Producto agregado al carrito!");        
    }
    
    return (
        <div className="container w-50">
            <div className="d-flex flex-row justify-content-between">
                <button onClick={decrement} className="btn btn-secondary">-</button>
                {cantidad}
                <button onClick={increment} className="btn btn-secondary">+</button>
            </div>
            <div>
                <button onClick={agregarAlCarrito} id="botonAgregar" className="btn btn-primary w-100 my-3">Agregar al carrito</button>
                <ToastContainer />
            </div>
        </div>
        
    );
}

export default ItemCount;