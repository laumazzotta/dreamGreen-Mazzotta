import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <p className="nav-link dropdown-toggle mb-0" href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Productos
                </p>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to={'/category/EYCl5yuuUB7Y2Jgu66rS'} className="dropdown-item" data-bs-dismiss="offcanvas" aria-label="Close">Cuidado personal</Link>
                    <Link to={'/category/f4CcHKoFPPZ7BfU05Tgs'} className="dropdown-item" data-bs-dismiss="offcanvas" aria-label="Close">Hogar</Link>
                    <Link to={'/category/VyenJUlaapdUyNilvilW'} className="dropdown-item" data-bs-dismiss="offcanvas" aria-label="Close">Aire libre</Link>
                </ul>
            </li>
        </>
    );

}

export default Products;