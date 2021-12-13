import React from 'react';
import Products from './Products.js';
import logo from './logo_green.svg';
import Cart from './CartWidget.js';
import { Link } from 'react-router-dom';

const NavBar = ({titulo}) => {

    return (
        <>
        <nav className="navbar navbar-light bg-light ">
            <div className="w-100 d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between flex-wrap ">
                <Link to='/' className="navbar-brand m-3 order-1 order-lg-0"><img src={logo} className="logo-img" alt="logo" /></Link>
                <h4 className="text-primary text-center order-2 order-lg-0">{titulo}</h4>
                <div className="NavCart d-flex flex-row">
                    <Cart />
                    <button className="navbar-toggler border-0 align-self-end align-self-lg-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-primary">
                            <Products />
                            <Link to='/' className="text-decoration-none nav-item nav-link" data-bs-dismiss="offcanvas" aria-label="Close">Mi cuenta</Link>
                            <Link to='/QuienesSomos' className="text-decoration-none nav-item nav-link" data-bs-dismiss="offcanvas" aria-label="Close">Quienes somos</Link>
                            <li className="nav-item">
                                <form className="d-flex nav-link">
                                    <input className="form-control me-2" type="search" placeholder="Buscar producto" aria-label="Search" />
                                    <button className="btn btn-outline-primary" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </nav>
        
        
        </>
    );
}

export default NavBar;