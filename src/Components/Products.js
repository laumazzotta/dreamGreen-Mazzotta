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
                    <li><Link to='/category/Cuidado personal' className="dropdown-item">Cuidado personal</Link></li>
                    <li><Link to='/category/Hogar' className="dropdown-item">Hogar</Link></li>
                    <li><Link to='/category/Aire libre' className="dropdown-item">Aire libre</Link></li>
                </ul>
            </li>
        </>
    );

}

export default Products;