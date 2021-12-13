import {useState, useEffect} from "react";

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {

    const [cantidad, setCantidad] = useState(0);

    useEffect(() => {
        setCantidad(initial);
    },[initial]);

    const increment = () => {
        if(cantidad < stock) setCantidad(cantidad+1);
    }
    const decrement = () => {
        if(cantidad > initial+1) setCantidad(cantidad-1);
    }
    
    return (
        <div>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <button onClick={decrement} className="btn btn-secondary">-</button>
                {cantidad}
                <button onClick={increment} className="btn btn-secondary">+</button>
            </div>
            <div>
                {
                    stock && cantidad
                    ? <button onClick={() => onAdd(cantidad)} id="botonAgregar" className="btn btn-primary w-100 my-3">Agregar al carrito</button>
                    : <button disabled className="btn btn-primary w-100 my-3">Agregar al carrito</button>
                }
            </div>
        </div>
        
    );
}

export default ItemCount;