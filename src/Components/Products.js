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
                    <Link to={'/category/EYCl5yuuUB7Y2Jgu66rS'} className="dropdown-item">Cuidado personal</Link>
                    <Link to={'/category/f4CcHKoFPPZ7BfU05Tgs'} className="dropdown-item">Hogar</Link>
                    <Link to={'/category/VyenJUlaapdUyNilvilW'} className="dropdown-item">Aire libre</Link>
                </ul>
            </li>
        </>
    );

}

export default Products;