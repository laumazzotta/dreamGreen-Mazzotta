import React from 'react';

const Products = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Productos
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="index/html">Cuidado personal</a></li>
                    <li><a className="dropdown-item" href="index/html">Hogar</a></li>
                    <li><a className="dropdown-item" href="index/html">Aire libre</a></li>
                </ul>
            </li>
        </>
    );

}

export default Products;