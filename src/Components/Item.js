import ItemCount from './ItemCount.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = ({name, image, description, price, category}) => {

    const onAdd = (cantAgregada) => {
        toast("Agregaste " + cantAgregada + " unidades al carrito!"); 
    }
    
    return (
        
            <div className="card p-0">
                    <img src={image} className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text fw-light">{category}</p>
                        <p className="card-text">{description}</p>
                        <p className="card-text">${price}</p>
                        <div className="w-75 mx-auto">
                            <ItemCount stock={10} initial={1} onAdd={onAdd} />
                        </div>
                        <ToastContainer />
                    </div>
            </div>
    );
}

export default Item;