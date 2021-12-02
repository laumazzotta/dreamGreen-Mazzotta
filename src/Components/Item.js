
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Item = ({id, name, image, description, price, category, stock}) => {
    
    return (
        
            <div className="card p-0">
                    <Link to={`/item/${id}`} className="position-relative">
                        <p className="position-absolute top-50 start-50 translate-middle text-white boton-ver-mas">Ver más</p>
                        <img src={image} className="card-img-top" alt="img" />
                            
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text fw-light">{category}</p>
                        <p className="card-text">{description}</p>
                        <p className="card-text">${price}</p>
                        <p className="card-text">{stock}</p>
                    </div>
            </div>
    );
}

export default Item;