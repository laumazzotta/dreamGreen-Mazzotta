import ItemCount from './ItemCount.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = ({name, image, description, price}) => {

    const onAdd = (cantAgregada) => {
        toast("Agregaste " + cantAgregada + " unidades al carrito!"); 
    }
    
    return (
        <div className="card p-0">
                <img src={image} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p>
                    
                    <ItemCount stock={10} initial={1} onAdd={onAdd} />
                    <ToastContainer />
                </div>
            </div>
    );
}

export default Item;