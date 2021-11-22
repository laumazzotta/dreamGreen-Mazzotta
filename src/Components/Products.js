import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Productos
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to={'/category/CuidadoPersonal'} className="dropdown-item">Cuidado personal</Link>
                    <Link to={'/category/Hogar'} className="dropdown-item">Hogar</Link>
                    <Link to={'/category/AireLibre'} className="dropdown-item">Aire libre</Link>
                </ul>
            </li>
        </>
    );

}

export default Products;